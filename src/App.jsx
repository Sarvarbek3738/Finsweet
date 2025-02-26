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
import Category from './pages/category/Category'
import Posts from './pages/posts/Posts'
import { useState } from 'react'

function App() {
  const [categorys, setCategiys] = useState([
    {
      id: 0,
      titel: "Busines",
      decr: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      img: "/img/business-and-trade 1.svg"

    },
    {
      id: 1,
      titel: "Startup",
      decr: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      img: "/img/Component 4.svg"

    },
    {
      id: 2,
      titel: "Economy",
      decr: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      img: "/img/business-and-trade 1 (1).svg"

    },
    {
      id: 3,
      titel: "Technology",
      decr: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      img: "/img/business-and-trade 1 (2).svg"

    }
  ])
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home categorys={categorys} />} />
        <Route path='/about' element={<About />} />
        <Route path='/servise' element={<Servise />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/category/:id' element={<Category categorys={categorys} />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
      <Foooter />
    </BrowserRouter>
  )
}

export default App
