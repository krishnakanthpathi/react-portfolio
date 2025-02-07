import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Navbar from './components/Navbar'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)
