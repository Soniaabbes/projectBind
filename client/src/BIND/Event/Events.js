import React from 'react'

import Events2 from './Events2'
import MenuEvent from '../Menus/MenuEvent';

import UpcomingEvent from './UpcomingEvent';
import PhotoTeam from '../PhotoTeam/PhotoTeam';

function Events() {
  const events = [
   
    { img: "/Events/Catalysing Africa’s Development through Research and Innovation .png", 
      Title: "Arise Secondary Scientific Conference", 
      Date: "4-6 June 2024" , 
      Lieu:"Hammamet,Radisson Blu Hotel",
      Description:`Through a series of scientific sessions, panel discussions, keynote addresses, and poster presentations, and research spotlight talks, the Scientific Conference will convene policy makers, thought leaders, scholars, and ARISE Fellows to showcase advances and discuss challenges and opportunities for enhancing investments and partnerships to facilitate research and innovation for development – themed around Catalysing Research and Innovation for Development. `,
      mot1:'Scientific Conference',
      mot2:"Advances in Research",
    mot3:"Challenges in Research" },
    { img: "/Events/AI4PEP.png", 
      Title: "Decolonizing AI: Artificial Intelligence for Beginners('Dummies')", 
      Date: "11 June 2024" ,
      Lieu:"Online",
       Description:`In this seminar, Emna Harigua describes artificial intelligence and its needs, particularly in the biomedical field, including drug discovery and diagnosis.`,
      mot1:'Public Health',
    mot2:"Computer Scientists",
  mot3:"Research Collaboration"},
  { img: "/Events/NRVDay.png", 
    Title: "Project Exhibition at National Research Valuation Day", 
    Date: "15 Mai 2024" ,
    Lieu:"Cité des Sciences , Tunis",
     Description:`we had the opportunity to showcase our Bind project through a poster presentation. This event provided an excellent platform to highlight the progress and findings of our research. It was a valuable experience to share our work with fellow researchers, professionals, and stakeholders interested in research valuation.`,
    mot1:'Research Progress',
  mot2:" Networking",
mot3:"Scientific Event"},
{ img: "/Events/TeamMeeting.png", 
  Title: "Team Meeting", 
  Date: "02 Mai 2024" ,
  Lieu:"Institut Pasteur de Tunis",
   Description:`Our team meeting was held to discuss the progress of ongoing projects, review recent accomplishments, and plan the next steps. This meeting provided a platform for team members to share insights, offer constructive feedback, and align our efforts towards achieving our targets efficiently.`,
  mot1:'Research Progress',
mot2:"Valorization",
mot3:"Feedback"},

{ img: "/Events/Colloque.jpeg", 
  Title: "Colloque des Jeunes Chercheurs", 
  Date: "25, 26, 27 October 2023",  
  Lieu:"Institut Pasteur de Tunis",
  Description: `
  In this workshop, Dr Emna Harigua explored computational approaches tailored for biomedical researchers. The goal was to equip participants with the tools and knowledge needed to effectively use computational techniques in their research, enhancing their ability to analyze and interpret complex biological data.
       `,
       mot1:'Innovation',
  mot2:"Training",
mot3:"Scientific communication"},
  ];
  
  return (
    <div >
      <div >
       
       
       <div style={{display:"flex"}}>
       <MenuEvent/>
        <div style={{marginTop:"100px"}} >
          
          <div id='upcoming'>
          <div className="divider"><span></span><span>Upcoming Events</span><span></span></div>
          <UpcomingEvent/>
          </div>
          <div id='Past'>
          <div className="divider"><span></span><span> Past Events</span><span></span></div>
        {events.map((event, index) => (
            <Events2 key={index} event={event} />
          ))}
          </div>
        </div>
        </div>
    </div>
    </div>)
}

export default Events