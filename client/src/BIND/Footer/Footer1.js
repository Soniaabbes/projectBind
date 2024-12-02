import React from 'react';
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer1() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/logo_BIND-1.png'; 
    link.download = 'BIND.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
   


<footer className="footer-distributed">

			<div className="footer-left">
      <p className="footer-links">
					<a href="/" className="link-1">Home</a>
					
					<a href="/BIND/Outcomes" className="link-1">Achievements</a>
				
					<a href="/BIND/Events" className="link-1">Events</a>
				
					<a href="/BIND/Researchers" className="link-1">Our Group</a>
					
					
				</p>

				<img id='BINDF' alt="Bind" src={process.env.PUBLIC_URL + '/Picsart_BIND.png'} 
          onClick={handleDownload}/>

		

			</div>

			<div className="footer-center">

				<div>
				
					<p> 13, Place Pasteur<br/>
          <br/> B.P. 74 1002 Tunis<br/> Belvédère Tunisie</p>
				</div>

				

				<div>
	
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					Find Us 
				
				</p>

				<div>
				
					<p> <a  href='https://www.facebook.com/profile.php?id=61559781611552&locale=fr_FR' target="_blank" rel="noopener noreferrer">
<FaFacebookF   className='icon' />
</a>
<a  href='https://www.linkedin.com/company/bind-ai4dd/'  target="_blank" rel="noopener noreferrer">
<FaLinkedin  className='icon' />
</a>
<a href='mailto:emna.harigua@pasteur.utm.tn' target="_blank" rel="noopener noreferrer">
        <MdEmail  className='icon' />
      </a></p>
				</div>

			</div>

		</footer>


    
  )
}

export default Footer1