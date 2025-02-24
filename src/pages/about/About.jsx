import React from 'react'
import "./About.css"

function About() {
  return (
    <div className="about">
      <div className="AboutHero">
        <div className="container">
          <div className="hero1">
            <h5>
              Featured Post
            </h5>
            <h1>
              Step-by-step guide to choosing great <br />  font pairs
            </h1>
            <p>
              By <span>John Doe</span> | May 23, 2022
            </p>
            <p className="pppp">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla
              pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <button>
              Read More
            </button>
          </div>
          <div>
            <img src="https://s3-alpha-sig.figma.com/img/6374/8d1f/bd83d188028be8a810fd08204554ab09?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mXk9BgaeXlR0ZuHHrcRjE4Rnr0xRVHgRRoP7OO7TxRflOKw3vmwpdCkjXfKoSlajv-O7apgCIu5fYDb3yi2iGp5OMhqM5FWNnWo250ZmWfir3rcXJ-nd45LVxfR1wu~995Nv9-pA1ff8zk7S1lS5oMzJXud8q3QFu9wVVGlSVnW-HiyqPPoaZKMEtrGMN9umi3lXwtPeWllCtQVjpzPgjnKKN9sCeZoeW3LZDT03oNnVVqnabW20Z3sW7yTWUW5utbquG9T80rAktArYyzGwG~qia6-2JsiKdO-NUOSfaQjSpaUvmuy~GXH0E5jn6FpFDkPFTJvVuhAIen87sUdzQA__" alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="AboutSection">
          <h2>All posts</h2>
          <div className='chiziq'></div>
          <div className="cards">
            <div className="card1">
              <img src="https://s3-alpha-sig.figma.com/img/f36a/ceb1/331b3b8ac3a1d67fcd41a038e1383b54?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k72chsnFlhLIQ0rt6vrm4VCcQIzVLzF1aADCgm4QBCxfwGPuPNbsabeMPwg~Q-m4J7qy-UxY1h5tmI-PBaGMgRS6Htmjt9Vjz-NcdGVAwHfwetdaVG-J2VgoTQp2fpIQM955cdWE4Fu53vVBl7uZvqdHMrS3IV1FW0KHPYkNhpElxKfb5GXyxIY-mj~p38stcYoQlyYDK3nQFmRWU-~hGnCxOHr6PabohG6lvPJo03HggS~2kaV9YiAOg7Z1NZQy3QjGxbbwWi9Jk1EG3x~0aZCbNceWHp0gQX3dKlxKHNQk8-iv5EBQPeUPSmCxjd1xYC-m04R97wEEAi4GMT3LqQ__" alt="" />
            </div>
            <div className="card2">
              <h5>Startup</h5>
              <h1>Design tips for designers that cover <br /> everything you need</h1>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
          </div>
          <div className="cards">
            <div className="card1">
              <img src="https://s3-alpha-sig.figma.com/img/1c9d/c67a/009ea3ac2018c459ce84161d1b88796f?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kOBongPf~0NT2~aq3at4fryFo0TSZZ-qbkvPVfHc0s~~M0bvmRvA09RZp3zqEkpAGATBJ096~re60vzNvBl2oh9LmPFNDuc2nUqzJgaMjTCHZ78Wa9W7NH3j9lWtO-8No~Bfl1Y68Wsyw8lQwAF-SBe~e6StRLCpi9Ktg-JTyIotTvZxL3vAQhVltfiyF0MKAv8NMlbxIL2gyMq5ds-NxFF09kQfw8ZYV7HQyLAB-RbDxMgnVbtKZkY~L0ksVjwaCS4RXPKn2WCzDh44TaqQ1PVTfC29V6jsj-KJRQ0dAE7-WEkra2SpZ~IgCKUC7wbO2ZMfpMBgHFo-BQBXrCF20A__" alt="" />
            </div>
            <div className="card2">
              <h5>Startup</h5>
              <h1>Design tips for designers that cover <br /> everything you need</h1>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
          </div>
          <div className="cards">
            <div className="card1">
              <img src="https://s3-alpha-sig.figma.com/img/0624/fa81/56d20f4f437855e425ccde79eec2a93c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YJNPOjfLQYBxlZLDQ8BFVfAC7dLdgcijaHtDbB5lZUn7cHm8YUAKCSe~eA9p~p1FBb~1-lvBiygPtmXaVALMjYz-RXi0saKIAAV9SPc4xinnHIPtqsnz8~-9KxOm0So7kaMcANvsZEVagjZfm~rhu87lpQf3tPU7CDfeXAgsjd9GATbRuYE2Hn1YcfM94pCll0jzKKn2eookhhTnzTKt1xRpnRkBUIxYBa1OjDzZfZRY8Ryp-sTNFXbfFNh6eEyQ6SqH8KFo4PfscDHM5M7fy6rxx3TxHReYYfZlZ0e1CSE1z2Rv4XR5kK3POvv8aMy2ebSVlDGOc-F5ndA3rOLq-g__" alt="" />
            </div>
            <div className="card2">
              <h5>Startup</h5>
              <h1>Design tips for designers that cover <br /> everything you need</h1>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
          </div>
          <div className="cards">
            <div className="card1">
              <img src="https://s3-alpha-sig.figma.com/img/6374/8d1f/bd83d188028be8a810fd08204554ab09?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mXk9BgaeXlR0ZuHHrcRjE4Rnr0xRVHgRRoP7OO7TxRflOKw3vmwpdCkjXfKoSlajv-O7apgCIu5fYDb3yi2iGp5OMhqM5FWNnWo250ZmWfir3rcXJ-nd45LVxfR1wu~995Nv9-pA1ff8zk7S1lS5oMzJXud8q3QFu9wVVGlSVnW-HiyqPPoaZKMEtrGMN9umi3lXwtPeWllCtQVjpzPgjnKKN9sCeZoeW3LZDT03oNnVVqnabW20Z3sW7yTWUW5utbquG9T80rAktArYyzGwG~qia6-2JsiKdO-NUOSfaQjSpaUvmuy~GXH0E5jn6FpFDkPFTJvVuhAIen87sUdzQA__" alt="" />
            </div>
            <div className="card2">
              <h5>Startup</h5>
              <h1>Design tips for designers that cover <br /> everything you need</h1>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat <br /> nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About