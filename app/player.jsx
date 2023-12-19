import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'

import { useAudio } from './audio.jsx'
import { Art, post } from './common.jsx'
import { db } from './db.jsx'


// Shuffle an array using the fisher-yates algorithm
const shuffleInPlace = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return [...arr]
}


export const MiniPlayer = ({ output }) => {
  const audio = useAudio()

  const [item, setItem] = useState(null)

  useEffect(() => { db.items.get({ id: audio.curr }).then(setItem) }, [audio.curr])

  return item ? (
    <>
      <span className='output'>{output}</span>
      <button className='prev' onClick={() => audio.dispatch({ type: 'prev' })}>⏮️️</button>
      <button className='play' onClick={() => audio.dispatch({ type: 'pause' })}>{audio.playing ? '⏸️' : '▶️'}</button>
      <button className='next' onClick={() => audio.dispatch({ type: 'next' })}>⏭️</button>
      <Art key={`mini-art-${audio.curr}`} albumId={item.album_id} />
      <Link className='title ellipsis' to='player'>{item.title}</Link>
      <input className='volume' name='volume' type='range'
             value={audio.volume} min={0.0} max={1.0} step={0.01}
             onChange={e => audio.dispatch({ type: 'volume', volume: e.target.value})} />
    </>
  ) : null
}


export const Player = () => {
  const audio = useAudio()

  return audio.curr ? (
    <div className='player'>
        <ol>
            {audio.prev.map((id, i) => <Item key={`prev-${i}-${id}`} id={id} loc='prev' />)}
            <Item key={`curr-${audio.curr}`} id={audio.curr} loc='curr' />
            {audio.next.map((id, i) => <Item key={`next-${i}-${id}`} id={id} loc='next' />)}
        </ol>
        <nav>
            <span>🔀<span className='label'>Shuffle</span></span>
            <span>🔁<span className='label'>Repeat All</span></span>
            <span>🔂<span className='label'>Repeat One</span></span>
            <span>💾<span className='label'>Save</span></span>
        </nav>
    </div>
  ) :  <Navigate to='../library' />
}


const Item = ({ id, loc }) => {
  const audio = useAudio()

  const [item, setItem] = useState(null)
  const [isRemovable, setIsRemovable] = useState(false)

  const swipeable = useSwipeable({
    onSwipedLeft: data => { setIsRemovable(true); console.log('Swiped L!', data) },
    onSwipedRight: data => { setIsRemovable(false); console.log('Swiped R!', data) },
  })

  useEffect(() => { db.items.get({ id }).then(setItem) }, [id])

  if (!id || !item) return null

  return <li className={`item ${isRemovable ? 'removable' : ''} ${loc}`} {...swipeable}>
    <div className='info' onClick={() => audio.dispatch(loc === 'curr' ? { type: 'pause' } : { type: 'goto', id })}>
      <Art albumId={item.album_id} />
      <span className='title ellipsis'>{item.title}</span>
      <span className='artist ellipsis'>{item.artist}</span>
      {isRemovable && <span className='remove' onClick={() => audio.dispatch({ type: 'remove', id })}>🗑️</span>}
    </div>
    {loc === 'curr' && <Scrubber />}
  </li>
}


const Scrubber = () => {
  const audio = useAudio()

  const formatTime = t => {
    const s = Math.floor(t % 60)
    return `${Math.floor(t / 60)}:${s < 10 ? '0' : ''}${s}`
  }

  return <div className='scrubber' onClick={
    e => audio.dispatch({ type: 'seek', fraction: e.clientX / window.innerWidth })
  }>
    <div className='bar' style={{right: `${100 * (1 - audio.position / audio.duration)}%`}}></div>
    <span className='time position'>{formatTime(audio.position)}</span>
    <span className='time duration'>{formatTime(audio.duration)}</span>
  </div>
}
