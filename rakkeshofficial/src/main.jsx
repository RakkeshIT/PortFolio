import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { About } from './Components/About/About.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <HashRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  </HashRouter>
  </>,
)
