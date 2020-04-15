import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Projects.css';

function Projects(){
  return (
    <Container fluid className="Projects">
      <Row className="justify-content-md-center">
        <Col>
          <h1>Projects</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;