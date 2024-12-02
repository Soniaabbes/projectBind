import React from 'react'
import { BsLayers } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './outcomes.css';

import Menu from '../Menus/Menu';



import Menu2 from '../menu/Menu2';

function OutComes() {
  return (
   <div style={{display:'flex', backgroundColor:"#f8f9fa"}}>
     <Menu/>
     {/* <div  className="menu22"style={ {marginTop:"500px", display:"flex", flexDirection:"column", width:"15%"}}>
    <Menu2/>
   
     </div> */}
    <div className='OutComes'> 
   
    
    <div  >
      <div className='outcomesavecTitle' id='outcomesavecTitle'>  
      <div className="divider"><span></span><span>CidalsDB</span><span></span></div>
     <div className='Cidalsintro  '>
    
                    <p id ='introCidals'>
                      <p id='platform'> An AI-empowered platform for anti-pathogen therapeutics research:</p>
              CidalsDB is a free resource on anti-pathogen molecules. It offers a tool for browsing chemicals based on similarity and an AI-powered prediction tool to assess the 'cidal' effect of compounds against pathogens like Leishmania and coronaviruses (SARS, COVID-19, MERS)
    <span id='ourGroup'><a href='/BIND/cidals' target="_blank" rel="noopener noreferrer" id='visit'> Visit Cidals DB</a>  &rarr;</span></p>
                    
          <img src='/CidalsDB.png' alt='CidalsDB' id='ImgCidals' />
        </div>

                </div></div>
                <div id="titreavecarticle">
        
                <div className="divider"><span></span><span>Publications</span><span></span></div>


                <p className='article'> 
              <a>
              <p>  <BsLayers className='icon2' />Harigua-Souiai, E., Masmoudi, O., Makni, S., Oualha, R., Abdelkrim, Y.Z., Hamdi, S., Souiai, O., Guizani, I. CidalsDB: An AI-empowered platform for anti-pathogen therapeutics research. Submitted. 
                 </p>
                 </a>
                 </p>


                 <p className='article'>
       
       <a href='https://www.frontiersin.org/journals/cellular-and-infection-microbiology/articles/10.3389/fcimb.2024.1403589/full' target="_blank" rel="noopener noreferrer">

       <p > <BsLayers className='icon2' /> Oualha, R., Abdelkrim, Y.Z.,Guizani I., Harigua-Souiai, E .(2024) .Approved drugs successfully repurposed against Leishmania based on machine learning predictions. Front. Cell. Infect. Microbiol. 14, 2024. 
             </p>
             </a>
             </p>
    <p className='article' id="article">
    
       
         <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9036323/' target="_blank" rel="noopener noreferrer">
         
        <p>  <BsLayers className='icon2' />  Harigua-Souiai, E., Oualha, R., Souiai, O., Abdeljaoued-Tej, I. & Guizani, I. (2022). Applied machine learning toward drug discovery enhancement: Leishmaniases as a case study. Bioinforma. Biol. Insights 16, 11779322221090349. 
             </p>
        </a>
        </p>
        <p className='article'>
       
        <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8667578/' target="_blank" rel="noopener noreferrer">

        <p > <BsLayers className='icon2' /> Harigua-Souiai, E. et al. (2021). Deep learning algorithms achieved satisfactory predictions when trained on a novel collection of anticoronavirus molecules. Front. Genet. 12, 744170.
              </p>
              </a>
              </p>

            


             
                 <br/> <br/>

                 </div>    
    </div></div>
  )
}

export default OutComes