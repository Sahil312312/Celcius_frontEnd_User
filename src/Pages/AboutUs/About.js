import React from 'react'
import "./About.css"
import Navbar from '../../Components/Header/Navbar'

function About() {
  return (
    <div>
      <Navbar/>

      <div className="middle-container-About">
        <div className="middle-left-container-About">
           <h1 className="middle-container-left-heading">What Set's Us <br /><span className='Apart'>Apart</span></h1>
           <p className='middle-left-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam iure possimus optio ratione. Fuga tempore ab velit culpa corrupti libero minus tenetur facilis, ullam et laudantium nihil at? Harum, sed.</p>
        </div>
        <div className="middle-right-container-About">

        </div>
      </div>
    </div>
  )
}

export default About
