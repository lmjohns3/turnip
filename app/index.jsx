import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Link,
  Navigate,
  NavLink,
  Outlet,
  RouterProvider,
  useParams,
} from 'react-router-dom'

import { Audio } from './audio.jsx'
import * as db from './db.jsx'
import { Library } from './library.jsx'
import { MiniPlayer, Player } from './player.jsx'
import { Playlists } from './playlists.jsx'

import './index.styl'


const App = () => {
  const output = useParams().output

  return output ? (
      <Audio output={output}>
          <nav className='top'>
              <NavLink to='library'>💿</NavLink>
              <NavLink to='playlists'>🎶</NavLink>
              <MiniPlayer output={output} />
              <span className='sep'></span>
              <Link id='refresh' to='refresh'>🔄</Link>
          </nav>
          <Outlet />
      </Audio>
  ) : <Navigate to='/local' />
}


ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <RouterProvider
    router={createBrowserRouter([{
      path: ':output?',
      //error: null,
      element: <App />,
      children: [
        { index: true, element: <Navigate to='./library' /> },
        { path: 'library', element: <Library /> },
        { path: 'player', element: <Player /> },
        { path: 'playlists', element: <Playlists /> },
        { path: 'refresh', element: <Navigate to='../library' />, loader: db.refresh },
    ]}])} />
)
