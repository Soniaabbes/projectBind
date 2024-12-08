import React from 'react'
import './menu.css';

import UpcommingEvents from './UpcommingEvents';
function Menu2() {
  return (
    <div style={{display:"flex", flexDirection:"column",}}>
   
    <UpcommingEvents/>
    <div style={{height:'auto',marginLeft:"20px" , border:"solid" ,borderWidth:"0.25px", width:"250px" , borderColor:"#cdcdcd"}}>


      <div className="logo" style={{backgroundColor:"#f7f7f7", height:"40px", textAlign:"center"}}> <span style={{color:"#00ccb1", fontWeight:"bold", textTransform:"uppercase"}}>Intersting</span> <span style={{color:" #555", fontWeight:"bold", textTransform:"uppercase"}}> Links</span></div>
     <hr/>
      <div style={{display:"flex", margin:"10px",}}> <img src= "/africanAcademy of sciences.png" alt="African Academy Of Sciences" style={{widh:'100px', height:"30px"}}/>
          <a href="https://arise.aasciences.app/" target="_blank" rel="noopener noreferrer" style={{color:"black", textDecoration:"none", fontWeight:"400" ,fontFamily: "Arial, sans-serif", textTransform:"uppercase", marginLeft:"10px"}}> About ARISE Program</a></div>
       <hr/>
       <div style={{display:"flex", margin:"10px"}}> <img src= "/africanAcademy of sciences.png" alt="African Academy Of Sciences" style={{widh:'100px', height:"30px"}}/>
      <a href="https://arise.aasciences.app/grantees" target="_blank" rel="noopener noreferrer" style={{color:"black", textDecoration:"none", fontWeight:"400" ,fontFamily: "Arial, sans-serif", textTransform:"uppercase", marginLeft:"10px" }} > More information About Grantees
        </a>
        </div>
       
      
  
    </div>
    </div>
  )
}

export default Menu2