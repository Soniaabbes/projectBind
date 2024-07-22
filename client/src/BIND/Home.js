import React from 'react'
import OurProject from './OurProject'

function Home() {
  return (
    
    <div className='introBind'>
      <div id='introBind1'>
        <p id ='introductionBind'>
        Drug discovery in biomedical research in Africa is characterised with high cost, long duration and complexity. Introducing computational approaches, namely bioinformatics and artificial intelligence results in higher performances, lower costs and faster outcomes of the process. Dr Harigua’s research consists in implementing a platform for computer-aided drug discovery that combines bioinformatics, artificial intelligence, biology and biochemistry to identify novel therapeutics against Leishmaniases and Malaria.
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