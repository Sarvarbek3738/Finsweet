import React from 'react'
import "./Footer.css"

function Foooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-nav">
          <div className="logo">
            <img src="img/Logo.svg" alt="" />
          </div>
          <div className="navbar-nav">
            <ul className="links">
              <li><a href="">Home</a></li>
              <li><a href="">Blog</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Contact Us</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-hero">
          <h1>Subscribe to our news letter to get latest updates and news</h1>
          <div className="contact">
            <form>
              <input type="text" placeholder="Enter Your Email" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-foot">
          <div className="adress">
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <div class="socials">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Foooter