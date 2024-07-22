import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardEvents({Event}) {
  return (
    <div className="event-card">

<Card style={{ width: '20rem' }}>
<Card.Img  className="EventImg" variant="top" src={process.env.PUBLIC_URL + '/' + Event.img} alt={Event.Title} />
      <Card.Body>
        <Card.Title>{Event.Title}</Card.Title>
        <Card.Text>
         {Event.Date}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default CardEvents