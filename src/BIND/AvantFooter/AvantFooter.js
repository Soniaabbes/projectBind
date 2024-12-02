import React from 'react';
import "./AvantFooter.css";

function AvantFooter() {
    return (
        <div className='Avantfooter'> 
            <a href='http://www.pasteur.tn/' target="_blank" rel="noopener noreferrer">
                <img className='footerImage' id='IPT' src="/ipt.png" alt="Institut Pasteur de Tunis" /> 
            </a>
            <a href='https://aasciences.africa/' target="_blank" rel="noopener noreferrer">
                <img className='footerImage' id='AAS' src="/africanAcademy of sciences.png" alt="African Academy Of Sciences" /> 
            </a>
            <a href='https://au.int/' target="_blank" rel="noopener noreferrer">
                <img className='footerImage' id='AfricanUnion' src="/africanUnion.png" alt="African Union" /> 
            </a>
            <a href='https://european-union.europa.eu/index_fr' target="_blank" rel="noopener noreferrer">
                <img className='footerImage' id='EuropeanUnion' src="/union eur_.jpg" alt="European Union" style={{width:"150px", height:"75"}} /> 
            </a>
        </div>
    );
}

export default AvantFooter;
