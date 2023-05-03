import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">TnpLab</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">Link</Nav.Link>
          <Nav.Link href="/service">Services</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <Form className="d-flex">
         <Button variant="success">Login</Button>{" "}
         <Button variant="primary">Logout</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
}

export default Header
