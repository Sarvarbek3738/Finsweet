import React, { useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
function Home({ categorys }) {

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero1">
            <p>
              Posted on startup
            </p>
            <h1>
              Step-by-step guide to choosing <br /> great font pairs
            </h1>
            <p>
              By <span>James West</span> | May 23, 2022
            </p>
            <p className="pppp">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <button>
              Read More
            </button>
          </div>
          <div>

          </div>
        </div>
      </div>
      <main>
        <section className="section1" >
          <div className="container">
            <div>
              <div className="star1">
                <h1>Featured Post</h1>
              </div>
              <div className=" text1 ">

                <div>
                  <img src="./img/white-concrete-building-1838640.png" alt="" />
                </div>
                <p>
                  By John Doe l May 23, 2022
                </p>
                <h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </h1>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                <button>
                  Read More
                </button>
              </div>
            </div>
            <div>
              <div className="star1">
                <h1>
                  All Posts
                </h1>
              </div>
              <div className="star">
                <div className="text2">
                  <p>
                    By <a href="">John Deo </a> l Aug 23, 2021
                  </p>
                  <p className="slova">
                    8 Figma design systems that <br /> you can download for free <br /> today.
                  </p>
                </div>
                <div className="text2">
                  <p>
                    By <a href="">John Deo </a> l Aug 23, 2021
                  </p>
                  <p className="slova">
                    8 Figma design systems that <br /> you can download for free <br /> today.
                  </p>
                </div>
                <div className="text2">
                  <p>
                    By <a href="">John Deo </a> l Aug 23, 2021
                  </p>
                  <p className="slova">
                    8 Figma design systems that <br /> you can download for free <br /> today.
                  </p>
                </div>
                <div className="text2">
                  <p>
                    By <a href="">John Deo </a> l Aug 23, 2021
                  </p>
                  <p className="slova">
                    8 Figma design systems that <br /> you can download for free <br /> today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section2">
          <div className="container">
            <div>
              <h1>
                Choose A Catagory
              </h1>
            </div>

            <div className="textlar">
              {
                categorys.map((item) => {
                  return <Link to={`/category/${item.id}`}>
                    <div className="text6">
                      <img src={item.img} alt="" />
                      <h1>
                        {item.titel}
                      </h1>
                      <p>
                        {item.decr}
                      </p>
                    </div>
                  </Link>
                })
              }
            </div>
          </div>
        </section>
        <section className="section3">
          <div className="container">
            <div className="text10">
              <div className="text11">
                <h4>
                  Why we started
                </h4>
                <h1>
                  It started out as a <br /> simple idea and evolved <br /> into our passion
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
                <button>
                  Discover our story
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='section4'>
          <div className="container">
            <h1>List of Authors</h1>
            <div className="section4Boxs">
              <Link to="/posts">
                <div className="section4Box">
                  <img className='img' src="/public/img/author1.png" alt="" />
                  <h2>Floyd Miles</h2>
                  <h4>Content Writer @Company</h4>
                  <div class="socials">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                  </div>
                </div>
              </Link>
              <Link to="/posts">
                <div className="section4Box">
                  <img className='img' src="/public/img/author1.png" alt="" />
                  <h2>Floyd Miles</h2>
                  <h4>Content Writer @Company</h4>
                  <div class="socials">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                  </div>
                </div>
              </Link>
              <Link to="/posts">
                <div className="section4Box">
                  <img className='img' src="/public/img/author1.png" alt="" />
                  <h2>Floyd Miles</h2>
                  <h4>Content Writer @Company</h4>
                  <div class="socials">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                  </div>
                </div>
              </Link>
              <Link to="/posts">
                <div className="section4Box">
                  <img className='img' src="/public/img/author1.png" alt="" />
                  <h2>Floyd Miles</h2>
                  <h4>Content Writer @Company</h4>
                  <div class="socials">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className='section5'>
          <div className="container">
            <div className="section5Box1">
              <h4>TESTIMONIALS</h4>
              <h1>What people say <br /> about our blog</h1>
              <h5>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor.</h5>
            </div>
            <div className="section5Box2">
              <p>Lorem ipsum dolor sit amet,  <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.</p>
              <div className="jony">
                <div>
                  <h3>
                    Jonathan Vallem
                  </h3>
                  <h5>
                    New york, USA
                  </h5>
                </div>
                <div className='stirelka' >
                  <div><h5>{"←"}</h5></div>
                  <div><h5>{"→"}</h5></div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <section className='section6'>
          <div className="container">
            <h1>Join our team to be a part <br /> of our story</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do eiusmod tempor incididunt.</p>
            <button>
              Join Now
            </button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home