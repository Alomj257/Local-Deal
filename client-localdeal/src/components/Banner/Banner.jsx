import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShieldAlt } from 'react-icons/fa';
import './Banner.css';

function Banner() {
  return (
    <Container>
      <Row className="banner-row mt-4 mb-4">
        <Col md={4} className='p-4 justifly-content-center text-center'>
          <FaShieldAlt className="shield-icon" /> 
        </Col>
        <Col md={8} className='p-4 justifly-content-center'>
          <h2 className="banner-subheading">Localdeal protects you and your money.</h2>
          <p>Our priority is to give you peace of mind. In the unlikely event of damages during the service, we will get you covered up to 1000.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
