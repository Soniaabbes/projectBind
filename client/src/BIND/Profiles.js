import React from 'react'
import Card from 'react-bootstrap/Card';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";

function Profiles({grp}) {
  return (
    <div className="profile-card">

<Card  className="h-100" border="light" style={{ width: '18rem' }} >
<div className="card-content" >
<Card.Img  className="card-img" variant="top" src={process.env.PUBLIC_URL + '/' + grp.img} alt={grp.Pr} />
      <Card.Body>
     
       
        <Card.Subtitle className="mb-2 text-muted">{grp.Pr}</Card.Subtitle>
        <Card.Text>
Doctor     </Card.Text>
        <Card.Link href="#"><MdEmail className='icon4' /></Card.Link>
        <Card.Link href="#"><FaLinkedin className='icon4' /></Card.Link>
      </Card.Body>
      </div>
    </Card>
   

    </div>
  )
}

export default Profiles