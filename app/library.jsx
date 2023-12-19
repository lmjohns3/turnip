import { useLiveQuery } from 'dexie-react-hooks'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAudio } from './audio.jsx'
import { Art } from './common.jsx'
import { db } from './db.jsx'

const ORDERS = {
  artist: album => album.albumartist_sort || album.albumartist || album.album || `${album.id}`,
  title: album => album.album.replace(/\W/g, '') || `${album.id}`,
  random: album => `${Math.random()}`,
}


export const Library = () => {
  const audio = useAudio()
  const navigate = useNavigate()

  const [selectedGenre, setSelectedGenre] = useState('')
  const [genres, setGenres] = useState(null)
  useEffect(() => { db.items.orderBy('genre').uniqueKeys().then(setGenres) }, [])

  const [query, setQuery] = useState('')
  const [order, setOrder] = useState('artist')

  const albums = useLiveQuery(
    () => db.albums.toArray(),
    [selectedGenre, query, order],
  )

  if (!albums) return null

  const reorder = o => { setOrder(o); window.scrollTo({ top: 0 }) }

  const randomPlaylist = n => {
    const ids = items.map(item => [Math.random(), item.id]).sort().slice(0, n).map(([_, x]) => x)
    if (ids.length) {
      audio.dispatch({ type: 'replace', ids })
      navigate('../player')
    }
  }

  return <div className='library'>
    <ul>{albums.sort((a, b) => ORDERS[order](a).toLowerCase().localeCompare(ORDERS[order](b).toLowerCase())).map(
      album => <Album key={`${album.id}-${album.album}`} album={album} />)
    }</ul>
    <nav>
      <input type='text'
             defaultValue={query}
             placeholder='Filter...'
             onFocus={e => e.target.select()}
             onBlur={e => setQuery(e.target.value)} />

      <select defaultValue={selectedGenre} onChange={e => setSelectedGenre(e.target.value)}>
        <option key='' value=''>Genre</option>
        {genres && genres.map(g => g && <option key={g} value={g}>{g}</option>)}
      </select>
      <button onClick={() => reorder('random')}><span className='icon'>🔀</span> <span className='label'>Shuffle</span></button>
      <button onClick={() => reorder('artist')}><span className='icon'>🧑‍🎤️</span> <span className='label'>Artist</span></button>
      <button onClick={() => reorder('title')}><span className='icon'>💿</span> <span className='label'>Title</span></button>
      <span className='sep'></span>
      <button onClick={() => randomPlaylist(13)}><span className='icon'>🎲</span> <span className='label'>Random</span></button>
    </nav>
  </div>
}


const Album = ({ album }) => {
  const ref = useRef(null)
  const audio = useAudio()
  const [active, setActive] = useState(false)
  const [items, setItems] = useState(null)

  useEffect(() => {
    if (!active) return
    if (ref.current) window.scrollTo({
      top: ref.current.getBoundingClientRect().top + window.pageYOffset - 60,
      behavior: 'smooth',
    })
    if (!items) db.items.where({ album_id: album.id }).toArray().then(
      items => setItems(items.sort((a, b) => a.disc < b.disc ? -1 :
                                             a.disc > b.disc ? 1 :
                                             a.track < b.track ? -1 :
                                             a.track > b.track ? 1 :
                                             localeCompare(a.title > b.title)))
    )
  }, [active])

  if (!album) return null

  return <li ref={ref} className={active ? 'active' : ''}>
    <Art albumId={album.id} onClick={() => setActive(a => !a)} />
    <span className='title ellipsis' title={album.album}>{album.album}</span>
    <span className='artist ellipsis' title={album.albumartist}>{album.albumartist}</span>
    {active && items && <ol className='items'>{items.map(
        item => <li key={item.id}>
            {null && audio.prev.includes(item.id) && '➊➋➌➍➎➏➐➑➒➓'[9-audio.prev.indexOf(item.id)]}
            {null && audio.curr === item.id ? '▷' : ' '}
            {null && audio.next.includes(item.id) && '➀➁➂➃➄➅➆➇➈➉'[audio.next.indexOf(item.id)]}
            {item.title}
        </li>
    )}</ol>}
    {active && <ul className='buttons'>
      <button onClick={() => audio.dispatch({ type: 'replace', ids: items.map(i => i.id) })}>▶️</button>
      <button onClick={() => audio.dispatch({ type: 'add', ids: items.map(i => i.id) })}>➕️</button>
    </ul>}
  </li>
}
