import Dexie from 'dexie'

export const db = new Dexie('turnip')

db.version(1).stores({
  items: '&id, genre, year, album_id',
  albums: '&id, genre, year',
  playlists: '&name',
})

export const filterAlbums = (genre, query, order) => {
  let collection = db.albums
  if (genre) collection = collection.where({ genre })
  if (query) {
    const words = query.toLowerCase().split(/ +/)
    collection = collection.filter(album => {
      const test = (album.albumartist + album.album).toLowerCase()
      return words.every(w => test.includes(w))
    })
  }
  return collection.orderBy(`${order}_sort`).toArray()
}

export const filterSingles = (genre, query, order) => {
  let collection = db.items.where({ album_id: null })
  if (genre) collection = collection.where({ genre })
  if (query) {
    const words = query.toLowerCase().split(/ +/)
    collection = collection.filter(item => {
      const test = (item.artist + item.title).toLowerCase()
      return words.every(w => test.includes(w))
    })
  }
  return collection.orderBy(`${order}_sort`).toArray()
}

export const refresh = () => {
  console.log('refreshing music database...')

  const populateItems = () => db.items.clear()
    .then(() => fetch('/api/v1/items'))
    .then(res => res.json())
    .then(rows => {
      console.log('adding', rows.length, 'items')
      return db.items.bulkAdd(rows)
    })

  const populateAlbums = () => db.albums.clear()
    .then(() => fetch('/api/v1/albums'))
    .then(res => res.json())
    .then(rows => {
      console.log('adding', rows.length, 'albums')
      return db.albums.bulkAdd(rows)
    })

  return populateItems().then(() => populateAlbums())
}
