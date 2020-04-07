import React from 'react';
import './Contact.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <Container fluid className="Contact">
      <Row className="justify-content-md-center">
        <Col>
          <h1>Get in Touch</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="Contact-Col">
        <h2>Message Me</h2>
        </Col>
        <Col className="Contact-Col">
          <h2>Contact Info</h2>
          <p>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
        </Col>
      </Row>
    </Container >
  );
}

export default Contact;