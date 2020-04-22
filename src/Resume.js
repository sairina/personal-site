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
          <Button variant="success" href="Resume_Sairina_MerinoTsui_2020.pdf" download="Merino-Tsui-Resume">Download Resume</Button>        </Col>
      </Row>
      <Row>
        <Col sm={4}><h3>Programming Languages</h3></Col>
        <Col className="Resume-Col" sm={8}>
          <div className="Resume-Item">
            <p>JavaScript</p>
            <p>Python</p>
            <p>SQL</p>
            <p>HTML/CSS</p>
          </div>
        </Col>
      </Row>
      <Row className="Resume-Row-Blank"></Row>
      <Row>
        <Col sm={4}><h3>Libraries and Frameworks</h3></Col>
        <Col className="Resume-Col" sm={8}>
          <div className="Resume-Item">
            <p>React</p>
            <p>Redux</p>
            <p>Express</p>
            <p>Flask</p>
            <p>PostgreSQL</p>
            <p>mySQL</p>
            <p>Jest</p>
          </div>
        </Col>
      </Row>
      <Row className="Resume-Row-Blank"></Row>
      <Row>
        <Col sm={4}><h3>Work Experience</h3></Col>
        <Col className="Resume-Col" sm={8}>
          <div className="Resume-Item">
            <h5>Software Engineer</h5>
            <p>Bet Tzedek LLC</p>
            <ul>
              <li> Modularlized routing with Blueprints in Flask to organize application into distinct components.</li>
              <li>Built routes for and wired React component that displays employer information to intake route on backend, including a search route for web scraping capabilities.</li>
              <li>Created user model and routes to MySQL database using an ORM for user signup and login.</li>
              <li>Created React modal component on frontend to validate and display data from web scraping.</li>
              <li>Increased test coverage by 15% by writing tests with Jest, React Testing Library, and Unittest.</li>
            </ul>
          </div>
          <div className="Resume-Item">
            <h5>Assistant Principal</h5>
            <p>KIPP King Collegiate High School</p>
          </div>
          <div className="Resume-Item">
            <h5>Dean of Science</h5>
            <p>The Weber School</p>
          </div>
          <div className="Resume-Item">
            <h5>Director, Science Content Specialist</h5>
            <p>Teach for America</p>
          </div>
        </Col>
      </Row>
      <Row className="Resume-Row-Blank"></Row>
      <Row>
        <Col sm={4}><h3>Education</h3></Col>
        <Col className="Resume-Col" sm={8}>
          <div className="Resume-Item">
            <h5>FULL STACK SOFTWARE ENGINEER</h5>
            <p>Rithm School</p>
            <em>Edie Windsor Scholar</em>
          </div>
          <div className="Resume-Item">
            <h5>MASTER OF SCIENCE, SECONDARY SCIENCE EDUCATION</h5>
            <p>City University of New York, Lehman College</p>
          </div>
          <div className="Resume-Item">
            <h5>BACHELOR OF ARTS, ANTRHOPOLOGY</h5>
            <p>New York University</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;