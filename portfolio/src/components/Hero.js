import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'; 

function Hero(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            {props.title && <h2 className="display-1 font-weight-bolder">{props.title}</h2> }
            {props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
            {props.tagLine && <h3 className="lead font-weight-light">{props.tagLine}</h3> }
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Hero;
