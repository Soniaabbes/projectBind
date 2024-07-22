import React from 'react'
import CardEvents from './CardEvents'

function Events() {
  const Events=[{img:"Events/colloque_ipt.jpg", Title: "Colloque des Jeunes Chercheurs", Date: "25,26,27 October2023"},
    {img:"Events/arise.jpg", Title: "Arise Secondary Scientific Conference", Date:"4-6 June 2024"}, 
    {img:"Events/A4PEP.jpg", Title:"Decolonizing AI: Artificial Intelligence for Beginners('Dummies') ", Date:"11 June 2024"},
    ]
  
  return (
    <div>
      <div>
        <h1 id='ourGroup'> Our Events </h1>
        <div  className='CardPro'>
        {Events.map ((Event)=><CardEvents Event ={Event}/> )}
        </div>
    </div>
    </div>)
}

export default Events