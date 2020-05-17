import React from 'react';
// import styled from 'styled-components';
import { Nav, Navbar } from 'react-bootstrap'

export default function NavbarComponent() {
  return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home"><img style={{height: '30px'}} src="https://www.morningbrew.com/packs/media/images/daily-logo-30031d0d494b337d33e3a8faacb388b1.png" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="justify-content-end">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

// const Logo = styled.img`
//   height: 30px;
// `;