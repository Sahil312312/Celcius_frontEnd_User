import React from 'react'
import "./Schedule.css"
import Img from "../i/celsius white with coloured.png"

function Schedule() {
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
      
       <div className="middle-container">
        
       </div>

    </div>
  )
}

export default Schedule
