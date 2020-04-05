import React from 'react';
import './Resume.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Resume() {
  return (
    <Container fluid className="Resume">
      <Row className="justify-content-md-center">
        <Col md="auto"><h1>Resume</h1></Col>
      </Row>
      <Row>
        <Col md={6}>
          <h3>Education</h3>
          <div className="Resume-Education-Item">
            <h4>Full Stack Software Engineering | 2020</h4>
            <h5>Rithm School</h5>
            <p>Edie Windsor Scholar</p>
          </div>
        </Col>
        <Col md={6}>
          <h3>Experience</h3>
        </Col>
      </Row>
    </Container >
  );
}

export default Resume;