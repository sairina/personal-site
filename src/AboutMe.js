import React from 'react';
import './AboutMe.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutMe() {
  return (
    <Container fluid className="AboutMe">
      <Row className="justify-content-md-center">
        <Col md="auto"><h1>I'm Sairina, software engineer.</h1></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto" className="AboutMe-Col"><p>
          I graduated from NYU with a BA in Anthropology and Pre-med, but joined Teach for America as a high school chemistry teacher to work on fixing the disparities in urban education.
          I earned my MS in Science Education, and have been working in various roles in education, from classroom teacher, assistant principal, director of science content at TFA, and assistant principal.
          Somewhere in there, my team won the EDUStartUp Weekend. nbd.
        </p></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto"><h2>Programming Languages</h2></Col>
        <Col md="auto" className="AboutMe-Col"><p>
          Laborum occaecat laborum labore ullamco aute. Consectetur qui in sunt tempor aliqua consectetur nisi ea. Minim pariatur duis deserunt ullamco elit ipsum ea est dolore ullamco aliqua magna eu ullamco. Ut dolore quis Lorem esse do duis consectetur anim nulla culpa sit.

          Consectetur eiusmod dolore in irure velit. Enim nisi minim eiusmod pariatur deserunt deserunt voluptate cillum irure reprehenderit veniam esse. Enim tempor laborum elit cillum non ullamco. Esse ex esse in enim culpa est enim. Occaecat eiusmod dolor dolore id anim excepteur consequat est magna magna. Nulla et officia reprehenderit ipsum.

          Ut aute consectetur elit qui ad laborum nostrud ullamco mollit qui elit esse occaecat. Lorem do cillum voluptate sit ea irure do amet consectetur nisi deserunt minim voluptate. Enim mollit in in deserunt ipsum commodo nisi culpa fugiat consequat elit minim magna. Sint sit magna aliqua nisi commodo voluptate culpa laborum. Esse duis id elit in adipisicing Lorem duis ex esse sint minim irure officia. Magna velit reprehenderit amet mollit consectetur sit proident eu tempor sint Lorem.

          Incididunt consectetur cupidatat do ad deserunt. Magna aliqua dolore est elit sit. Lorem esse aliquip laboris consectetur sint aliquip tempor sit ad id. Ex excepteur commodo nulla aliquip fugiat aliqua ad non eu duis voluptate ex. Occaecat ut non occaecat sunt ullamco veniam fugiat.
        </p></Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto"><h2>Web Technologies</h2></Col>
        <Col md="auto" className="AboutMe-Col"><p>
          Magna mollit dolore consequat dolor occaecat anim labore dolore laborum. Lorem non nostrud laboris labore cillum occaecat nisi esse qui excepteur nisi ad veniam. Et consequat veniam consequat consectetur exercitation veniam duis culpa eiusmod fugiat duis. Ipsum voluptate elit velit enim ad esse ullamco reprehenderit proident do consectetur pariatur.

          Excepteur quis est magna amet ea. Non qui nostrud Lorem est Lorem qui ex amet duis irure. Aliqua anim cupidatat culpa non anim pariatur quis. Exercitation exercitation enim veniam est.

          Qui aliquip officia magna quis et ullamco enim. Amet esse ea deserunt est non eiusmod veniam ex. Proident anim est fugiat sunt esse officia officia. Voluptate reprehenderit do exercitation consectetur. Nisi quis reprehenderit cillum nostrud Lorem reprehenderit ex anim incididunt eu.

          Fugiat cillum Lorem esse aliqua minim occaecat reprehenderit duis. Irure proident nulla non sit deserunt exercitation adipisicing nulla occaecat nisi labore non aliquip. Qui labore ipsum magna esse laborum et laborum ullamco ullamco cillum.

        In velit sit incididunt dolor commodo est adipisicing pariatur. Mollit nisi ea id officia eu deserunt magna et velit. Occaecat aute eiusmod excepteur voluptate veniam dolor eu esse minim deserunt. Consectetur aliquip minim nulla laboris amet. Dolor voluptate laboris velit ullamco voluptate irure consectetur culpa ullamco incididunt reprehenderit.</p>
        </Col>
      </Row>
    </Container >
  );
}

export default AboutMe;