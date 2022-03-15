
const Audio = () => {
  const audio = useRef(null)

  useEffect(() => {
    if (!audio.current) return
    const callback = () => {
      setAudioState(s => ({
        currentTime: audio.current.currentTime,
        totalTime: audio.current.duration,
        paused: audio.current.paused,
        playing: !audio.current.paused &&
                 !audio.current.ended &&
                 audio.current.currentTime > 0 &&
                 audio.current.readyState > 2,
      }))
    }
    audio.current.src = ''
    audio.current.load()
    audio.current.onplay = callback
    audio.current.onpause = callback
    audio.current.ontimeupdate = callback
    audio.current.ondurationchange = callback
  }, [audio.current])

  useEffect(() => {
    if (!items || items.length === 0) {
      setCurrent(-1)
      return
    }
    if (current < 0) {
      setCurrent(0)
      return
    }
    audio.current.src = `/item/${items[current].id}/file`
    audio.current.onended = () => {
      if (current < items.length - 1) {
        setCurrent(current + 1)
      } else {
        setItems([])
      }
    }
    audio.current.load()
    audio.current.play()
    return () => {
      audio.current.src = ''
      audio.current.load()
      audio.current.onended = null
      audio.current.currentTime = 0
    }
  }, [current, items])

  return <audio ref={audio} prefetch='auto' />
}
