import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Assuming Card component is imported from react-bootstrap
import './Promo.css'; // Import your custom CSS file
import Image from '../../assets/homeimages/Handshake.png';

// const promotions = [
//   {
//     heading: "Promotion 1",
//     text: "Description for Promotion 1. This is a sample text for the promotion.Unlock unbeatable savings and discover hidden gems in your neighborhood with LocalDeal – where incredible discounts meet community convenience! Dont miss out on exclusive offers tailored just for you ",
//     uploadDate: "2024-01-26",
//     uploadedBy: "Jahangir",
//     imageUrl: "https://farm4.staticflickr.com/3049/2327691528_f060ee2d1f.jpg",
//   },
//   {
//     heading: "Promotion 2",
//     text: "Description for Promotion 2. This is another sample text for the promotion. Unlock unbeatable savings and discover hidden gems in your neighborhood with LocalDeal – where incredible discounts meet community convenience! Dont miss out on exclusive offers tailored just for you",
//     uploadDate: "2024-01-27",
//     uploadedBy: "Jahangir",
//     imageUrl: "https://farm4.staticflickr.com/3319/3211138044_9232086442.jpg",
//   }
// ];

function Promo() {
  // Assume backgroundImage1 and backgroundImage2 are obtained from the backend
  const backgroundImage1 = Image;

//   const [expandedPromotions, setExpandedPromotions] = useState({});

//   const toggleExpand = (index) => {
//     setExpandedPromotions(prevState => ({
//       ...prevState,
//       [index]: !prevState[index]
//     }));
//   };

  return (
    <Container>
      {/* First Row */}
      <Row className="promo-row mb-4 text-center" style={{ backgroundImage: `url(${backgroundImage1})` }}>
        <Col>
          <div className="promo-content">
            <h1>Welcome to the <span className="promo-text">promotion</span> page</h1>
            <p>Here you can see our promotions, <span className='promo-span'>if you want to promote please contact us</span></p>
          </div>
        </Col>
      </Row>

      {/* Second Row */}
      {/* <Row className="justify-content-center">
        {promotions.map((promotion, index) => (
          <Col key={index} sm={6}>
            <Card className="max-w-sm">
              <Row noGutters>
                <Col sm={6}>
                  <Card.Img variant="top" src={promotion.imageUrl} />
                </Col>
                <Col sm={6}>
                  <Card.Body>
                    <div className="promotion-content">
                      <h2>{promotion.heading}</h2>
                      <p>{expandedPromotions[index] ? promotion.text : promotion.text.substring(0, 100) + "..."}</p>
                      <div className="promotion-details">
                        <p>
                          <i className="fas fa-calendar-alt"></i>{" "}
                          {promotion.uploadDate}
                        </p>
                        <p>
                          <i className="fas fa-user"></i> {promotion.uploadedBy}
                        </p>
                      </div>
                      <button className="promotion-btn" onClick={() => toggleExpand(index)}>
                        {expandedPromotions[index] ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row> */}
    </Container>
  );
}

export default Promo;
