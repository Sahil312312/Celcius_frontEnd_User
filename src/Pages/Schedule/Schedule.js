import React from 'react'
import Navbar from '../../Components/Header/Navbar'
import "./Schedule.css"
import speaker from "../../i/saksham.jpeg"
import youtube from "../../i/youtube.png"
function Schedule() {
  var data=[{id:1,eventname:'Getting started with Microservices Architecture & Conductor',speaker:'Saksham Solanki',date:'Jan 25, 2024',time:'17:00 IST'},
  {id:1,eventname:'Getting started with Microservices Architecture & Conductor',speaker:'Saksham Solanki',date:'Jan 25, 2024',time:'17:00 IST'},
  {id:1,eventname:'Getting started with Microservices Architecture & Conductor',speaker:'Saksham Solanki',date:'Jan 25, 2024',time:'17:00 IST'},
  {id:1,eventname:'Getting started with Microservices Architecture & Conductor',speaker:'Saksham Solanki',date:'Jan 25, 2024',time:'17:00 IST'},
  {id:1,eventname:'Getting started with Microservices Architecture & Conductor',speaker:'Saksham Solanki',date:'Jan 25, 2024',time:'17:00 IST'}]

  function playImages(){
    return data.map((item,i)=>{
      return(
          <div className='subbox  '>
           <div className='boxtext'>
            {item.eventname}
            </div>
            <div className='name'>
              {item.speaker}
            </div>
            <div className='time'>
              {item.date} . {item.time}
            </div>
            <div className='img-button'>
              <div className='button'>
              <div className='button-text'>Join</div>
              </div>
              
            <div className='speaker-img'><img src={speaker} alt='' className='insideimg' />
            </div> 
            </div>
            
          </div>
      )
    })
  }
  return (
    <div>
      
      
       <div className="middle-container-Schedule">
       <div className="heading">Speaker Schedule</div>
       <div  className='box'>
        {playImages()}
        </div>
        
       </div>

    </div>
  )
}

export default Schedule
