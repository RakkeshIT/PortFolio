import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Components/Home/Home'
import { About } from './Components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar/>
      <Home/>
      <About/>
    </div>
    </>
  )
}

export default App
