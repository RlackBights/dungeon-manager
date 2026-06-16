import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainMenu from './components/MainMenu/MainMenu'
import './main.css'

let router = createBrowserRouter([
  {
    path: "/",
    Component: MainMenu
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)