import click
import flask
import requests
import threading

import gi
gi.require_version('Gst', '1.0')
from gi.repository import GLib as glib
from gi.repository import Gst as gst

gst.init(None)


class Player:

    def __init__(self, api, fakesink=False):
        self.playbin = gst.ElementFactory.make('playbin', 'player')
        self.playbin.set_property(
            'video-sink', gst.ElementFactory.make('fakesink', 'fakesink'))
        if fakesink:
            self.playbin.set_property(
                'audio-sink', gst.ElementFactory.make('fakesink', 'fakesink'))

        self.api = api
        self.playlist = None
        self.items = ()
        self.idx = -1

        def handle_message(bus, msg):
            if msg.type == gst.MessageType.ERROR:
                return print(f'Error: {msg.parse_error()[0]}')
            if msg.type == gst.MessageType.EOS:
                if 0 <= self.idx < len(self.items):
                    requests.post(f'{self.api}/actions/{self.items[self.idx]}',
                                  json=dict(action='eos', playlist=self.playlist))
                self.idx += 1
                self._update_current()

        bus = self.playbin.get_bus()
        bus.add_signal_watch()
        bus.connect('message', handle_message)

    @property
    def state(self):
        return self.playbin.get_state(gst.CLOCK_TIME_NONE)[1]

    @property
    def json(self):
        def query(get):
            ok, nsec = get(gst.Format(gst.Format.TIME))
            return nsec / 1e9 if ok else None

        return dict(
            volume=self.playbin.get_property('volume'),
            state=self.state.value_nick,
            position_sec=query(self.playbin.query_position),
            duration_sec=query(self.playbin.query_duration),
            playlist=self.playlist,
            items=self.items,
            idx=self.idx,
        )

    def _update_current(self):
        st = self.state
        self.playbin.set_state(gst.State.NULL)
        if 0 <= self.idx < len(self.items):
            uri = f'{self.api}/items/{self.items[self.idx]}/get/'
            self.playbin.set_property('uri', uri)
            self.playbin.set_state(st)

    def set_playlist(self, items, playlist=None):
        self.idx = 0
        self.items = items
        self.playlist = playlist
        self._update_current()

    def set_current(self, idx):
        self.idx = idx
        self._update_current()

    def set_volume(self, volume):
        self.playbin.set_property('volume', volume)

    def play(self):
        self.playbin.set_state(gst.State.PLAYING)

    def pause(self):
        self.playbin.set_state(gst.State.PAUSED)

    def playpause(self):
        playing, paused = gst.State.PLAYING, gst.State.PAUSED
        self.playbin.set_state(paused if self.state == playing else playing)

    def seek(self, sec):
        if 0 <= sec < (self.duration_sec or 0):
            self.playbin.seek_simple(gst.Format(gst.Format.TIME),
                                     gst.SeekFlags.FLUSH,
                                     sec * 10**9)

    def start(self):
        t = threading.Thread(target=glib.MainLoop().run)
        t.daemon = True
        t.start()


app = flask.Flask('turnip')
player = Player(None)

@app.route('/api/v1/player/')
def player_state():
    return flask.jsonify(player.json)

@app.route('/api/v1/player/playlist/', methods=['POST'])
def player_playlist():
    data = flask.request.json
    player.set_playlist(data['paths'],
                        data.get('ids', ()),
                        playlist=data.get('playlist'))
    player.play()
    return flask.jsonify(player.json)

@app.route('/api/v1/player/current/', methods=['POST'])
def player_current():
    player.set_current(flask.request.json['idx'])
    player.play()
    return flask.jsonify(player.json)

@app.route('/api/v1/player/volume/', methods=['POST'])
def player_volume():
    player.set_volume(flask.request.json['volume'])
    return flask.jsonify(player.json)

@app.route('/api/v1/player/play/', methods=['POST'])
def player_play():
    player.play()
    return flask.jsonify(player.json)

@app.route('/api/v1/player/pause/', methods=['POST'])
def player_pause():
    player.pause()
    return flask.jsonify(player.json)

@app.route('/api/v1/player/playpause/', methods=['POST'])
def player_playpause():
    player.playpause()
    return flask.jsonify(player.json)

@app.route('/api/v1/player/seek/<int:sec>/', methods=['POST'])
def player_seek(sec):
    player.seek(sec)
    return flask.jsonify(player.json)

@app.route('/')
@app.route('/<path:path>')
def index(*args, **kwargs):
    return flask.render_template('index.html')


@click.command()
@click.option('--host', '127.0.0.1')
@click.option('--port', 11111)
@click.option('--api', 'http://127.0.0.1:22222/api/v1',
              'Use this API entry point for music data.')
def main(host, port, api):
    player.api = api
    player.start()
    app.run(host=host, port=port)


if __name__ == '__main__':
    main()
