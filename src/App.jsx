import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Customize from './pages/Customize'
import ContactUs from './pages/ContactUs'
import Destination from './pages/Destination'
import CustomPage from './pages/CustomPage'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/customize" element={<Customize />} />
      <Route path="/destination/:handle" element={<Destination />} />
      <Route path="/custom/:handle" element={<CustomPage />} />
      <Route path="/get-in-touch" element={<ContactUs />} />
    </Routes>
  )
}

export default App
