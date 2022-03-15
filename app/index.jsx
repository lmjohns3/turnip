import localforage from 'localforage'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'

import { Art, post } from './common'
import Library from './library'
import Player from './player'
import Playlists from './playlists'

import './index.styl'

const useCachedData = which => {
  const key = `beets-library-${which}`
  const [elements, setElements] = useState({})

  useEffect(() => {
    localforage.getItem(key).then(local => {
      if (local) {
        setElements(local)
      } else {
        fetch(`/api/v1/${which}`)
          .then(res => res.json())
          .then(els => {
            const m = Object.fromEntries(els.map(el => ([el.id, { ...el, which }])))
            localforage.setItem(key, m)
            setElements(m)
          })
      }
    })
  }, [])

  return elements
}

const MiniPlayer = ({ player, libraryItems }) => {
  if (!player.items) return null
  const current = libraryItems[player.items[player.idx]]
  if (!current) return null
  const navigate = useNavigate()

  return <div className='mini-player'>
    <Art albumId={current.album_id} onClick={() => navigate('/player/')} />
    <span className='title' onClick={() => navigate('/player/')}>{current.title}</span>
    <span className='play' onClick={() => post('/api/v1/player/playpause/')}>
      {player.state === 'playing' ? '⏸️'  : '▶️'}</span>
  </div>
}

const App = () => {
  const albums = useCachedData('albums')
  const items = useCachedData('items')

  const [version, setVersion] = useState(0)
  const [player, setPlayer] = useState({})

  const refresh = () => fetch('/api/v1/player/').then(res => res.json()).then(setPlayer)

  useEffect(() => {
    const id = setInterval(refresh, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (Object.keys(albums) === 0 || Object.keys(items) === 0) return
    Object.values(items).forEach(item => {
      const album = albums[item.album_id]
      if (!album) return
      if (!album.items) album.items = []
      album.items.push(item)
      item.album = album.album
    })
  }, [albums, items])

  return <BrowserRouter>
    <nav>
      <Link title='Library' to='/'>💿️ Library</Link>
      <Link title='Playlists' to='/playlists/'>🎼️ Playlists</Link>
      <MiniPlayer player={player} libraryItems={items} />
    </nav>
    <Routes>
      <Route path='/' element={<Library items={items} albums={albums} />} />
      <Route path='/player/' element={
        <Player player={player} libraryItems={items} />} />
      <Route path='/playlists/' element={<Playlists libraryItems={items} />} />
    </Routes>
  </BrowserRouter>
}

ReactDOM.render(<App />, document.getElementById('root'))
