import React from 'react';
import './AboutMe.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import headshot from '../src/images/IMG_2210.update.png';

function AboutMe() {
  return (
    <Container fluid className="AboutMe">
      <Row className="justify-content-md-center">
        <Col>
          <h1>About Me</h1>
        </Col>
      </Row>
      <Row>
        <Col className="AboutMe-Col">
          <Image thumbnail className="AboutMe-Image" src={headshot} alt="About Picture" />
        </Col>
        <Col className="AboutMe-Col">
          <h3>I'm Sairina, and I'm a software engineer.</h3>
          <p>
            I believe that the best work always comes from a collaboration of a diverse set of voices and experiences.
            And after 10 years in urban education, I've realized that we are missing the voices of marginalized communities in our tech spaces.
          </p>
          <p>
            I am dedicated to broadening my impact in this work by bringing my experiences from working with our communities to elevate their needs and perspectives.
          </p>
          <p>
            I became an Edie Windsor Scholar and joined the Rithm School, where I learned to code.
          </p>
          <p style={{'marginBottom':'40px'}}>
            And I am excited to use my new skills to bring my experience in leading teams, collaborating, and problem-solving to create more opportunities.
          </p>
          <Button className="AboutMe-Button" variant="success" href="Resume_Sairina_MerinoTsui_2020.pdf" download="Merino-Tsui-Resume">Download Resume</Button>
        </Col>
      </Row>
    </Container >
  );
}

export default AboutMe;