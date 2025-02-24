// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Foooter from './components/footer/Foooter'
import Navbar from './components/navbar/Navbar'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Servise from './pages/servise/Servise'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />   
        <Route path='/about' element={<About />} />  
        <Route path='/servise' element={<Servise />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Foooter />
    </BrowserRouter>
  )
}

export default App
