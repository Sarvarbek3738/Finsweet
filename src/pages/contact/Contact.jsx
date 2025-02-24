import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="contactText">
            <h5>Contact us</h5>
            <h3>Let’s Start a Conversation</h3>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua. Ut enim ad minim.</h1>
          </div>
          <div className="contactBox">
            <div className="Box">
              <div className="box1">
                <p>Working hours</p>
                <div className="chiziq"></div>
                <h4>
                Monday To Friday <br />
                9:00 AM to 8:00 PM 
                </h4>
                <p>Our Support Team is available 24/7</p>
              </div>
              <div className="box2">
                <p>Contact Us</p>
                <div className="chiziq"></div>
                <h4>
                020 7993 2905
                </h4>
                <p>
                hello@finsweet.com
                </p>
              </div>
            </div>
            <form className='contactinout' action="">
              <input type="text" placeholder='Full Name' />
              <input type="text" placeholder='Your Email' />
              <input type="text" placeholder='Query Related  ' />
              <input type="text" placeholder='Message'/>
              <button className='btnContact'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact