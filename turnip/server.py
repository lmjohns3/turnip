import beets.library
import click
import datetime
import flask
import flask_cors
import flask_sqlalchemy
import re

app = flask.Flask('turnip')
flask_cors.CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

sql = flask_sqlalchemy.SQLAlchemy()


# Playlists.

class Playlist(sql.Model):
    id = sql.Column(sql.Integer, primary_key=True)

    title = sql.Column(sql.String, nullable=False)
    items = sql.Column(sql.Text, nullable=False)

    def to_dict(self):
        return dict(
            id=self.id,
            title=self.title,
            items=[int(i.strip()) for i in self.items.split(',')],
        )

@app.route('/api/v1/playlists/')
def playlists():
    return flask.jsonify([pl.to_dict() for pl in Playlist.query.all()])

@app.route('/api/v1/playlists/', methods=['POST'])
def create_playlist():
    data = flask.request.json
    pl = Playlist(items=','.join(str(i) for i in data['items']),
                  title=data.get('title', 'Untitled'))
    sql.session.add(pl)
    sql.session.commit()
    return flask.jsonify(pl.to_dict())

@app.route('/api/v1/playlists/<int:id>/', methods=['POST'])
def update_playlist(id):
    data = flask.request.json
    pl = Playlist.query.get(id)
    if pl and ('items' in data or 'title' in data):
        if 'items' in data:
            pl.items = ','.join(str(i) for i in data['items'])
        if 'title' in data:
            pl.title = data['title']
        sql.session.add(pl)
        sql.session.commit()

@app.route('/api/v1/playlists/<int:id>/', methods=['DELETE'])
def delete_playlist(id):
    pl = Playlist.query.get(id)
    if pl:
        sql.session.delete(pl)
        sql.session.commit()


# Actions when interacting with library -- skip/listen/etc.

class Action(sql.Model):
    id = sql.Column(sql.Integer, primary_key=True)

    action = sql.Column(sql.String, nullable=False)
    when = sql.Column(sql.DateTime, nullable=False)
    item_id = sql.Column(sql.Integer, nullable=False)
    position_sec = sql.Column(sql.Integer, nullable=False, default=-1)


@app.route('/api/v1/actions/<int:item_id>/', methods=['POST'])
def create_action(item_id):
    data = flask.request.json
    sql.session.add(Action(
        action=data['action'],
        when=datetime.datetime.now(),
        position_sec=data.get('position_sec', -1),
        item_id=item_id))
    sql.session.commit()


# Beets library / data.

ITEM_KEYS = ('id', 'album_id', 'title', 'genre', 'year',
             'artist', 'artist_sort', 'track', 'disc')

@app.route('/api/v1/items/', methods=['GET'])
def get_items():
    lib = app.config['BEETS_LIBRARY']
    return flask.jsonify([
        {k: item.get(k) for k in ITEM_KEYS} for item in lib.items()
    ])

@app.route('/api/v1/items/<int:id>/stream/', methods=['GET'])
def stream(id):
    lib = app.config['BEETS_LIBRARY']
    return flask.send_file(lib.get_item(id).path.decode())

@app.route('/api/v1/items/<int:id>/path/', methods=['GET'])
def get_path(id):
    return app.config['BEETS_LIBRARY'].get_item(id).path

@app.route('/api/v1/items/<int:id>/', methods=['POST'])
def update_item(id):
    lib = app.config['BEETS_LIBRARY']
    item = lib.get_item(id)
    return flask.jsonify({k: item.get(k) for k in ITEM_KEYS})

ALBUM_KEYS = ('id', 'album', 'albumartist', 'albumartist_sort', 'genre', 'year')

@app.route('/api/v1/albums/', methods=['GET'])
def get_albums():
    lib = app.config['BEETS_LIBRARY']
    return flask.jsonify([
        {k: album.get(k) for k in ALBUM_KEYS} for album in lib.albums()
    ])

@app.route('/api/v1/albums/<int:id>/cover/', methods=['GET'])
def get_cover(id):
    lib = app.config['BEETS_LIBRARY']
    album = lib.get_album(id)
    if album and album.artpath:
        return flask.send_file(album.artpath.decode())
    return flask.abort(404)


@app.route('/', methods=['GET'])
@app.route('/<path:player>', methods=['GET'])
def index(player=''):
    return flask.render_template('index.html', player=app.config['PLAYERS'].get(player, ''))


@click.command()
@click.option('--host', default='0.0.0.0')
@click.option('--port', default=22222)
@click.option('--debug/--no-debug', default=False)
@click.option('--beets-db', type=str, required=True)
@click.option('--turnip-db', type=str, required=True)
@click.option('--player', type=str, multiple=True)
def main(host, port, debug, beets_db, turnip_db, player):
    app.config['SQLALCHEMY_ECHO'] = debug
    app.config['SQLALCHEMY_DATABASE_URI'] = turnip_db
    app.config['BEETS_LIBRARY'] = beets.library.Library(beets_db)
    app.config['PLAYERS'] = {}
    for p in player:
        m = re.match('^(?P<key>[a-z-]+)=(?P<target>[\w\d\.:/-]+)$', p)
        if m:
            print('Registered player', m.group('key'), m.group('target'))
            app.config['PLAYERS'][m.group('key')] = m.group('target')
    sql.init_app(app)
    app.run(host=host, port=port, debug=debug)


if __name__ == '__main__':
    main()
