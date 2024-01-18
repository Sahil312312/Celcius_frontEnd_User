import React from 'react'
import "./Navbar.css"
import Img from "../../i/celsius white with coloured.png"
function Navbar() {
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
    </div>
  )
}

export default Navbar
