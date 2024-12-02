import React from 'react'

function UpcommingEvents() {
  return (
    <div>
<div style={{height:'auto',margin:"20px" , border:"solid" ,borderWidth:"0.25px", width:"250px" , borderColor:"#cdcdcd"}}>


<div className="logo" style={{backgroundColor:"#f7f7f7", height:"40px", textAlign:"center"}}> <span style={{color:"#00ccb1", fontWeight:"bold", textTransform:"uppercase"}}>Upcomming</span> <span style={{color:" #555", fontWeight:"bold", textTransform:"uppercase"}}> Events</span></div>
<hr/>
<div style={{display:"flex", margin:"10px"}}> 
    <p> There are no upcoming events.</p></div>
 
 

 </div>

 <div style={{height:'auto',margin:"20px" , border:"solid" ,borderWidth:"0.25px", width:"250px" , borderColor:"#cdcdcd"}}>


<div className="logo" style={{backgroundColor:"#f7f7f7", height:"40px", textAlign:"center"}}> <span style={{color:"#00ccb1", fontWeight:"bold", textTransform:"uppercase"}}>Job</span> <span style={{color:" #555", fontWeight:"bold", textTransform:"uppercase"}}>Opportunities</span></div>
<hr/>
<div style={{display:"flex", margin:"10px"}}> 
    <p> Job opportunities will be available in the future.</p></div>

 

 </div>
 



    </div>
  )
}

export default UpcommingEvents