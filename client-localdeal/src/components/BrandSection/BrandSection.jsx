// BrandSection.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BrandSection.css';

function BrandSection() {
    return (
        <Container>
            <div className="justify-content-center text-center">
                <div>
                    <h3 className="mb-3" style={{color: '#20247b'}}>There are so many reasons to love Localdeal</h3>
                    <p className="mb-4">Here are the top 4 as of August 2023</p>
                </div>
            </div>
            <Row className='brand-section'>
                <Col lg={3} md={6} sm={6} xs={12} className='mb-3'>
                    <div className="brand-section-card card-cascade wider d-flex flex-column h-100">
                        <div className="view view-cascade p-4 flex-grow-1 d-flex justify-content-center align-items-center">
                            <i className="fas fa-star fa-4x text-warning"></i>
                        </div>
                        <div className="card-body card-body-cascade text-center pb-0">
                            <h5 className="card-title mb-3 p-2 custom-color fs-5"><strong>Top rated professionals</strong></h5>
                            <p className="card-text mb-5 fs-6">Our professionals are reliable & well-trained, average rating of 4.78</p>
                        </div>
                    </div>
                </Col>

                <Col lg={3} md={6} sm={6} xs={12} className='mb-3'>
                    <div className="brand-section-card card-cascade wider d-flex flex-column h-100">
                        <div className="view view-cascade p-4 flex-grow-1 d-flex justify-content-center align-items-center">
                            <i className="far fa-calendar-alt fa-4x text-danger"></i>
                        </div>
                        <div className="card-body card-body-cascade text-center pb-0">
                            <h5 className="card-title mb-3 p-2 custom-color fs-5"><strong>Same day <br />availability</strong></h5>
                            <p className="card-text mb-4 fs-6">Book in less than 60 seconds, and even select same day slots. </p>
                        </div>
                    </div>
                </Col>

                <Col lg={3} md={6} sm={6} xs={12} className='mb-3'>
                    <div className="brand-section-card card-cascade wider d-flex flex-column h-100">
                        <div className="view view-cascade p-4 flex-grow-1 d-flex justify-content-center align-items-center">
                            <i className="fas fa-chart-line fa-4x text-success"></i>
                        </div>
                        <div className="card-body card-body-cascade text-center pb-0">
                            <h5 className="card-title mb-3 p-2 custom-color fs-5"><strong>Top quality value for money</strong></h5>
                            <p className="card-text mb-4 fs-6">Our professionals are equipped with the best tools and our services.</p>
                        </div>
                    </div>
                </Col>

                <Col lg={3} md={6} sm={6} xs={12} className='mb-3'>
                    <div className="brand-section-card card-cascade wider d-flex flex-column h-100">
                        <div className="view view-cascade p-4 flex-grow-1 d-flex justify-content-center align-items-center">
                            <i className="fas fa-cube fa-4x text-primary"></i>
                        </div>
                        <div className="card-body card-body-cascade text-center pb-0">
                            <h5 className="card-title mb-3 p-2 custom-color fs-5"><strong>Super app</strong></h5>
                            <p className="card-text mb-4 fs-6">Being a Super app means we've got the widest range of home services, so we've got you covered! </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default BrandSection;
