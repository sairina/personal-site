import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Projects.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import WarblerIdx from '../src/images/warbler-index.png';
import WarblerProfile from '../src/images/warbler-profile.png';
import WarblerWarbles from '../src/images/warbler-warbles.png';


function Projects() {
  return (
    <Container fluid className="Projects">
      <Row className="justify-content-md-center">
        <Col>
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row className="Projects-Row">
        <Col xs={6} className="Projects-Col">
          <h2>Warbler</h2>
          <h5>A Twitter clone with a cooler bird.</h5>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={WarblerIdx}
                alt="Warbler Home and Index Page"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={WarblerProfile}
                alt="Warbler Profile Page"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={WarblerWarbles}
                alt="Warbler Messages Page"
              />
            </Carousel.Item>
          </Carousel>
          <Button 
            className="Projects-Button"
            variant="primary" 
            href="https://warbler-demo-sairina.herokuapp.com/" 
            target="_blank" 
            rel="noreferrer noopener">
            Warbler Demo
          </Button>
          <Button 
            className="Projects-Button"
            variant="primary" 
            href="https://github.com/sairina/warbler" 
            target="_blank" 
            rel="noreferrer noopener">
            Git Repo
          </Button>
        </Col>
        <Col xs={6} className="Projects-Col">
          <h2>TBD</h2>
          <h5>TBD</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;