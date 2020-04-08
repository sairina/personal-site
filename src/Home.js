import React, { useState, useEffect } from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from "../Loading";

function Home() {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      let response = await getIntakeFields();
      if (response.errors) {
        setError(response.errors);
      } else {
        setFields(response.data);
      }
      setIsLoading(false);
    };
    getData();
  }, [setIsLoading, setError]);

  if (loading) return <Loading />;

  return (
    <Container fluid className="Home">
      <Row className="justify-content-md-center">
        <Col></Col>
        <Col md="auto"><h1>Sairina Merino Tsui</h1></Col>
        <Col></Col>
        <Col md="auto"><h5>Seeking to use technology to elevate the voices and perspectives of marginalized communities.</h5></Col>
      </Row>
    </Container >
  );
}

export default Home;