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
import JoblyIdx from '../src/images/jobly-home.png';


function Projects() {
  return (
    <Container fluid className="Projects">
      <Row className="justify-content-md-center">
        <Col>
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row className="Projects-Row">
        <Col lg={true} className="Projects-Col">
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
        <Col lg={true} className="Projects-Col">
          <h2>Jobly</h2>
          <h5>Finding a job has never been more intuitive.</h5>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={JoblyIdx}
                alt="Jobly Home Page"
              />
            </Carousel.Item>
          </Carousel>
          <Button
            className="Projects-Button"
            variant="primary"
            href="https://jobly-demo-sairina.herokuapp.com"
            target="_blank"
            rel="noreferrer noopener">
            Jobly Demo
          </Button>
          <Button
            className="Projects-Button"
            variant="primary"
            href="https://github.com/sairina/react-jobly"
            target="_blank"
            rel="noreferrer noopener">
            Git Repo
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;