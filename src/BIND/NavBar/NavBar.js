import React from 'react';
import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();
  return (
    <div className='Navbar'>
      <Navbar bg="light" expand="lg" data-bs-theme="light" s>
        <Container style={{margin:"0px", display:"flex",}}>
          <Navbar.Brand id='BIND' as={Link} to='/'>
            <p style={{ lineHeight: "5px", display:"flex", alignItems:"center" }}>
              <img alt="BIND" src="/binddddd.png" style={{ width: "150px", height: "50px" }} />
              <img alt="bind" src="/BIND3.png" style={{ width: "250px", paddingTop:"20px" }} />
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ms-auto" id='resteNavbar' >
              <Link
                to="/BIND/Outcomes"
                className={location.pathname === "/BIND/Outcomes" ? "nav-active" : "nav-link"}
              >
                ACHIEVEMENTS
              </Link>
              <Link
                to="/BIND/Events"
                className={location.pathname === "/BIND/Events" ? "nav-active" : "nav-link"}
              >
                EVENTS
              </Link>
              <Link
                to="/BIND/Researchers"
                className={location.pathname === "/BIND/Researchers" ? "nav-active" : "nav-link"}
              >
                OUR GROUP
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
