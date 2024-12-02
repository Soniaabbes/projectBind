import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { TbBrandGoogleMaps } from "react-icons/tb";
import './Event.css';
import "../Menus/MenuEvent"


function Events2({ event }) {
   
  
    if (!event) {
      return <div>Loading...</div>;  
    }
  return (
    
    <div className='Event2'>
     

<div className="colloque"> 
    <div className='imgEvent'>
    <img alt="Latest Event" id="colloqueimg" src={event.img}/>
    </div>
    <div className='descriptionEvent'>
    <p className='mots'> <span className='motDesription'> {event.mot1}</span> <span className='motDesription'> {event.mot2}</span> <span className='motDesription'> {event.mot3}</span></p>
   
<p className='paragDiscription'> {event.Description}</p>
<div className='DateetLieu'> <p> <FaCalendarAlt /><span> {event.Date}</span></p> 
<p> <TbBrandGoogleMaps /> <span> {event.Lieu}</span></p>
</div>

</div>

</div>


    </div>
  )
}

export default Events2