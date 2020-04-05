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
        <Col className="Resume-Col" md={6}>
          <h2>Education</h2>
          <div className="Resume-Item">
            <h4>Full Stack Software Engineering</h4>
            <h5>Rithm School</h5>
            <p>Edie Windsor Scholar</p>
          </div>
          <div className="Resume-Item">
            <h4>Master of Science, Secondary Science Education</h4>
            <p>City University of New York, Lehman College</p>
          </div>
          <div className="Resume-Item">
            <h4>Bachelor of Arts, Anthropology</h4>
            <p>New York University</p>
          </div>
        </Col>
        <Col className="Resume-Col" md={6}>
          <h2>Recent Experience</h2>
          <div className="Resume-Item">
            <h4>Software Engineer</h4>
            <h5>Clever Counsel LLC</h5>
            <p>one</p>
          </div>
          <div className="Resume-Item">
            <h4>Assistant Principal</h4>
            <h5>KIPP King Collegiate High School</h5>
          </div>
          <div className="Resume-Item">
            <h4>Dean of Science</h4>
            <h5>The Weber School</h5>
          </div>
          <div className="Resume-Item">
            <h4>Director, Science Content Specialist</h4>
            <h5>Teach for America</h5>
          </div>
          <div className="Resume-Item">
            <h4>Academic Dean</h4>
            <h5>Leadership Public Schools, Oakland R&D</h5>
          </div>
        </Col>
      </Row>
    </Container >
  );
}

export default Resume;