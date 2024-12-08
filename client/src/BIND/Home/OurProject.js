import React from 'react'; 
import './Home.css';
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { BsPersonCheckFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsPersonFillGear } from "react-icons/bs";

import { GrTechnology } from "react-icons/gr";

function OurProject() {
  return (
    <div className='OurProject' style={{width:"100%"

    }}>
<div className="container4">
          <div style={{paddingTop:"70px"}}   >
            <div className="container-parag" >
              <h1 id='ourAim'>
                Our Aim<br />
                
              </h1>
              <p id='Advancing'>
              Quantum Computing  <br/> 
               
                AI & Bioinformatics
              </p>
 
              <GrTechnology  className='icon3'/>
             
            </div>
          </div>
          <div className="container4-1" style={{paddingRight:"50px"}}  >
            <div className="les2premierscolonnes">
              <div className="premierColonne"  style={{marginTop:"20px", marginBottom:"15px"}}>
                
              <LiaPeopleCarrySolid className='icon4'/>
             
             
                <h3 className='Title2'>
                Shaping The Future</h3>
                 
                <p className='subTitle'>
                Fostering Future African Leaders Through a Vibrant Research Environment
                </p>
              </div>
              <div className="deuxiemeColonne">
            
              <BsPersonCheckFill className='icon4' />
              
                <h3 className='Title2'> Capacity Building </h3>
                <p className='subTitle'> Building Expertise in Drug Discovery, AI, QC and Bioinformatics </p>
              </div>
            </div>
            <div className="les2dernierscolonnes">
              <div className="troixiémeColonne" style={{marginBottom:"20px"}} >
            
              <BsSearch className='icon4' />
             
                <h3 className='Title2'> Research of exellence </h3>
                <p className='subTitle'> Developping cutting edge technologies in AI and QC </p>
              </div>
              <div className="quatriémeColonne">
             
              <BsPersonFillGear className='icon4' />
             
                <h3 className='Title2'> Impact for Research  </h3>
                <p className='subTitle'> Combating infectious and neglected diseases through novel therapies</p>
              </div>
            </div>
          </div>
        </div>
     

    </div>
  )
}

export default OurProject