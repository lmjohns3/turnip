import React, { useEffect, useReducer, useState } from 'react'
import * as musicMeta from 'music-metadata-browser';

import { post } from './common.jsx'

const Dispatch = React.createContext()


const fadeVolumeTo = (aud, target) => {
  console.log('setting audio volume to', Math.round(1000 * target) / 1000)
  const msec = 500
  const steps = 10
  const final = target <= 0 ? 1e-4 : target > 1 ? 1 : target
  const delta = (target - aud.volume) / steps
  const inc = () => {
    aud.volume += delta
    if (Math.abs(target - aud.volume) > Math.abs(delta))
      setTimeout(inc, msec / steps)
  }
  setTimeout(inc, msec / steps)
}


const useBrowser = audioRef => {
  const [player, dispatch] = useReducer((state, action) => {
    const aud = audioRef.current
    if (!aud) return state

    const playable = i => (i >= 0 && i < state.items.length)

    const load = () => {
      aud.src = ''
      aud.currentTime = 0
      aud.volume = 0.5
      if (playable(state.idx)) {
        aud.src = `/api/v1/items/${state.items[state.idx]}/stream/`
        aud.onended = () => dispatch({ type: 'next' })
        musicMeta.fetchFromUrl(aud.src, { duration: false, skipCovers: true })
                 .then(meta => {
                   const ratio = meta?.common?.replaygain_album_gain?.ratio
                   if (ratio) fadeVolumeTo(aud, (1 + ratio) / 2)
                 })
      } else {
        state.state = ''
        aud.onended = null
      }
      aud.play()
    }

    if (action.type === 'sync') return { ...state, ...action.update }

    if (action.type === 'pause') {
      state.state === 'playing' ? aud.pause() : aud.play()
    } else if (action.type === 'seek') {
      state.position = aud.currentTime = state.duration * action.fraction
    } else if (action.type === 'add') {
      const idx = action.index
      const len = state.items.length
      const cur = playable(state.idx) ? state.items[state.idx] : -1
      state.items.splice((idx >= 0 && idx <= len) ? idx : len, 0, ...action.items)
      state.idx = state.items.indexOf(cur)
    } else if (action.type === 'remove') {
      state.items.splice(action.idx, 1)
      if (state.idx === action.idx) load()
    } else {
      if (action.type === 'replace') state.items = action.items
      state.idx = action.type === 'stop' ? -1 :
                  action.type === 'next' ? state.idx + 1 :
                  action.type === 'prev' ? state.idx - 1 :
                  action.type === 'idx' ? action.idx :
                  action.type === 'replace' ? 0 :
                  state.idx
      load()
    }

    return { ...state }
  }, { idx: -1, items: [], state: '', position: 0, duration: 0 })

  useEffect(() => {
    const aud = audioRef.current
    if (!aud) return

    const callback = () => {
      dispatch({
        type: 'sync',
        update: {
          position: aud.currentTime,
          duration: aud.duration,
          state: aud.paused ? 'paused' :
                 (!aud.paused &&
                  !aud.ended &&
                  aud.currentTime > 0 &&
                  aud.readyState > 2) ? 'playing' : '',
        }
      })
    }

    aud.src = ''
    aud.load()
    aud.onplay = callback
    aud.onpause = callback
    aud.ontimeupdate = callback
    aud.ondurationchange = callback
  }, [audioRef.current])

  return [player, dispatch]
}


const useServer = api => {
  const [player, dispatch] = useReducer((state, action) => {
    const playable = i => (i >= 0 && i < state.items.length)

    if (action.type === 'sync') return { ...state, ...action.update }

    if (action.type === 'pause') {
      state.state === 'playing' ? post(`${api}/pause/`) : post(`${api}/play/`)
    } else if (action.type === 'seek') {
      post(`${api}/seek/${Math.round(state.duration * action.fraction)}/`)
    } else {
      if (action.type === 'add') {
        const idx = action.index
        const len = state.items.length
        const cur = playable(state.idx) ? state.items[state.idx] : -1
        state.items.splice((idx >= 0 && idx <= len) ? idx : len, 0, ...action.items)
        state.idx = state.items.indexOf(cur)
      } else if (action.type === 'remove') {
        state.items.splice(action.idx, 1)
      } else if (action.type === 'replace') {
        state.items = action.items
      }
      state.idx = action.type === 'stop' ? -1 :
                  action.type === 'next' ? state.idx + 1 :
                  action.type === 'prev' ? state.idx - 1 :
                  action.type === 'idx' ? action.idx :
                  action.type === 'replace' ? 0 :
                  state.idx
      post(`${api}/items/`, state)
    }

    return { ...state }
  }, { idx: -1, items: [], state: '', position: 0, duration: 0 })

  useEffect(() => {
    const id = setInterval(() => fetch(`${api}/player/`)
      .then(res => res.json())
      .then(ps => dispatch({ type: 'sync', update: ps })), 1000)
    return () => clearInterval(id)
  }, [])

  return [player, dispatch]
}


export default { Dispatch, useBrowser, useServer }
