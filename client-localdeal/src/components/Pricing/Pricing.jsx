import React from 'react';
import './Pricing.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Pricing = () => {
  return (
    <section>
      <Container className="pricing">
        <Row><h2 className='text-center mb-5' style={{color:'black', fontWeight:'400'}}>Save money and take your business to <br /><strong style={{color:'gold', fontWeight:'800'}}>the next level</strong></h2></Row>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <Card className="mb-5 mb-lg-0">
              <Card.Body>
                <Card.Title className="text-muted text-uppercase text-center">PUBLIC</Card.Title>
                <Card.Text className="text-center">$0 <span className="period">/month</span></Card.Text>
                <hr />
                <ul className="fa-ul">
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>View Products</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Purchase Products</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Track Orders</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>24/7 Support</li>
                  <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>No Registration</li>
                  <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
                </ul>
                <div className="d-grid">
                  <Button variant="primary" className="text-uppercase">SUBSCRIBE</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Card className="mb-5 mb-lg-0">
              <Card.Body>
                <Card.Title className="text-muted text-uppercase text-center">BASIC BUSINESS</Card.Title>
                <Card.Text className="text-center">$29 <span className="period">/month</span></Card.Text>
                <hr />
                <ul className="fa-ul">
                  <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Single Business</strong></li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Business Promotion</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Partner Collaboration</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Registration</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Tracking Tools</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Priority Contact</li>
                  <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status Reports</li>
                </ul>
                <div className="d-grid">
                  <Button variant="primary" className="text-uppercase">SUBSCRIBE</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Card>
              <Card.Body>
                <Card.Title className="text-muted text-uppercase text-center">PREMIUM BUSINESS</Card.Title>
                <Card.Text className="text-center">$49 <span className="period">/month</span></Card.Text>
                <hr />
                <ul className="fa-ul">
                  <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited Business</strong></li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Advanced Promotion</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Product Listings</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Registration</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Enhanced Tracking</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
                  <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
                </ul>
                <div className="d-grid">
                  <Button variant="primary" className="text-uppercase">SUBSCRIBE</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Pricing;
