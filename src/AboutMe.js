import React from 'react';
import './AboutMe.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
  return (
    <Container fluid className="AboutMe">
      <Row className="justify-content-md-center">
        <Col md="auto"><h1>About Me</h1></Col>
      </Row>
      <Row>
        <Col md="auto"><p>
        I graduated from NYU with a BA in Anthropology and Pre-med, but joined Teach for America as a high school chemistry teacher to work on fixing the disparities in urban education.
        I earned my MS in Science Education, and have been working in various roles in education, from classroom teacher, assistant principal, director of science content at TFA, and assistant principal.
        Somewhere in there, my team won the EDUStartUp Weekend. nbd.
        </p></Col>
      </Row>
    </Container >
  );
}

export default AboutMe;