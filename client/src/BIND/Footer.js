import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Footer() {
  return (
    <div className='footer'>
        

<p id="adresseIpt">
<p id="Contacts">
    <a className='icon' href='https://www.facebook.com/profile.php?id=61559781611552&locale=fr_FR' target="_blank" rel="noopener noreferrer">
<FaFacebookF />
</a>
<a  className='icon' href='https://www.linkedin.com/company/bind-ai4dd/'  target="_blank" rel="noopener noreferrer">
<FaLinkedin />
</a>
<a className='icon'  href='mailto:emna.harigua@pasteur.utm.tncd ' target="_blank" rel="noopener noreferrer">
        <MdEmail />
      </a>
</p>

13, Place Pasteur<br/>
<br/> B.P. 74 1002 Tunis<br/> Belvédère Tunisie
</p>


    </div>
  )
}

export default Footer