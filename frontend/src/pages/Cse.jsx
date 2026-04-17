import React from 'react'
import './CSE.css'
import cse from '../assets/cse.webp'
const ActionButtons = () => {
  const handleDownload = () => {
    window.open('/path/to/your/brochure.pdf', '_blank');
  }
  };
  const handleApply = () => {
    window.location.href = '/apply';
  };
const Cse = () => {
  return (
    <div className='cse-section'>
      <div className="cse-header">
        <div className="header-text">
          <h4>Turn Curiosity into Code — Build the Future with CSE at PCTE!</h4>
          <p2>From intelligent machines to real-time data solutions, PCTE’s CSE program equips you with hands-on skills, global exposure, and the career edge needed in tomorrow’s tech world.</p2>
        </div>
        <div className="header-img">
          <img src={cse} alt="CSE Image" />
        </div>
      </div>
       <div className="highlight">
      <div className="phs">
        Our 
        <p1>Program</p1>
        Highlights
      </div>
      <p>
        The B.Tech CSE program at PCTE is crafted to build future-ready software engineers and tech architects. Covering everything from programming fundamentals and full-stack development to cloud computing and cybersecurity, the curriculum is designed to bridge the gap between academic knowledge and industry demand. Through project-based learning, labs, and industry tie-ups, students gain practical exposure and confidence to thrive in the evolving tech landscape.
      </p>
       </div>
       <div className="login-sec">

       </div>
    </div>
  )
}

export default Cse