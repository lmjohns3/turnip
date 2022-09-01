import click
import flask
import flask_cors
import requests
import threading
import time
import urllib

import gi
gi.require_version('Gst', '1.0')
from gi.repository import GLib as glib
from gi.repository import Gst as gst

gst.init(None)


class Player:

    def __init__(self, api, fakesink=False):
        make = gst.ElementFactory.make
        self.playbin = make('playbin', 'player')
        self.playbin.set_property('video-sink', make('fakesink', 'fakesink'))
        if fakesink:
            self.playbin.set_property('audio-sink', make('fakesink', 'fakesink'))
        self.playbin.set_state(gst.State.PAUSED)

        self.api = api
        self.idx = -1
        self.items = ()

        def handle_message(bus, msg):
            print(msg.type.first_value_nick, end=' ')
            if msg.type == gst.MessageType.HAVE_CONTEXT:
                print(msg.parse_have_context().get_context_type(), end='')
            elif msg.type == gst.MessageType.NEED_CONTEXT:
                pass
            elif msg.type == gst.MessageType.STREAM_STATUS:
                print(msg.parse_stream_status().type.value_nick, end='')
            elif msg.type == gst.MessageType.STATE_CHANGED:
                delta = msg.parse_state_changed()
                print(f'{delta.oldstate.value_nick} --> '
                      f'{delta.newstate.value_nick} ', end='')
            elif msg.type == gst.MessageType.ERROR:
                print(f'Error: {msg.parse_error()[0]}', end='')
            elif msg.type == gst.MessageType.EOS:
                if 0 <= self.idx < len(self.items):
                    requests.post(f'{self.api}/actions/{self.items[self.idx]}/',
                                  json=dict(action='eos'))
                self.idx += 1
                self._update_idx()
            print('')

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
            state=self.state.value_nick,
            position=query(self.playbin.query_position),
            duration=query(self.playbin.query_duration),
            items=self.items,
            idx=self.idx,
            volume=self.playbin.get_property('volume'),
        )

    def _update_idx(self):
        if not 0 <= self.idx < len(self.items):
            return
        res = requests.get(f'{self.api}/items/{self.items[self.idx]}/path/')
        st = self.state
        self.playbin.set_state(gst.State.NULL)
        self.playbin.set_property(
            'uri', f'file://{urllib.request.pathname2url(res.text)}')
        self.playbin.set_state(st)

    def set_items(self, items, idx):
        needs_update = False
        if idx is not None:
            needs_update = needs_update or idx != self.idx
            self.idx = idx
        if items is not None:
            needs_update = needs_update or items != self.items
            self.items = items
        if needs_update:
            self._update_idx()

    def set_volume(self, volume):
        self.playbin.set_property('volume', volume)

    def play(self):
        self.playbin.set_state(gst.State.PLAYING)

    def pause(self):
        self.playbin.set_state(gst.State.PAUSED)

    def seek(self, sec):
        self.playbin.seek_simple(gst.Format(gst.Format.TIME),
                                 gst.SeekFlags.FLUSH,
                                 sec * 10**9)

    def start(self):
        t = threading.Thread(target=glib.MainLoop().run)
        t.daemon = True
        t.start()


app = flask.Flask('turnip')

flask_cors.CORS(app)

player = Player(None)


@app.route('/api/v1/player/')
def player_state():
    return flask.jsonify(player.json)

@app.route('/api/v1/items/', methods=['POST'])
def player_items():
    player.set_items(flask.request.json.get('items'),
                     flask.request.json.get('idx'))
    return flask.jsonify(player.json)

@app.route('/api/v1/volume/', methods=['POST'])
def player_volume():
    player.set_volume(flask.request.json['volume'])
    return flask.jsonify(player.json)

@app.route('/api/v1/play/', methods=['POST'])
def player_play():
    player.play()
    return flask.jsonify(player.json)

@app.route('/api/v1/pause/', methods=['POST'])
def player_pause():
    player.pause()
    return flask.jsonify(player.json)

@app.route('/api/v1/seek/<int:sec>/', methods=['POST'])
def player_seek(sec):
    player.seek(sec)
    return flask.jsonify(player.json)


@click.command()
@click.option('--host', default='0.0.0.0')
@click.option('--port', default=11111)
@click.option('--api', default='http://127.0.0.1:22222/api/v1',
              help='Use this API entry point for music data.')
def main(host, port, api):
    player.api = api
    player.start()
    player.set_items((7094,), 0)
    app.run(host=host, port=port)


if __name__ == '__main__':
    main()
