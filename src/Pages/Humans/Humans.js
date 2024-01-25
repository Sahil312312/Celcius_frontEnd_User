import React from 'react'
import Navbar from '../../Components/Header/Navbar'
import "./Humans.css"
import speaker from "../../i/saksham.jpeg"
import { useState } from 'react'
import youtube from "../../i/youtube.png"
import sponser from "../../i/sponsor.png"
const Humans = () => {
  const [selectedTab, setSelectedTab] = useState('partner');
  var partner=[speaker,speaker,speaker,speaker,speaker,speaker,speaker,speaker,speaker]
  var mentor=[youtube,youtube,youtube,youtube]
  var organise=[sponser,sponser,sponser]
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
 
  const renderImages = () => {
    if (selectedTab === 'partner') {
      return partner.map((item, i) => (
        <div key={i} className='speaker-img1' >
          <img src={item} alt='' className='insideimg1'/>
        </div>
      ));
    } else if (selectedTab === 'mentor') {
      return mentor.map((item, i) => (
        <div key={i} className='speaker-img1'>
          <img src={item} alt='' className='insideimg1' />
        </div>
      ));
    } else if (selectedTab === 'organizer') {
      return organise.map((item, i) => (
        <div key={i} className='speaker-img1'>
          <img src={item} alt='' className='insideimg1'/>
        </div>
      ));
    }
  };

  return (
    <div>
        <div class='maincontainer'>
          <div className='heading'>Humans</div>
        
           <div class='base-button'>
            <div   className={`partner ${selectedTab === 'partner' ? 'clicked' : ''}`}
          onClick={() => handleTabClick('partner')}>Partner Reps</div>
            <div  className={`mentor ${selectedTab === 'mentor' ? 'clicked' : ''}`}
          onClick={() => handleTabClick('mentor')}>Mentors & Judges</div>
             <div   className={`orgrainser ${selectedTab === 'organizer' ? 'clicked' : ''}`}
          onClick={() => handleTabClick('organizer')}>Organizers</div>
           </div>
       <div  className='box1'>
        {renderImages()}
        </div> 
        </div>
    </div>
  )
}

export default Humans