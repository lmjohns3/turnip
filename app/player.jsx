import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'

import { Art, post } from './common'

import './player.styl'

// Shuffle an array using the fisher-yates algorithm
const shuffleInPlace = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return [...arr]
}

// A client-side component reflecting the state of the server-side player.
const Player = ({ player, libraryItems }) => {
  const params = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (params.state) {
      const data = {}
      if (params.state.playlist) {
        data.playlist = params.state.playlist
      }
      if (params.state.items) {
        data.items = params.state.items.map(item => item.id)
      }
      post('/api/v1/player/playlist/', data)
    }
  }, [params])

  if (!player.state) return null
  if (player.items.length === 0) navigate('/library/')

  return <div className='player'>
    <nav>
      <span>🔀 Shuffle</span>
      <span>🔁 Repeat</span>
      <span>💾 Save</span>
    </nav>
    {player.items.map((itemId, idx) => <Item key={itemId}
                                             idx={idx}
                                             player={player}
                                             item={libraryItems[itemId]} />)}
  </div>
}

const Item = ({ idx, item, player }) => {
  if (!item) return null

  const play = () => post('/api/v1/player/current/', { idx })
  const isCurrent = idx === player.idx

  const others = player.items.filter(id => id !== item.id)
  const removeThisItem = () => post('/api/v1/player/playlist/', { items: others })
  const [isRemovable, setIsRemovable] = useState(false)
  const swipeable = useSwipeable({
    onSwipedLeft: data => { setIsRemovable(true); console.log('Swiped L!', data) },
    onSwipedRight: data => { setIsRemovable(false); console.log('Swiped R!', data) },
  })

  return <div className={`item ${isRemovable ? 'removable' : ''} ${isCurrent ? 'current' : ''}`} {...swipeable}>
    <div className='info' onClick={play}>
      <Art albumId={item.album_id} />
      <span className='title'>{item.title}</span>
      <span className='artist'>{item.artist}</span>
      {isRemovable && <span className='remove' onClick={removeThisItem}>🗑️</span>}
    </div>
    {isCurrent && <Scrubber player={player} />}
  </div>
}

const Scrubber = ({ player }) => {
  const formatTime = t => {
    const s = Math.floor(t % 60)
    return `${Math.floor(t / 60)}:${s < 10 ? '0' : ''}${s}`
  }

  return <div className='scrubber'>
    <div className='bar' style={{
      right: `${100 * (1 - player.position_sec / player.duration_sec)}%`
    }}><span className='time'>{formatTime(player.position_sec)}</span></div>
    <span className='time'>{formatTime(player.duration_sec)}</span>
  </div>
}

export default Player
