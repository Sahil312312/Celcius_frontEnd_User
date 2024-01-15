import React from 'react'
import "./Navbar.css"
import Img from "../../i/celsius white with coloured.png"
import { useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className='nav-head'>
        <ul className='nav-class'>
            <div className='LOGO'><img src={Img} alt="" /></div>
            <div className="list-item-nav">
           <div onClick={()=>navigate('/')}> <li >Home <div className="under"></div></li></div>
            <div onClick={()=>navigate('/partners')}><li >Partners <div className="under"></div></li></div>
            <li onClick={()=>navigate('/humans')}>Humans <div className="under"></div></li>
            <li onClick={()=>navigate('/schedule')}>Schedule <div className="under"></div></li>
            <li onClick={()=>navigate('/about')}>About Us <div className="under"></div></li>
            <li onClick={()=>navigate('/faq')}>FAQ <div className="under"></div></li>
            <li>Celsius2k24 <div className="under"></div></li>
            
            </div>
            
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
