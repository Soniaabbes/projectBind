
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './BIND/NavBar';
import AvantFooter from './BIND/AvantFooter';
import Footer from './BIND/Footer';
import {BrowserRouter, Route, Routes}from "react-router-dom";
import Home from './BIND/Home';
import Researchers from './BIND/Researchers';
import Events from './BIND/Events';
import OutComes from './BIND/OutComes';
import Cidals from './BIND/Cidals'



function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
      <div>
    <NavBar/>
    </div>
    <Routes>
      <Route path='/' element={  <Home/>}/>
      <Route path='/BIND/Outcomes' element ={<OutComes/>}/>
      <Route path='/BIND/Researchers' element ={<Researchers/>}/>
      
      
      <Route path='/BIND/Events' element ={<Events/>}/>
      <Route path="/BIND/cidals" element= {<Cidals />}/>
      
     
    </Routes>
    <div className="AvantFooter">
    <AvantFooter/>
    </div>
  
    <div>
      <Footer className="Footer"/>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
