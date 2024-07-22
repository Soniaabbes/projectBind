import React from 'react'; 
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { BsPersonCheckFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsPersonFillGear } from "react-icons/bs";

import { GrTechnology } from "react-icons/gr";

function OurProject() {
  return (
    <div className='OurProject'>
<div className="container4">
          <div   >
            <div className="container-parag" >
              <h1 id='ourAim'>
                Our Aim<br />
                
              </h1>
              <p id='Advancing'>
              Advancing Drug Discovery Through <br/> 
                Cutting-Edge Technologies in <br/>
                AI & Bioinformatics
              </p>
 
              <GrTechnology  className='icon3'/>
             
            </div>
          </div>
          <div className="container4-1" >
            <div className="les2premierscolonnes">
              <div className="premierColonne" >
                
              <LiaPeopleCarrySolid className='icon4'/>
             
             
                <h3 className='Title2'>
                Shaping The Future</h3>
                 
                <p className='subTitle'>
                Fostering Future African Leaders Through a Vibrant Research Environment
                </p>
              </div>
              <div className="deuxiemeColonne">
            
              <BsPersonCheckFill className='icon4' />
              
                <h3 className='Title2'> Capacity Building <br />patients</h3>
                <p className='subTitle'> Building Expertise in Drug Discovery and Computer- Aided Drug Discovery </p>
              </div>
            </div>
            <div className="les2dernierscolonnes">
              <div className="troixiémeColonne">
            
              <BsSearch className='icon4' />
             
                <h3 className='Title2'> Research </h3>
                <p className='subTitle'> Developping novel approaches in AI for DD</p>
              </div>
              <div className="quatriémeColonne">
             
              <BsPersonFillGear className='icon4' />
             
                <h3 className='Title2'> Unlocking Opportunities </h3>
                <p className='subTitle'>Effective Outreach and Networking</p>
              </div>
            </div>
          </div>
        </div>
     

    </div>
  )
}

export default OurProject