import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


function NavBar() {
  return (
    <div>
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>
          <Link className="NavBar-Brand" to="/">Sairina</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto NavBar-Link">
            <Nav.Link as={Link} to="/about-me">About</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>

            <NavDropdown title="Projects" id="basic-nav-dropdown" alignRight>
              <NavDropdown.Item as={Link} to="/projects">All projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item target="_blank" href="https://warbler-demo-sairina.herokuapp.com/">DEMO: Warbler</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://jobly-demo-sairina.herokuapp.com/">DEMO: Jobly</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link as={Link} to="/contact">Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;