import React from 'react'
import Profiles from'./Profiles'


function Researchers() {
  const grps=[{Pr:"Emna Harigua", img:"Researchers/feminin.png"},
    {Pr:'Ikram Guizani', img:"Researchers/feminin.png"}, 
    {Pr:"Yosser Zina Abdelkrim", img:"Researchers/feminin.png"},
     {Pr:"Rafeh Oualha", img:"Researchers/feminin.png"},
     {Pr:"Ousssema Souiai", img:"Researchers/feminin.png"},
     {Pr:"Afef Abdelkrim", img:"Researchers/feminin.png"}, 
     {Pr:"Marwa Arbi", img:"Researchers/feminin.png"},
     {Pr:"Ons Masmoudi", img:"Researchers/feminin.png"},
     {Pr:"Iheb Khalifa", img:"Researchers/feminin.png"},
     {Pr:"Samer Makni", img:"Researchers/feminin.png"},
     {Pr:"Nesrine Fkih Romdhane", img:"Researchers/feminin.png"},
     {Pr:'Sonia Abbes', img:"Researchers/feminin.png"}]
  
  return (
    <div>
      <div   >
        <h1 id='ourGroup'> Our Group </h1>
        <div  className='CardPro'>
        {grps.map ((grp)=><Profiles grp ={grp}/> )}
        </div>
    </div>
    </div>
  )
}

export default Researchers