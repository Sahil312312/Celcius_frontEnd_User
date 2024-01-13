import React from 'react'
import "./Home.css"
import Img from "../celsius white with coloured.png"
import Video from "../fire video.mp4"
function Home() {
  return (
    <div>
      <nav className='nav-head'>
        <ul className='nav-class'>
            <div className='LOGO'><img src={Img} alt="" /></div>
            <div className="list-item-nav">
            <li>Home <div className="under"></div></li>
            <li>Partners <div className="under"></div></li>
            <li>Humans <div className="under"></div></li>
            <li>Schedule <div className="under"></div></li>
            <li>About Us <div className="under"></div></li>
            <li>FAQ <div className="under"></div></li>
            <li>Celsius2k24 <div className="under"></div></li>
            <li>hee</li>
            </div>
            
        </ul>
      </nav>

       <div className="block2">
            <div className="rise-line">
                <h1 className='temprature-line'>Let The Temprature <span>Rise</span></h1>
            </div>video-container

            <div className="video-part">
            <h1>hello </h1>
            <div className="">
            <video controls width="50%" height="auto">
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </div>
            </div>
       </div>
        
    </div>
  )
}

export default Home
