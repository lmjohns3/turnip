import React, { useState } from 'react'

// Display album art, with a fallback to prevent the "broken" icon.
const Art = ({ albumId, onClick }) => {
  const [artError, setArtError] = useState(false)

  return <div className='art' onClick={onClick}>{
    !artError && <img src={`/api/v1/albums/${albumId}/cover/`}
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
