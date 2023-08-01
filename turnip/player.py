import click
import flask
import flask_cors
import logging
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

    def __init__(self, turnip=None, fakesink=False):
        make = gst.ElementFactory.make
        self.playbin = make('playbin', 'player')
        self.playbin.set_property('video-sink', make('fakesink', 'fakesink'))
        if fakesink:
            self.playbin.set_property('audio-sink', make('fakesink', 'fakesink'))
        self.playbin.set_state(gst.State.PAUSED)
        self.playbin.set_property('volume', 0.2)

        self.turnip = turnip
        self.idx = -1
        self.items = ()

        def handle_message(bus, msg):
            args = [msg.type.first_value_nick]
            if msg.type == gst.MessageType.HAVE_CONTEXT:
                args.append(msg.parse_have_context().get_context_type())
            elif msg.type == gst.MessageType.NEED_CONTEXT:
                pass
            elif msg.type == gst.MessageType.STREAM_STATUS:
                args.append(msg.parse_stream_status().type.value_nick)
            elif msg.type == gst.MessageType.STATE_CHANGED:
                d = msg.parse_state_changed()
                args.append(f'{d.oldstate.value_nick} > {d.newstate.value_nick}')
            elif msg.type == gst.MessageType.ERROR:
                args.append(f'Error: {msg.parse_error()[0]}')
            elif msg.type == gst.MessageType.EOS:
                if 0 <= self.idx < len(self.items):
                    requests.post(f'{self.turnip}/actions/{self.items[self.idx]}/',
                                  json=dict(action='eos'))
                self.idx += 1
                self._update_idx()
            logging.debug(' '.join(args))

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
        res = requests.get(f'{self.turnip}/items/{self.items[self.idx]}/path/')
        print('got', res.text)
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


player = Player()

app = flask.Flask('turnip')
flask_cors.CORS(app)


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
    player.set_volume(float(flask.request.json['volume']))
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
@click.option('--turnip', default='http://127.0.0.1:22222/api/v1',
              help='Get music data from this turnip server.')
def main(host, port, turnip):
    player.turnip = turnip
    player.start()
    app.run(host=host, port=port)


if __name__ == '__main__':
    main()
