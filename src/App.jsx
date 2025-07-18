import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Pokemon from './pages/Pokemon'
import Locations from './pages/Locations'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pokemon />
      <Locations />
    </>
  )
}

export default App
