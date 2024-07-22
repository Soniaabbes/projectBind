import React from 'react'
import { BsLayers } from "react-icons/bs";
import { Link } from 'react-router-dom';

function OutComes() {
  return (
    <div className='OutComes'> 
    
    <div className='Cidalsintro'>
                   
                    <p id ='introCidals'>
                    CidalsDB is an open resource on anti-pathogen molecules that provides a chemical similarity-based browsing function and an AI-based prediction tool for the 'cidal' effect of chemical compounds against pathogens. These include Leishmania parasites1 and Coronaviruses (SARS-Cov, SARS-Cov-2, MERS)2.

CidalsDB serves as an evolutive platform for democratized and no-code Computer-Aided Drug Discovery (CADD)3. We are committed to continuous improvement, actively incorporating additional pathogens, datasets, and AI predictive models. 
                    </p>
                    <Link to='/BIND/cidals' target="_blank">
          <img src='/CidalsDB.png' alt='CidalsDB' id='ImgCidals' />
        </Link>

                </div>
        
    
    <p className='article'>
       
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
              <p className='article'> 
              <a>
              <p>  <BsLayers className='icon2' />Harigua-Souiai, E., Masmoudi, O., Makni, S., Oualha, R., Abdelkrim, Y.Z., Hamdi, S., Souiai, O., Guizani, I. CidalsDB: An AI-empowered platform for anti-pathogen therapeutics research. Submitted. 
                 </p>
                 </a>
                 </p>
                 <br/> <br/>

                
    </div>
  )
}

export default OutComes