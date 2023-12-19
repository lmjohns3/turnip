import { Buffer } from 'buffer'
if (typeof window.Buffer === 'undefined') window.Buffer = Buffer

import process from 'process'
if (typeof window.process === 'undefined') window.process = process

import React, { createContext, useContext, useEffect, useReducer, useRef } from 'react'
import * as musicMetadata from 'music-metadata-browser'

import { db } from './db.jsx'
import { post } from './common.jsx'


const AudioContext = React.createContext({})


const initialState = () => ({
  prev: [],
  curr: null,
  next: [],
  playing: false,
  position: 0,
  duration: 0,
  volume: 0.5,
})


const fadeVolumeTo = (aud, target) => {
  console.log('setting audio volume to', Math.round(1000 * target) / 1000)
  const msec = 500
  const steps = 3
  const delta = (target - aud.volume) / steps
  const inc = () => {
    aud.volume += delta
    if (Math.abs(target - aud.volume) > Math.abs(delta))
      setTimeout(inc, msec / steps)
  }
  setTimeout(inc, msec / steps)
}


const handleCommon = (state, action) => {
  if (action.type === 'update') return { ...state, ...action.update }

  if (action.type === 'next' && state.next.length) {
    if (state.curr) state.prev.push(state.curr)
    state.curr = state.next.shift()
  }

  if (action.type === 'goto') {
    const p = state.prev.indexOf(action.id)
    const n = state.next.indexOf(action.id)
    if (p > -1) {
      state.next.unshift(state.curr)
      state.next.unshift(...state.prev.splice(p))
      state.curr = state.next.shift()
    }
    if (n > -1) {
      state.prev.push(state.curr)
      state.prev.push(...state.next.splice(0, n))
      state.curr = state.next.shift()
    }
  }

  if (action.type === 'prev' && state.prev.length) {
    if (state.curr) state.next.unshift(state.curr)
    state.curr = state.prev.pop()
  }

  if (action.type === 'add') state.next.push(...action.ids)

  if (action.type === 'replace') {
    state.prev = []
    state.curr = null
    state.next = action.ids
    if (state.next.length) state.curr = state.next.shift()
  }
  
  if (action.type === 'remove') {
    if (!action.ids) action.ids = [action.id]
    state.prev = state.prev.filter(id => !action.ids.includes(id))
    if (action.ids.includes(state.curr)) state.curr = null
    state.next = state.next.filter(id => !action.ids.includes(id))
    if (state.next.length && state.curr === null) state.curr = state.next.shift()
  }

  //console.log('new audio state', state)

  return { ...state }
}


const browserAudio = audioRef => {
  const update = () => {
    const aud = audioRef.current
    if (!aud) return
    dispatch({
      type: 'update',
      update: {
        position: aud.currentTime,
        duration: aud.duration,
        volume: aud.volume,
        playing: !aud.paused && !aud.ended && aud.currentTime > 0 && aud.readyState > 2,
      }
    })
  }

  const [player, dispatch] = useReducer((state, action) => {
    const aud = audioRef.current
    if (!aud) return state

    const current = state.curr

    state = handleCommon(state, action)

    if (action.type === 'pause' && state.curr) {
      state.playing ? aud.pause() : aud.play()
    } else if (action.type === 'seek' && state.curr) {
      aud.currentTime = aud.duration * action.fraction
    } else if (action.type === 'volume') {
      aud.volume = action.volume
    } else if (current !== state.curr) {
      if (state.curr) {
        const url = `/api/v1/items/${state.curr}/stream/`
        musicMetadata.fetchFromUrl(url, { duration: false, skipCovers: true })
                     .then(meta => {
                       const ratio = meta?.common?.replaygain_album_gain?.ratio
                       if (ratio) fadeVolumeTo(aud, ratio)
                     })
        aud.src = url
        aud.onended = () => dispatch({ type: 'next' })
      } else {
        aud.src = ''
        aud.currentTime = 0
        aud.onended = null
      }
      aud.onplay = update
      aud.onpause = update
      aud.ontimeupdate = update
      aud.ondurationchange = update
      aud.play()
    }

    return state
  }, initialState())

  return [player, dispatch]
}


const serverAudio = api => {
  const [player, dispatch] = useReducer((state, action) => {
    state = handleCommon(state, action)

    if (action.type === 'pause' && state.curr) {
      state.playing ? post(`${api}/pause/`) : post(`${api}/play/`)
    } else if (action.type === 'seek' && state.curr) {
      post(`${api}/seek/${Math.round(state.duration * action.fraction)}/`)
    } else if (action.type === 'volume') {
      post(`${api}/volume/`, { volume: state.volume })
    } else if (action.type !== 'update') {
      post(`${api}/items/`, state)
    }

    return state
  }, initialState())

  useEffect(() => {
    const id = setInterval(() => fetch(`${api}/player/`)
      .then(res => res.json())
      .then(update => dispatch({ type: 'update', update })), 1000)
    return () => clearInterval(id)
  }, [])

  return [player, dispatch]
}


export const useAudio = () => useContext(AudioContext)


export const Audio = ({ output, children }) => {
  const domAudio = useRef(null)

  const [state, dispatch] = output === 'local' ? browserAudio(domAudio) : serverAudio(output)

  useEffect(() => {
    const send = (e, t) => { e.preventDefault(); dispatch({ type: t }) }
    const handler = e => {
      if (e.key === ' ') send(e, 'pause')
      if (e.key === 'ArrowLeft') send(e, 'prev')
      if (e.key === 'ArrowRight') send(e, 'next')
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Update document with currently-playing item.
  const svg = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎶</text></svg>'
  useEffect(() => {
    const icon = document.querySelector('link[rel*="icon"]')
    document.title = 'Turnip'
    if (icon) icon.href = svg
    if (state.curr) db.items.get({ id: state.curr }).then(item => {
      document.title = `${item.title} - ${item.artist}`
      if (icon) icon.href = `/api/v1/albums/${item.album_id}/cover/`
    })
  }, [state.curr])

  if (!output) return null

  return <>
      <audio ref={domAudio} preload='auto' />
      <AudioContext.Provider value={{ ...state, dispatch }}>{children}</AudioContext.Provider>
  </>
}
