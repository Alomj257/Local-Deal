import React from 'react';
import './NewsletterForm.css';
import { Container, Row, Col, Card, Image, InputGroup, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewsletterForm = () => {
  return (
    <Container fluid className="body">
      <Row className="d-flex justify-content-center align-items-center rows">
        <Col md={6}>
          <Card className="card">
            <div className="text-center">
              <Image src="https://i.imgur.com/Dh7U4bp.png" width="200" />
              <span className="d-block mt-3">
                Subscribe to our newsletter in order not to miss new arrivals <br />
                promotions and discounts of our store
              </span>
              <div className="mx-5">
                <InputGroup className="mb-3 mt-4">
                  <FormControl
                    type="text"
                    placeholder="Enter email"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    className="form-control"
                  />
                  <Button className="border-rad">
                    Subscribe
                  </Button>
                </InputGroup>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsletterForm;
