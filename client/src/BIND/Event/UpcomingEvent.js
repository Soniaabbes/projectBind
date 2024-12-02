import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function UpcomingEvent() {
  return (
    <div style={{margin:"100px"}}>

<div className='UpcomingEvents'>
        <h1 id='commingSoon'>Coming Soon!</h1>
        <p id='newEvent'>New events are coming..</p>
        <p id='newEvent'>Stay tuned by visiting our social media!</p>
        <div  >
         <a  href='https://www.facebook.com/profile.php?id=61559781611552&locale=fr_FR' target="_blank" rel="noopener noreferrer">
<FaFacebookF   className='icon' />
</a>  
<a  href='https://www.linkedin.com/company/bind-ai4dd/'  target="_blank" rel="noopener noreferrer">
<FaLinkedin  className='icon' />
</a> 
<a href='mailto:emna.harigua@pasteur.utm.tn' target="_blank" rel="noopener noreferrer">
        <MdEmail  className='icon' />
      </a> 
        </div>
    </div>


    </div>
  )
}

export default UpcomingEvent