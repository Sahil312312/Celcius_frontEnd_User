import React from 'react';
import "./Navbar.css";
import CelsiusLogo from "../../i/celsius white with coloured.png";
// import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  return (
    <>
      <nav className='main-nav'>

        {/*1st logo part*/}

        <div className="logo"><img src={CelsiusLogo} alt="Celsius Logo" /></div>
        
        {/*2nd menu part*/}
        
        <div className="menu-link">
          <ul>
            <li>Home</li>
            <li>Schedule</li>
            <li>Humans</li>
            <li>FAQ</li>
            <li>AboutUs</li>
            <li>Celsius2k24</li>
          </ul>
        </div>
        
        {/*social media links*/}
         
        <div className="social-media">
          <ul className="social-media-desktop">
            <li><a href="">I</a></li>
            <li><a href="">F</a></li>
            <li><a href="">Y</a></li>
          </ul>

          {/* <div className="hamburger-menu"><GiHamburgerMenu/></div> */}
        </div> 
      </nav>
    </>
  );
}

export default Navbar;


