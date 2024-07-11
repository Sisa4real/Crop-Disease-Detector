import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Home } from './components/pages/Home'
import Scan from './components/pages/Scan'
import { About } from './components/pages/About'
import { Help } from './components/pages/Help'
import { Ecosystem } from './components/pages/Ecosystem'
import { History } from './components/pages/History'
import { Solution } from './components/pages/Solution'
const router = createHashRouter([
  {
    path: '/',
    element: (
      <>
        <App />
      </>
    ),
  },
  {
    path: '/home',
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: '/scan',
    element: (
      <>
        <Scan />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <About />
      </>
    ),
  },
  {
    path: '/help-center',
    element: (
      <>
        <Help />
      </>
    ),
  },
  {
    path: '/ecosystem',
    element: (
      <>
        <Ecosystem />
      </>
    ),
  },
  {
    path: '/history',
    element: (
      <>
        <History />
      </>
    ),
  },
    {
    path: '/solution',
    element: (
      <>
        <Solution />
      </>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
