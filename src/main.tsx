import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import { NoMatch } from './components/Errors/404';
import { Player } from './components/Player';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/Hypixel-Tracker/",
    element: <App/>
  },
  {
    path: "/Hypixel/Tracker/player/:name",
    element: <Player />,  
    
  },
  {
    path: "*",
    element: <NoMatch />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
