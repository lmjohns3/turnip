import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import audio from './audio.jsx'
import db from './db.jsx'
import { Art } from './common.jsx'
import Library from './library.jsx'
import Player from './player.jsx'
import Playlists from './playlists.jsx'

import './index.styl'


const App = () => {
  const domAudio = useRef(null)
  const [state, dispatch] =
    Turnip?.player ? audio.useServer(Turnip?.player) : audio.useBrowser(domAudio)

  // Cross-link albums with their corresponding items.
  useEffect(() => {
    if (Object.keys(albums).length === 0) return
    Object.values(items).forEach(item => {
      const album = albums[item.album_id]
      if (!album) return
      if (!album.items) album.items = []
      if (item.album) return
      album.items.push(item)
      item.album = album.album
    })
    Object.values(albums).forEach(album => {
      if (album.items) {
        album.items.sort((a, b) => {
          if (a.disc < b.disc) return -1
          if (a.disc > b.disc) return 1
          if (a.track < b.track) return -1
          if (a.track > b.track) return 1
          if (a.title < b.title) return -1
          return 1
        })
      }
    })
  }, [albums, items])

  // Annotate albums with sort data.
  useEffect(() => {
    Object.values(albums).forEach(album => {
      const title = (album.album || '~').toLowerCase().replace(/^[^~\w]+/, '')
      album.sortKeys = {
        artist: [(album.albumartist_sort || album.albumartist || '~').toLowerCase(), title],
        random: [Math.random()],
        title: [title],
      }
    })
  }, [albums])

  // Annotate items with sort data.
  useEffect(() => {
    Object.values(items).forEach(item => {
      const title = (item.title || '~').toLowerCase().replace(/^[^~\w]+/, '')
      item.sortKeys = {
        artist: [(item.artist_sort || item.artist || '~').toLowerCase(), title],
        random: [Math.random()],
        title: [title],
      }
    })
  }, [items])

  const current = items[state.items[state.idx]] || { title: 'Turnip' }

  // Update tab with currently-playing item.
  const svg = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎶</text></svg>'
  useEffect(() => {
    document.title = `${current.title} - ${current.artist}`
    const icon = document.querySelector('link[rel*="icon"]')
    if (icon) {
      icon.href = current.id ? `/api/v1/albums/${current.album_id}/cover/` : svg
    }
  }, [current.id])

  return <audio.Dispatch.Provider value={dispatch}>
    <audio ref={domAudio} preload='auto' />
    <nav>
      {view !== 'library' && <a onClick={() => setView('library')}>💿</a>}
      {false && <a onClick={() => setView('playlists')}>Playlists</a>}
      {current.id && <div className='mini-player'>
        <span className='prev' onClick={() => dispatch({ type: 'prev' })}>⏮️️</span>
        <span className='play' onClick={() => dispatch({ type: 'pause' })}>{
            state.state === 'playing' ? '⏸️' : '▶️'}</span>
        <span className='next' onClick={() => dispatch({ type: 'next' })}>⏭️</span>
        <Art key={`mini-art-${current.which}-${current.id}`} albumId={current.album_id} />
        <span className='title ellipsis' onClick={() => setView('player')}>{current.title}</span>
        <input className='volume' name='volume' type='range'
               value={state.volume} min={0.0} max={1.0} step={0.01}
               onChange={e => dispatch({ type: 'volume', volume: e.target.value})} />
      </div>}
    </nav>
  </audio.Dispatch.Provider>
}


ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <RouterProvider
    router={createBrowserRouter([{
      path: '/',
      //error: null,
      loader: () => {
        console.log('refreshing music database...')
        fetch('/api/v1/items').then(res => res.json()).then(db.items.bulkAdd)
        fetch('/api/v1/albums').then(res => res.json()).then(db.albums.bulkAdd)
      },
      element: <App />,
      children: [
        { path: '/player', element: <Player /> },
        { path: '/library', element: <Library /> },
        { path: '/playlists', element: <Playlists /> },
    ]}])} />
)
