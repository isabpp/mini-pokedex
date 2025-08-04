import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Pokemon from './pages/Pokemon'
import Locations from './pages/Locations'
import NavBar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <NavBar />
      <Routes>
        <Route path='/' element={<Pokemon />}/>
        <Route path='/locations' element={<Locations />}/>
      </Routes>
    </div>
  )
}

export default App
