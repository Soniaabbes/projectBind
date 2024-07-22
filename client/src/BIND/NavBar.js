import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='Navbar'>
      <Navbar bg="light" expand="lg" data-bs-theme="light">
        <Container>
          <Navbar.Brand id='BIND' as={Link} to='/'>BIND</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id='resteNavbar'>
              <Nav.Link as={Link} to="/BIND/Outcomes">OUTCOMES</Nav.Link>
              <Nav.Link as={Link} to="/BIND/Events">EVENTS</Nav.Link>
              <Nav.Link as={Link} to="/BIND/Researchers">RESEARCHERS</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
