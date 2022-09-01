import React, { useEffect, useRef, useState } from 'react'

// Display album art, with a fallback to prevent the "broken" icon.
const Art = ({ albumId, onClick }) => {
  const [artError, setArtError] = useState(!albumId)
  const [artVisible, setArtVisible] = useState(false)
  const artRef = useRef(null)

  useEffect(() => {
    if (artError) return
    const cur = artRef.current
    if (!cur) return
    const obs = new IntersectionObserver(
      ([{ isIntersecting }]) => setArtVisible(isIntersecting),
      { rootMargin: '0px', threshold: 0.1 })
    obs.observe(cur)
    return () => obs.unobserve(cur)
  }, [artRef.current, artError])

  return <div className='art' ref={artRef} onClick={onClick}>{
    artVisible && !artError && <img src={`/api/v1/albums/${albumId}/cover/`}
                                    onError={() => setArtError(true)} />
  }</div>
}

// Post an HTTP request.
const post = (url, data, callback) => fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data || {}),
}).then(res => res.json()).then(callback || (() => {}))

export { Art, post }
