import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="navv">
          <div className="logo">
            <Link to="/">
              <img src="./img/Logo.svg" alt="" />
            </Link>
          </div>
          <div className="nav2">
            <ul className="links">
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/about" >About</Link>
              </li>
              <li>
                <Link to="/servise" >Servise</Link>
              </li>
              <li>
                <Link to="/contact" >Contact</Link>
              </li>
            </ul>
            <button>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar