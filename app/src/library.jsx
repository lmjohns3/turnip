import React, { useContext, useEffect, useRef, useState } from 'react'
import { useMiniSearch } from 'react-minisearch'

import audio from './audio.jsx'
import { Art } from './common.jsx'


const Library = ({ items, albums, refresh }) => {
  const dispatch = useContext(audio.Dispatch)
  const [active, setActive] = useState('')
  const [order, setOrder] = useState('artist')
  const [query, setQuery] = useState('')
  const { search, searchResults, clearSearch, addAllAsync } = useMiniSearch([], {
    fields: ['title', 'artist', 'album', 'albumartist', 'composer'],
    storeFields: ['id'],
    searchOptions: { prefix: true, fuzzy: 0.2 },
  })
  const matchingItems = searchResults
      ? searchResults.map(({ id }) => items[id]).filter(item => item)
      : Object.values(items)
  const matchingSingles = matchingItems.filter(item => !item.album_id)
  const matchingAlbums = [
    ...new Set(matchingItems.map(item => item.album_id))
  ].filter(aid => albums[aid]).map(aid => albums[aid])

  const reorder = o => { setOrder(o); window.scrollTo({ top: 0 }) }

  const randomPlaylist = n => {
    const ids = Object.keys(items)
                      .map(x => [Math.random(), x])
                      .sort()
                      .slice(0, n)
                      .map(([_, x]) => x)
    if (ids.length) dispatch({ type: 'replace', items: ids })
  }

  useEffect(() => { addAllAsync(Object.values(items)) }, [items])

  useEffect(() => { query ? search(query) : clearSearch(query) }, [query])

  return <div className='library'>
    <ul>{[...matchingAlbums, ...matchingSingles].sort((a, b) => {
      const x = (a.sortKeys || {})[order]
      const y = (b.sortKeys || {})[order]
      if (x && y) {
        for (let i = 0; i < x.length; i++) {
          if (x[i] < y[i]) return -1
          if (x[i] > y[i]) return 1
        }
      }
      return 0
    }).map(x => {
      const k = `${x.which}-${x.id}`
      return <Group key={k} idx={k} group={x} active={active === k} setActive={setActive} />
    })}</ul>
    <nav>
      <input type='text'
             defaultValue={query}
             placeholder='Filter...'
             onFocus={e => e.target.select()}
             onChange={e => setQuery(e.target.value)} />
      <a onClick={() => reorder('random')}><span className='icon'>🔀</span> <span className='label'>Shuffle</span></a>
      <a onClick={() => reorder('artist')}><span className='icon'>🧑‍🎤️</span> <span className='label'>Artist</span></a>
      <a onClick={() => reorder('title')}><span className='icon'>💿</span> <span className='label'>Title</span></a>
      <span className='sep'></span>
      <a onClick={() => randomPlaylist(100)}><span className='icon'>🎲</span> <span className='label'>Random</span></a>
    </nav>
  </div>
}


const Group = ({ group, idx, active, setActive }) => {
  const dispatch = useContext(audio.Dispatch)
  const [editing, setEditing] = useState(false)
  const [genre, setGenre] = useState(group.genre)
  const items = group.items ? group.items.map(x => x.id) : [group.id]
  const ref = useRef(null)

  useEffect(() => {
    if (editing) document.getElementById(`genre-${idx}`).select()
  }, [editing])

  useEffect(() => {
    if (active) window.scrollTo({
      top: ref.current.getBoundingClientRect().top + window.pageYOffset - 75,
      behavior: 'smooth',
    })
  }, [active])

  return <li ref={ref} className={[group.items ? '' : 'single', active ? 'active' : ''].join(' ')}>
    <Art albumId={group.id} onClick={() => setActive(active ? '' : idx)} />
    {active && <div className='buttons'>
      <span className='play' onClick={() => dispatch({ items, type: 'replace' })}>▶️</span>
      <span className='add' onClick={() => dispatch({ items, type: 'add' })}>🞧</span>
      <span className='edit' onClick={() => setEditing(true)}>✏️</span>
    </div>}
    <span className='title ellipsis' title={group.title || group.album}>{group.title || group.album}</span>
    <span className='artist ellipsis'>{group.artist || group.albumartist}</span>
    {editing ? <input value={genre} id={`genre-${idx}`}
                      onBlur={() => setEditing(false)}
                      onChange={e => setGenre(e.target.value)} />
             : <span className='genre ellipsis'>{group.genre}</span>}
    {false && <ol>{(group.items || [group]).map(
      item => <li className='track ellipsis' key={item.id}>{item.title}</li>
    )}</ol>}
  </li>
}


export default Library
