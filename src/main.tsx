import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Page from './components/Page/Page'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Page />
    </StrictMode>
)