import React from 'react'
import Img from "../i/celsius white with coloured.png"
import "./Faq.css"

function Faq() {
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
        <h2 className="Faq-heading">FAQ</h2>
        <div className="Faq-question">
            <div className="Faq-question-left">
               <ul>
               <li className='questions'>How why when</li>
               <li className='questions'>How why when</li>
               <li className='questions'>How why when</li>
               <li className='questions'>How why when</li>
               <li className='questions'>How why when</li>
               <li className='questions'>How why when</li>
               </ul>
            </div>
            <div className="Faq-question-right">
              <ul>
                 <li className='questions'>How why when</li>
                 <li className='questions'>How why when</li>
                 <li className='questions'>How why when</li>
                 <li className='questions'>How why when</li>
                 <li className='questions'>How why when</li>
                 <li className='questions'>How why when</li>
               </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
