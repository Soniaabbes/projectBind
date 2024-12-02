import React from 'react'
import OurProject from './OurProject'
import './Home.css'
import { SlArrowRightCircle } from "react-icons/sl"

function Home() {
  return (
    
    <div className='introBind'>
      <div id='introBind1'>
        <p id ='introductionBind'>
          <h1 id ="Overview">Overview:</h1>
          <p className='intro'>
        BIND is a research project aiming to leverage Bioinformatics, Artificial Intelligence (AI), and Quantum Computing (QC) to advance the drug discovery field.  
        <span className='Links'><p> <a href='/BIND/Outcomes' target="_blank" rel="noopener noreferrer">Learn more about our achievements <SlArrowRightCircle /> </a> </p></span>
        </p>
        <p className='intro'>
        Behind this initiative is a multidisciplinary team, led by Dr. Emna Harigua, focused on implementing computer and drug discovery approaches, from AI-based discovery of new molecules to the experimental validation of preclinical studies. 
        <span className='Links'>
          <p> <a href='/BIND/Researchers' target="_blank" rel="noopener noreferrer">Learn more about our team members  <SlArrowRightCircle /> </a> </p></span>
          
        </p>
        <p className='intro'>
        The project is supported by the ARISE-PP programme, coordinated by the African Academy of Sciences and funded by the European Commission and the African Union. 
        <span className='Links'> 
          <p>
          <a href='https://arise.aasciences.app/' target="_blank" rel="noopener noreferrer">Learn more about the ARISE Programme <SlArrowRightCircle /> </a>
          </p>
          </span>
        </p>
        </p>
        <img  id ='BindLogo'src='logo_BIND-1.png' alt='Bind_Logo'/>
        </div>
        <div>
       <br/><br/> <br></br> 
        <OurProject/>
        </div>
        </div>
       
       
     
   
  )
}

export default Home