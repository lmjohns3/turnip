import React, { useEffect, useRef, useState } from 'react'

import { Art, post } from './common.jsx'


const onClickOutside = callback => {
  const ref = useRef(null)

  useEffect(() => {
    const handler = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback()
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [ref])

  return ref
}

export const Playlists = ({ libraryItems }) => {
  const [player, setPlayer] = useState({})
  const [playlists, setPlaylists] = useState([])

  const refresh = () => fetch('/api/v1/player/').then(res => res.json()).then(setPlayer)

  useEffect(() => {
    refresh()
    fetch('/api/v1/playlists/').then(res => res.json()).then(setPlaylists)
  }, [])

  return <div className='playlists'>
    {
      player.items?.length > 0 && !player.playlist &&
      <PlayerPlaylist player={player} refresh={refresh} />
    }
    {
      playlists.map(playlist => <Playlist
                                  key={playlist.id}
                                  libraryItems={libraryItems}
                                  isPlaying={player.playlist === playlist.id}
                                  playlist={playlist}
                                  refresh={refresh} />)
    }
  </div>
}

const PlayerPlaylist = ({ player, refresh }) => {
  const [isEditing, setIsEditing] = useState(false)
  const editRef = onClickOutside(() => setIsEditing(false))

  const save = e => {
    if (!player.items.length || !e.target.value) return
    post('/api/v1/playlists/', { title: e.target.value, items: player.items }, refresh)
  }

  return <div className='playlist from-player'>
    <span className='toggle' ref={editRef} onClick={() => setIsEditing(true)}>🖍️️</span>
    <div className='title'>
      {!isEditing ? 'Currently Playing' :
       <input autoFocus
              onFocus={e => e.target.select()} onBlur={save} />}
    </div>
  </div>
}

const Playlist = ({ libraryItems, isPlaying, playlist, refresh }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [isRemoving, setIsRemoving] = useState(false)
  const editRef = onClickOutside(() => setIsEditing(false))
  const removeRef = onClickOutside(() => setIsRemoving(false))

  const save = e => {
    if (!e.target.value) return
    post(`/api/v1/playlists/${playlist.id}/`, { title: e.target.value }, refresh)
    setIsEditing(false)
  }

  const remove = () => {
    fetch(`/api/v1/playlists/${playlist.id}/`, { method: 'DELETE' }).then(refresh)
  }

  return <div className='playlist'>
    {isPlaying && '*'}
    <span className='toggle' ref={editRef} onClick={() => setIsEditing(true)}>🖍️️</span>
    <div className='arts'>{
      playlist.items.map(id => <Art key={id} albumId={libraryItems[id].album_id} />)
    }</div>
    <div className='title'>
      {!isEditing ? playlist.title :
       <input autoFocus
              onFocus={e => e.target.select()}
              defaultValue={playlist.title}
              onBlur={save} />}
    </div>
    <div className='remove' ref={removeRef}
         onClick={isRemoving ? remove : () => setIsRemoving(true)}>
      {isRemoving ? 'Confirm?' : '🗑️'}
    </div>
  </div>
}
