import React from 'react'
import "./Home.css"
function Home() {
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
                <div className="text3">
                  <p>
                    By <a href="">John Deo </a> l Aug 23, 2021
                  </p>
                  <p className="slova">
                    8 Figma design systems that <br /> you can download for free <br /> today.
                  </p>
                </div>
                <div className="text4">
                  <p>
                    By <a href="">John Deo </a> l Aug 23, 2021
                  </p>
                  <p className="slova">
                    8 Figma design systems that <br /> you can download for free <br /> today.
                  </p>
                </div>
                <div className="text5">
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
              <div className="text6">
                <img src="./img/icon1.svg" alt="" />
                <h1>
                  Business
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
              <div className="text7">
                <img src="./img/icon2.svg"
                  alt="" />
                <h1>
                  Startup
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
              <div className="text8">
                <img src="./img/icon3.svg" alt="" />
                <h1>
                  Economy
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
              <div className="text9">
                <img src="./img/icon4.svg" alt="" />
                <h1>
                  Technology
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
              </div>
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
      </main>
    </>
  )
}

export default Home