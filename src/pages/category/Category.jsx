import React, { useState } from 'react'
import "./Category.css"
import { useParams } from 'react-router-dom'

function Category({ categorys }) {

  const { id } = useParams()
  const [oneCategory, setOneCategory] = useState(categorys.filter((item) => {
    return item.id == id
  }))

  return (
    <>
      {oneCategory && (
        <>
          <div className="categoryHero">
            <div className="container">
              <h1>{oneCategory[0].titel}</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore.</p>
              <h4>Blog {'>'} Business</h4>
            </div>
          </div>
          <div className="categorySection">
            <div className="container">
              <div className="categoryLeft">
                <div className="categoryBox">
                  <div className="categorybox1">
                    <img src="https://s3-alpha-sig.figma.com/img/f36a/ceb1/331b3b8ac3a1d67fcd41a038e1383b54?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k72chsnFlhLIQ0rt6vrm4VCcQIzVLzF1aADCgm4QBCxfwGPuPNbsabeMPwg~Q-m4J7qy-UxY1h5tmI-PBaGMgRS6Htmjt9Vjz-NcdGVAwHfwetdaVG-J2VgoTQp2fpIQM955cdWE4Fu53vVBl7uZvqdHMrS3IV1FW0KHPYkNhpElxKfb5GXyxIY-mj~p38stcYoQlyYDK3nQFmRWU-~hGnCxOHr6PabohG6lvPJo03HggS~2kaV9YiAOg7Z1NZQy3QjGxbbwWi9Jk1EG3x~0aZCbNceWHp0gQX3dKlxKHNQk8-iv5EBQPeUPSmCxjd1xYC-m04R97wEEAi4GMT3LqQ__" alt="" />
                  </div>
                  <div className="categorybox2">
                    <h5>Business</h5>
                    <h1>Top 6 free website mockup <br /> tools  2022</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Non <br /> blandit massa enim nec.</p>
                  </div>
                </div>
                <div className="categoryBox">
                  <div className="categorybox1">
                    <img src="https://s3-alpha-sig.figma.com/img/f36a/ceb1/331b3b8ac3a1d67fcd41a038e1383b54?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k72chsnFlhLIQ0rt6vrm4VCcQIzVLzF1aADCgm4QBCxfwGPuPNbsabeMPwg~Q-m4J7qy-UxY1h5tmI-PBaGMgRS6Htmjt9Vjz-NcdGVAwHfwetdaVG-J2VgoTQp2fpIQM955cdWE4Fu53vVBl7uZvqdHMrS3IV1FW0KHPYkNhpElxKfb5GXyxIY-mj~p38stcYoQlyYDK3nQFmRWU-~hGnCxOHr6PabohG6lvPJo03HggS~2kaV9YiAOg7Z1NZQy3QjGxbbwWi9Jk1EG3x~0aZCbNceWHp0gQX3dKlxKHNQk8-iv5EBQPeUPSmCxjd1xYC-m04R97wEEAi4GMT3LqQ__" alt="" />
                  </div>
                  <div className="categorybox2">
                    <h5>Business</h5>
                    <h1>Step-by-step guide to choosing <br /> great font pairs</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Non <br /> blandit massa enim nec.</p>
                  </div>
                </div>
                <div className="categoryBox">
                  <div className="categorybox1">
                    <img src="https://s3-alpha-sig.figma.com/img/f36a/ceb1/331b3b8ac3a1d67fcd41a038e1383b54?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k72chsnFlhLIQ0rt6vrm4VCcQIzVLzF1aADCgm4QBCxfwGPuPNbsabeMPwg~Q-m4J7qy-UxY1h5tmI-PBaGMgRS6Htmjt9Vjz-NcdGVAwHfwetdaVG-J2VgoTQp2fpIQM955cdWE4Fu53vVBl7uZvqdHMrS3IV1FW0KHPYkNhpElxKfb5GXyxIY-mj~p38stcYoQlyYDK3nQFmRWU-~hGnCxOHr6PabohG6lvPJo03HggS~2kaV9YiAOg7Z1NZQy3QjGxbbwWi9Jk1EG3x~0aZCbNceWHp0gQX3dKlxKHNQk8-iv5EBQPeUPSmCxjd1xYC-m04R97wEEAi4GMT3LqQ__" alt="" />
                  </div>
                  <div className="categorybox2">
                    <h5>Business</h5>
                    <h1>Ten free foogle fonts that you <br /> should use</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Non <br /> blandit massa enim nec.</p>
                  </div>
                </div>
                <div className="categoryBox">
                  <div className="categorybox1">
                    <img src="https://s3-alpha-sig.figma.com/img/f36a/ceb1/331b3b8ac3a1d67fcd41a038e1383b54?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k72chsnFlhLIQ0rt6vrm4VCcQIzVLzF1aADCgm4QBCxfwGPuPNbsabeMPwg~Q-m4J7qy-UxY1h5tmI-PBaGMgRS6Htmjt9Vjz-NcdGVAwHfwetdaVG-J2VgoTQp2fpIQM955cdWE4Fu53vVBl7uZvqdHMrS3IV1FW0KHPYkNhpElxKfb5GXyxIY-mj~p38stcYoQlyYDK3nQFmRWU-~hGnCxOHr6PabohG6lvPJo03HggS~2kaV9YiAOg7Z1NZQy3QjGxbbwWi9Jk1EG3x~0aZCbNceWHp0gQX3dKlxKHNQk8-iv5EBQPeUPSmCxjd1xYC-m04R97wEEAi4GMT3LqQ__" alt="" />
                  </div>
                  <div className="categorybox2">
                    <h5>Business</h5>
                    <h1>What did I learn from doing 50+ <br /> design sprints?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Non <br /> blandit massa enim nec.</p>
                  </div>
                </div>
              </div>
              <div className="categoryRight">
                <h1>
                  Categories
                </h1>
                <div className="categoryCards">
                  {
                    categorys.map((item) => {
                      return <div className="categoryCard">
                        <div><img src={item.img} alt="" /></div>
                        <div><h3>{item.titel}</h3></div>
                      </div>


                    })
                  }
                </div>
                <div className="categoryCards2">
                  <h1>
                    All Tags
                  </h1>
                  <div className='categoryCard2'>
                    <div>
                      <p>Business</p>
                    </div>
                    <div>
                      <p>Experience</p>
                    </div>
                  </div>
                  <div className='categoryCard2'>
                    <div>
                      <p>Screen</p>
                    </div>
                    <div>
                      <p>Technology</p>
                    </div>
                  </div>
                  <div className='categoryCard2'>
                    <div>
                      <p>Marketing</p>
                    </div>
                    <div>
                      <p>Life</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </>
      )
      }
    </>
  )
}

export default Category