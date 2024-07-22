import React from 'react'

function AvantFooter() {
  return (
    <div className='Avantfooter'>
        <a href='http://www.pasteur.tn/' target="_blank" rel="noopener noreferrer">
        <img className='footerImag' id='IPT' src="/ipt.jpeg" alt="Institut Pasteur de Tunis" 
        />
        </a>
        <a href='https://aasciences.africa/' target="_blank" rel="noopener noreferrer">
        <img  className='footerImag'id='AAS'  src="/africanAcademy of sciences.png" alt="African Academy Of Sciences"
        />
        </a>
        <a href='https://au.int/' target="_blank" rel="noopener noreferrer">
        <img   className='footerImag'  id='AfricanUnion' src="/africanUnion.png" alt="Afican Union"
        />
        </a>
        <a  href='https://european-union.europa.eu/index_fr' target="_blank" rel="noopener noreferrer">
        <img   className='footerImag' id='EuropeanUnion' src="/union eur_.jpg" alt=" European Union"
        />
        </a>





    </div>
  )
}

export default AvantFooter