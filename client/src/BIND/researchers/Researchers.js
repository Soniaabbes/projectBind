import React from 'react'
import Profiles from'./Profiles'
import PhotoTeam from '../PhotoTeam/PhotoTeam';
import './researchers.css';


import MenuResearchers from '../Menus/MenuResearchers';
import Profiles1 from './Profiles1';




function Researchers() {
  const grps=[{Pr:"Emna Harigua", description:"Project leader",img:"Researchers/emna.jpg",email:"emna.harigua@pasteur.utm.tn",linkedin:"https://www.linkedin.com/in/emna-harigua/" },
    {Pr:'Ikram Guizani',description:"Head of Laboratory", img:"Researchers/ikram.jpeg" ,email:"iguizani@yahoo.com",linkedin:"https://www.linkedin.com/in/ikram-guizani-94b87236/" }, 
    {Pr:"Yosser Zina Abdelkrim", description:" Assistant professor", img:"Researchers/zina.jpeg",email:"yosr.zina.abdelkrim@gmail.com",linkedin:"https://www.linkedin.com/in/yosser-zina-abdelkrim-7b9a2b1a2/" },
     {Pr:"Rafeh Oualha",description:"Postdoctoral researcher", img:"Researchers/Rafeh.jpg",email:"rafehoualha@gmail.com",linkedin:"https://www.linkedin.com/in/rafeh-oualha-b2b72251/" },
     {Pr:"Ousssema Souiai", description:"Associate professor",img:"Researchers/masculin-photo.jpg",email:"souiai@gmail.com",linkedin:"https://www.linkedin.com/in/oussema-souiai/" },
    
     {Pr:"Marwa Arbi", description:"Postdoctoral researcher",img:"Researchers/feminin.png",email:"marwa.arbi@pasteur.utm.tn",linkedin:"" },
     {Pr:"Ons Masmoudi", description:"PhD student", img:"Researchers/ons.jpg",email:"onsmasmouditn@gmail.com",linkedin:"https://www.linkedin.com/in/ons-masmoudi/" },
     {Pr:"Belkiss Ben Gamra", description:"PhD student", img:"Researchers/Belkiss.jpg",email:"bengamrabelkissa@gmail.com",linkedin:"https://www.linkedin.com/in/belkissbengamra/" },
     {Pr:"Iheb Khalifa", description:"PhD candidate", img:"Researchers/iheb.jpeg",email:"mohamediheb.khalifadithergli@medtech.tn",linkedin:"https://www.linkedin.com/in/mohamed-iheb-hergli/" },
     {Pr:"Samer Makni",description:"Master Student (Remote)", img:"Researchers/samer.jpeg",email:"samer.makni@etudiant-fst.utm.tn",linkedin:"https://www.linkedin.com/in/samermakni/" },
     {Pr:"Nesrine Fkih Romdhane",  description:"Engineer",img:"Researchers/Nessrine.jpg",email:"nesrine.fekihromdhane@gmail.com",linkedin:"https://www.linkedin.com/in/nesrine-fekih-romdhane/" },
     {Pr:'Sonia Abbes', description:"Project Assistant",img:"Researchers/Sonia.jpg",email:"soniaabbes1997@gmail.com",linkedin:"https://www.linkedin.com/in/sonia-abbes-133107256/" },
     {Pr:'Farouk Abdelmalek', description:"Engineer Student",img:"Researchers/Farouk.jpeg",email:"farouk.abdelmalek@etudiant-istmt.utm.tn",linkedin:"https://www.linkedin.com/in/farouk-abdelmalek-b22680303/" },]
  const collab=[
    {Pr:"Afef Abdelkrim", description:"Professor",img:"Researchers/afef.jpeg",email:"",linkedin:"https://www.linkedin.com/in/afef-abdelkrim" },
    {Pr:"Alia Benkahla", description:"Professor",img:"Researchers/Alia.jpeg",email:"Alia.Benkahla@pasteur.tn",linkedin:"https://www.linkedin.com/in/aliabenkahla/" },
    {Pr:"Ines Abdeljaoued-Tej",description:"Assistant Professor",img:"Researchers/feminin.png",email:"Alia.Benkahla@pasteur.tn",linkedin:"https://www.linkedin.com/in/inestej/?originalSubdomain=tn" },
    {Pr:"Mariem Hanachi", description:"Bioinformatician",img:"Researchers/mariem.jpeg",email:"mariem.hanachi@gmail.com",linkedin:"https://www.linkedin.com/in/mariem-hanachi/" }
    ,{Pr:'Amine Hableni', description:"Engineer Student",img:"Researchers/amine.jpg",email:"aminehableni1898@gmail.com",linkedin:"https://www.linkedin.com/in/amine-el-hablani-178713224/"}

    ,  
  ]
  return (
    <div style={{display:"flex"}}>
     <MenuResearchers/>

    <div  id="groupsGoal">
       <div style={{marginTop:"100px"}}>
     <PhotoTeam/>
     </div>
      <div style={{marginTop:"200px"}}   id="profilesAvecTitre">
      <div className="divider" ><span></span><span>Team members</span><span></span></div>
    
        <div  className='CardPro' id='cardPro' style={{marginTop:"50px"}}>
       
        {grps.map ((grp)=><Profiles grp ={grp}/> )}
        </div>
    </div>
    <div style={{marginTop:"200px"}}   id="profilesAvecTitre">
      <div className="divider" ><span></span><span>collaborators</span><span></span></div>
    
        <div  className='CardPro' id='cardPro' style={{marginTop:"50px"}}>
       
        {collab.map ((colab)=><Profiles1 colab ={colab}/> )}
        </div>
    </div>

    </div>
    {/* <MenuCopie/> */}
    </div>
  )
}

export default Researchers