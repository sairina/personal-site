import React from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import yellowPeril from '../src/images/web_goto_720x_copy.png';

function Home() {
  return (
      <Container fluid className="Home">
        <Row className="justify-content-md-center boxy">
          <Col md="auto"><h1>Sairina Merino Tsui</h1></Col>
          <Col md="auto"><h5>Seeking to use software engineering to elevate the voices of marginalized communities.</h5></Col>
        </Row>
      </Container>
  );
}

export default Home;