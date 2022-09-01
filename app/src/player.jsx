import React, { useContext, useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import audio from './audio.jsx'
import { Art, post } from './common.jsx'


// Shuffle an array using the fisher-yates algorithm
const shuffleInPlace = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return [...arr]
}


const Player = ({ items, player }) => {
  const dispatch = useContext(audio.Dispatch)
  const current = items[player.items[player.idx]] || {}

  return <div className='player'>
    <ol>{player.items.map(
        (itemId, idx) => <Item key={`player-${idx}-${itemId}`}
                               idx={idx}
                               player={player}
                               item={items[itemId]} />)
    }</ol>
    {false && <nav>
      <span>🔀<span className='label'>Shuffle</span></span>
      <span>🔁<span className='label'>Repeat All</span></span>
      <span>🔂<span className='label'>Repeat One</span></span>
      <span>💾<span className='label'>Save</span></span>
    </nav>}
  </div>
}


const Item = ({ idx, item, player }) => {
  if (!item) return null

  const dispatch = useContext(audio.Dispatch)

  const others = player.items.filter(id => id !== item.id)
  const removeThisItem = () => dispatch({ type: 'remove', idx })
  const [isRemovable, setIsRemovable] = useState(false)

  const isCurrent = idx === player.idx

  const swipeable = useSwipeable({
    onSwipedLeft: data => { setIsRemovable(true); console.log('Swiped L!', data) },
    onSwipedRight: data => { setIsRemovable(false); console.log('Swiped R!', data) },
  })

  return <li className={`item ${isRemovable ? 'removable' : ''} ${isCurrent ? 'current' : ''}`}
             {...swipeable}>
    <div className='info' onClick={
      () => dispatch(isCurrent ? { type: 'pause' } : { type: 'idx', idx })
    }>
      <Art albumId={item.album_id} />
      <span className='title ellipsis'>{item.title}</span>
      <span className='artist ellipsis'>{item.artist}</span>
      {isRemovable && <span className='remove' onClick={removeThisItem}>🗑️</span>}
    </div>
    {isCurrent && <Scrubber player={player} />}
  </li>
}


const Scrubber = ({ player }) => {
  const dispatch = useContext(audio.Dispatch)
  const formatTime = t => {
    const s = Math.floor(t % 60)
    return `${Math.floor(t / 60)}:${s < 10 ? '0' : ''}${s}`
  }

  return <div className='scrubber' onClick={
    e => dispatch({ type: 'seek', fraction: e.clientX / window.innerWidth })
  }>
    <div className='bar' style={{right: `${100 * (1 - player.position / player.duration)}%`}}></div>
    <span className='time position'>{formatTime(player.position)}</span>
    <span className='time duration'>{formatTime(player.duration)}</span>
  </div>
}


export default Player
