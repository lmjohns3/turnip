import React, { useEffect, useRef, useState } from 'react'
import { useMiniSearch } from 'react-minisearch'
import { useNavigate, useParams } from 'react-router-dom'

import './library.styl'

const Library = ({ items, albums, refresh }) => {
  const [version, setVersion] = useState(0)
  const [order, setOrder] = useState('')
  const [query, setQuery] = useState(useParams().query || '')
  const { search, searchResults, clearSearch, addAllAsync } = useMiniSearch([], {
    fields: ['title', 'artist', 'album', 'albumartist', 'composer', 'genre'],
    storeFields: ['id'],
    searchOptions: { prefix: true },
  })
  const singles = Object.values(items).filter(item => !item.album_id)

  const byMany = ({sortBy: a}, {sortBy: b}) => {
    if (a && b) {
      for (let i = 0; i < a.length; i++) {
        if (a[i] < b[i]) return -1
        if (a[i] > b[i]) return 1
      }
    }
    return 0
  }

  useEffect(() => { addAllAsync(Object.values(items)) }, [items])

  useEffect(() => { query ? search(query) : clearSearch(query) }, [query])

  useEffect(() => {
    singles.forEach(x => {
      const title = (x.title || '~').toLowerCase().replace(/^[^~\w]+/, '')
      const artist = (x.artist_sort || x.artist || '~').toLowerCase()
      const genre = x.genre.toLowerCase()
      x.sortBy = order === 'date' ? [x.year, artist, title] :
                 order === 'artist' ? [artist, title, ''] :
                 order === 'title' ? [title, '', ''] :
                 order === 'genre' ? [genre, artist, title] : ['', '', '']
    })
    Object.values(albums).forEach(x => {
      const title = (x.album || '~').toLowerCase().replace(/^[^~\w]+/, '')
      const artist = (x.albumartist_sort || x.albumartist || '~').toLowerCase()
      const genre = x.genre.toLowerCase()
      x.sortBy = order === 'date' ? [x.year, artist, title] :
                 order === 'artist' ? [artist, title, ''] :
                 order === 'title' ? [title, '', ''] :
                 order === 'genre' ? [genre, artist, title] : ['', '', '']
    })
    setVersion(v => v + 1)
  }, [order])

  useEffect(() => { setTimeout(() => setOrder('artist'), 1000) }, [])

  const matchingItems = searchResults
      ? searchResults.map(({ id }) => items[id]).filter(item => item)
      : Object.values(items)
  const matchingSingles = matchingItems.filter(item => !item.album_id)
  const matchingAlbums = [
    ...new Set(matchingItems.map(item => item.album_id))
  ].filter(aid => albums[aid]).map(aid => albums[aid])

  return <div className='library'>
    <nav>
      <input type='text'
             defaultValue={query}
             placeholder='Filter...'
             onFocus={e => e.target.select()}
             onChange={e => setQuery(e.target.value)} />
      <a className={order === 'date' ? 'order' : ''} onClick={() => setOrder('date')}>
        <span className='icon'>📅</span> <span className='label'>Year</span></a>
      <a className={order === 'artist' ? 'order' : ''} onClick={() => setOrder('artist')}>
        <span className='icon'>🧑‍🎤️</span> <span className='label'>Artist</span></a>
      <a className={order === 'title' ? 'order' : ''} onClick={() => setOrder('title')}>
        <span className='icon'>💿</span> <span className='label'>Title</span></a>
      <a className={order === 'genre' ? 'order' : ''} onClick={() => setOrder('genre')}>
        <span className='icon'>🪕️</span> <span className='label'>Genre</span></a>
    </nav>
    <ul>{[...matchingAlbums, ...matchingSingles]
      .sort(byMany)
      .map(x => <Group key={`${x.which}-${x.id}`} group={x} />)}</ul>
  </div>
}

const observeIntersection = (target, callback) => {
  useEffect(() => {
    const obs = new IntersectionObserver(callback, { rootMargin: '0px', threshold: 0.1 })
    const cur = target.current
    obs.observe(cur)
    return () => obs.unobserve(cur)
  }, [])
}

const Group = ({ group }) => {
  const navigate = useNavigate()
  const [hue, setHue] = useState(0)
  const [artVisible, setArtVisible] = useState(false)
  const [artError, setArtError] = useState(false)
  const artRef = useRef()

  observeIntersection(artRef, ([{ isIntersecting }]) => setArtVisible(isIntersecting))

  useEffect(() => { setHue(group.which === 'albums' ? 90 : 270) }, [])

  return <li onClick={() => { navigate('/player/', { state: { items: group.items } }) }}>
    <div className='art' ref={artRef} style={{background: `hsl(${hue}, 30%, 70%)`}}>{
      group.which === 'albums' && artVisible && !artError &&
      <img src={`/api/v1/albums/${group.id}/cover/`} onError={() => setArtError(true)} />
    }</div>
    <span className='title' title={group.title || group.album}>{group.title || group.album}</span>
    <span className='artist'>{group.artist || group.albumartist}</span>
    <span className='genre'>{group.genre}</span>
  </li>
}

export default Library
