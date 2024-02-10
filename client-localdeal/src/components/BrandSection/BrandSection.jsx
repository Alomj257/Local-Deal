import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BrandSection.css';
function BrandSection() {
    return (
        <Container>
            <div className="justify-content-center">
                <div md="12" xl="8" className="text-center">
                    <h3 className="fw-bold mb-3 text-primary">There are so many reasons to love Localdeal!</h3>
                    <p className="mb-5">Here are the top 4 as of August 2023</p>
                </div>
            </div>
            <Row>
                <Col md={3} xs={6}>
                    <div className="card card-cascade wider">
                        <div className="view view-cascade p-4">
                            <i className="fas fa-star fa-4x text-warning d-flex justify-content-center align-items-center"></i>
                        </div>
                        <div className="card-body card-body-cascade text-center pb-0">
                            <h4 className="card-title mb-3 p-2 custom-color"><strong>Top rated professionals</strong></h4>
                            <p className="card-text mb-5">Our professionals are reliable & well- trained, average rating of 4.78</p>
                        </div>
                    </div>
                </Col>

                <Col md={3} xs={6}>
                    <div className="card card-cascade wider">
                        <div className="view view-cascade p-4">
                            <i className="far fa-calendar-alt fa-4x text-danger d-flex justify-content-center align-items-center"></i>
                        </div>
                        <div className="card-body card-body-cascade text-center pb-0">
                            <h4 className="card-title mb-3 p-2 custom-color"><strong>Same day <br />availability</strong></h4>
                            <p className="card-text mb-5">Book in less than 60 seconds, and even select same day slots. </p>
                        </div>
                    </div>
                </Col>

                <Col md={3} xs={6}>
                    <div className="card card-cascade wider">
                        <div className="view view-cascade p-4">
                            <i className="fas fa-chart-line fa-4x text-success d-flex justify-content-center align-items-center"></i>
                        </div>
                        <div className="card-body card-body-cascade text-center pb-0">
                            <h4 className="card-title mb-3 p-2 custom-color"><strong>Top quality value for money</strong></h4>
                            <p className="card-text mb-5">Our professionals are equipped with the best tools and our services.</p>
                        </div>
                    </div>
                </Col>

                <Col md={3} xs={6}>
                    <div className="card card-cascade wider">
                        <div className="view view-cascade p-4">
                            <i className="fas fa-cube fa-4x text-primary d-flex justify-content-center align-items-center"></i>
                        </div>
                        <div className="card-body card-body-cascade text-center pb-0">
                            <h4 className="card-title mb-3 p-2 custom-color"><strong>Super app</strong></h4>
                            <p className="card-text mb-5">Being a Super app means we've got the widest range of home services, so we've got you covered! </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default BrandSection;
