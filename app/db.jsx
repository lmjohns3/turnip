import Dexie from 'dexie'


const db = new Dexie('turnip')


db.version(1).stores({
  items: '&id, genre, year, artist, title, album_id',
  albums: '&id, genre, year, albumartist, album',
  playlists: 'name, *item_id',
})


export default db
