import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'

import HomePage from './components/HomePage'
import Layout from './components/Layout'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Routes>
  <Route path='/' element={<Layout/>}>
   <Route index element={<HomePage />} />
  <Route path='projects' element={<Projects/>}></Route>
  <Route path='about' element={<About/>}></Route>
   <Route path='contact' element={<Contact/>}></Route>

  </Route>
  </Routes>
  )
}

export default App
