
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './BIND/NavBar/NavBar';
import AvantFooter from './BIND/AvantFooter/AvantFooter';

import {BrowserRouter, Route, Routes}from "react-router-dom";
import Home from './BIND/Home/Home';
import Researchers from './BIND/researchers/Researchers';
import Events from './BIND/Event/Events';
import OutComes from './BIND/Outcomes/OutComes';
import Cidals from './BIND/Outcomes/Cidals'
import Events2 from './BIND/Event/Events2';
import Footer1 from './BIND/Footer/Footer1'
import NotFound from './BIND/NotFound/NotFound';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      
    <NavBar/>
    
    <Routes>
      <Route path='/' element={  <Home/>}/>
      <Route path='/BIND/Outcomes' element ={<OutComes/>}/>
      <Route path='/BIND/Researchers' element ={<Researchers/>}/>
      
      
      <Route path='/BIND/Events' element ={<Events/>}/>
      <Route path="/BIND/cidals" element= {<Cidals />}/>
      <Route path="/BIND/event2" element= {<Events2 />}/>
      <Route path='*'
                        element={<NotFound/>}/>
     
    </Routes>

    <AvantFooter/>
    
  
    {/* <div>
      <Footer className="Footer"/>
    </div> */}
   
      <Footer1/>
   
   
    </div>
    </BrowserRouter>
  );
}

export default App;
