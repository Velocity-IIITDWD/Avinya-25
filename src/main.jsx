import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import Menu from './components/menu/Menu.jsx'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Menu />
    <App />
  </BrowserRouter>
)
