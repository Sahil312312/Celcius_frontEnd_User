import React from 'react'
import Navbar from '../../Components/Header/Navbar'
import "./Faq.css"

function Faq() {
  return (
    <div>     
      <Navbar/>
      
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
