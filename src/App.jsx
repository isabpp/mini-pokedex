import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Pokemon from './pages/Pokemon'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pokemon />
    </>
  )
}

export default App
