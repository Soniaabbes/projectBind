import React from 'react';
import './PhotoTeam.css';


function PhotoTeam() {
    return (

        <div id="TeamDescription">
            
            <div id="desriptionTeam">
                <p>  We are a diverse group of experts and enthusiasts coming from different backgrounds, including biology, computer science, and mathematics. Our goal is to share ideas, collaborate on innovative projects, and push the boundaries of knowledge.</p>
            </div>
            <div id='ensembleTeamPhoto'>
<div> <img   alt="team" className='teamGroup' src="/PhotoTeam/PhotoTeam1.jpg"/></div>
<div  id='ensembleTeamPhoto1'><p> <img   alt="team" className='teamGroup' src="/PhotoTeam/PhotoTeam2.jpg"/>
    </p>
     <p>   <img   alt="team" className='teamGroup'  src="/PhotoTeam/PhotoTeam4.jpg" />
        </p> 
        <p> <img   alt="team" className='teamGroup' src="/PhotoTeam/PhotoTeam3.jpeg"/>
            </p></div>
<div>    <img   alt="team" className='teamGroup' src="/PhotoTeam/PhotoTeam5.jpg"/></div>
            </div>
          
        </div>



    );
}

export default PhotoTeam