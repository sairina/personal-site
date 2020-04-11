import React from 'react';
import './Resume.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Resume() {
  return (
    <Container fluid className="Resume">
      <Row className="justify-content-md-center" style={{marginBottom:"50px"}}>
        <Col md="auto">
          <h1>Resume</h1>
          <Button variant="success" href="/files/download-file.pdf" download="Merino-Tsui-Resume">Download Resume</Button>        </Col>
      </Row>
      <Row>
        <Col sm={4}><h2>Programming Languages</h2></Col>
        <Col className="Resume-Col" sm={8}>
          <div className="Resume-Item">
            <h5>JavaScript</h5>
            <h5>Python</h5>
            <h5>SQL</h5>
            <h5>HTML/CSS</h5>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={4}><h2>Libraries and Frameworks</h2></Col>
        <Col className="Resume-Col" sm={8}>
          <div className="Resume-Item">
            <h5>React</h5>
            <h5>Redux</h5>
            <h5>Express</h5>
            <h5>Flask</h5>
            <h5>PostgreSQL</h5>
            <h5>mySQL</h5>
            <h5>Jest</h5>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={4}><h2>Work Experience</h2></Col>
        <Col className="Resume-Col" sm={8}>
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
        </Col>
      </Row>
      <Row>
        <Col sm={4}><h2>Education</h2></Col>
        <Col className="Resume-Col" sm={8}>
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
      </Row>
    </Container>
  );
}

export default Resume;