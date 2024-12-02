import React from 'react'
import Card from 'react-bootstrap/Card';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import './researchers.css';


function Profiles1({colab}) {
  return (
    <div className="profile-card">

<Card  className="h-100" border="light" style={{ width: '18rem', height:"auto" }} >
<div className="card-content" >
<Card.Img  className="card-img" variant="top" src={process.env.PUBLIC_URL + '/' + colab.img} alt={colab.Pr} />
      <Card.Body>
     
       
        <Card.Subtitle className="mb-2 text-muted">{colab.Pr}</Card.Subtitle>
        <Card.Text>
{colab.description}    </Card.Text>
        <Card.Link href={`mailto:${colab.email}`}
                target="_blank"
                rel="noopener noreferrer" ><MdEmail className='icon4'/></Card.Link>
        <Card.Link  href={colab.linkedin}  target="_blank" rel="noopener noreferrer"><FaLinkedin className='icon4' /></Card.Link>

      
      </Card.Body>
      </div>
    </Card>
   
    </div>
  )
}

export default Profiles1