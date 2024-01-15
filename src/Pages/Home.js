import React from 'react'
import "./Home.css"
import Img from "../i/celsius white with coloured.png"
import Form from "../Components/SimpleForm"
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
            
            </div>
            
        </ul>
      </nav>

        <div className="block2">
            <div className="rise-line">
                <h1 className='temprature-line'>Let The Temprature <span>Rise</span></h1>
            </div>

            <div className="Login-Form">
                 <Form/>
            </div>
       </div>

       <div className="address">
        <h3>MITS GWALIOR <span className='date'> ,16-18 FEB 2024</span></h3>
       </div>
        
    </div>
  )
}

export default Home
