import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Carousel } from 'react-bootstrap';
import './Promotion.css';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Importing location icon
import Layout from "../../utils/Layout";
import Testimonial from "../../components/Testimonial/Testimonial";
import BrandSection from "../../components/BrandSection/BrandSection";
import Banner from "../../components/Banner/Banner";
import Promo from "../../components/Promo/Promo";

function Promotion() {
  const promotions = [
    {
      businessName: "Hotel the plaza",
      promotionType: "Hotel",
      imageUrls: ["https://picsum.photos/318/180", "https://picsum.photos/319/180", "https://picsum.photos/320/180"],
      location: "Cape Town",
      promotionPlan: "Basic",
      offer: "50% off",
      description: "This promotion is valid until the end of the month. Don't miss out!",
      link: "https://example.com/og-the-sea"
    },
    {
      businessName: "OG the see ",
      promotionType: "Food",
      imageUrls: ["https://picsum.photos/318/180", "https://picsum.photos/319/180", "https://picsum.photos/320/180"],
      location: "Kolkata",
      promotionPlan: "Premium",
      offer: "50% off",
      description: "This promotion is valid until the end of the month. Don't miss out!",
      link: "https://example.com/og-the-sea"
    },
    {
      "businessName": "Sunset Resort",
      "promotionType": "Hotel",
      "imageUrls": ["https://picsum.photos/318/180", "https://picsum.photos/319/180", "https://picsum.photos/320/180"],
      "location": "Maui",
      "promotionPlan": "Premium",
      "offer": "30% off",
      "description": "Luxury and relaxation at Sunset Resort. Book now and enjoy 30% off your stay!",
      "link": "https://example.com/sunset-resort"
    },
    {
      "businessName": "Spice Village",
      "promotionType": "Restaurant",
      "imageUrls": ["https://picsum.photos/318/180", "https://picsum.photos/319/180", "https://picsum.photos/320/180"],
      "location": "New Delhi",
      "promotionPlan": "Basic",
      "offer": "Free Dessert",
      "description": "Indulge in the rich flavors of Indian cuisine at Spice Village and get a free dessert with every main course!",
      "link": "https://example.com/spice-village"
    },
    {
      businessName: "Hotel the plaza",
      promotionType: "Hotel",
      imageUrls: ["https://picsum.photos/318/180", "https://picsum.photos/319/180", "https://picsum.photos/320/180"],
      location: "Cape Town",
      promotionPlan: "Basic",
      offer: "50% off",
      description: "This promotion is valid until the end of the month. Don't miss out!",
      link: "https://example.com/hotel-the-plaza"
    },
    {
      businessName: "OG the see ",
      promotionType: "Food",
      imageUrls: ["https://picsum.photos/318/180", "https://picsum.photos/319/180", "https://picsum.photos/320/180"],
      location: "Kolkata",
      promotionPlan: "Premium",
      offer: "50% off",
      description: "This promotion is valid until the end of the month. Don't miss out!",
      link: "https://example.com/og-the-sea"
    },
    {
      "businessName": "Mountain View",
      "promotionType": "Hotel",
      "imageUrls": ["https://picsum.photos/318/180", "https://picsum.photos/319/180", "https://picsum.photos/320/180"],
      "location": "Aspen",
      "promotionPlan": "Basic",
      "offer": "20% off",
      "description": "Breathtaking landscapes of Aspen & enjoy 20% off your stay at Mountain View Lodge!",
      "link": "https://example.com/mountain-view-lodge"
    },
    {
      "businessName": "Taste of Italy",
      "promotionType": "Restaurant",
      "imageUrls": ["https://picsum.photos/318/180", "https://picsum.photos/319/180", "https://picsum.photos/320/180"],
      "location": "Rome",
      "promotionPlan": "Premium",
      "offer": "Special Set Menu",
      "description": "Savor the authentic flavors of Italy with our special set menu at Taste of Italy in the heart of Rome!",
      "link": "https://example.com/taste-of-italy"
    }


    // Add more promotions as needed
  ];

  const [currentPromotionIndex, setCurrentPromotionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromotionIndex((prevIndex) => (prevIndex + 1) % promotions.length);
    }, 15000); // Change this interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [promotions.length]);

  const renderCarousel = (imageUrls) => {
    return (
      <Carousel>
        {imageUrls.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={imageUrl}
              alt={`Slide ${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };

  const DescriptionWithReadMore = ({ description }) => {
    const [expanded, setExpanded] = useState(false);

    if (description.split(' ').length <= 9 || expanded) {
      return <span>{description}</span>;
    }

    const shortDescription = description
      .split(' ')
      .slice(0, 9)
      .join(' ');

    return (
      <>
        {shortDescription}...
        <Button variant="link" onClick={() => setExpanded(true)}>Read More</Button>
      </>
    );
  };

  const basicPromotions = promotions.filter(promotion => promotion.promotionPlan === "Basic");
  const premiumPromotions = promotions.filter(promotion => promotion.promotionPlan === "Premium");

  return (
    <Layout showNavbar={true} showFooter={true}>
      <Container>
        <Row className='promotion-header'>
          <Col>
            <Row>
              <Col md={12} xs={12} className="mb-4">
                <Card className='promotion-card'>
                  <Row>
                    <Col md={6} className='p-5'>
                      {renderCarousel(promotions[currentPromotionIndex].imageUrls)}
                    </Col>
                    <Col md={6} className='mt-5'>
                      <CardBody>
                        <CardTitle className='promotion-card-title'>{promotions[currentPromotionIndex].businessName}</CardTitle>
                        <CardSubtitle className="mb-2 text-muted promotion-card-subtitle">{promotions[currentPromotionIndex].promotionType}</CardSubtitle>
                        <CardText>
                          <div className="location">
                            <FaMapMarkerAlt /> {promotions[currentPromotionIndex].location}
                          </div>
                          <div className="offer">
                            <strong>Offer:</strong> {promotions[currentPromotionIndex].offer}
                          </div>
                          <div className="description">
                            <strong>Description:</strong> description={promotions[currentPromotionIndex].description}
                          </div>
                        </CardText>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='mt-5 p-2 promotion-header'>
          <Col>
            <h2>Premium Promotions</h2>
            <Row xs={1} sm={2} md={3} lg={4}>
              {premiumPromotions.map((promotion, index) => (
                <Col key={index} className="mb-4 p-2">
                  <Card className='promotion-card'>
                    <CardBody>
                      <CardTitle className='promotion-card-title'>{promotion.businessName}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted promotion-card-subtitle">{promotion.promotionType}</CardSubtitle>
                      {renderCarousel(promotion.imageUrls)}
                      <CardText>
                        <div className="location">
                          <FaMapMarkerAlt /> {promotion.location}
                        </div>
                        <div className="offer">
                          <strong>Offer:</strong> {promotion.offer}
                        </div>
                        <div className="description">
                          <strong>Description:</strong> <DescriptionWithReadMore description={promotion.description} />
                        </div>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
        <Row className='mt-2 promotion-header'>
          <Col>
            <h2>Basic Promotions</h2>
            <Row xs={1} sm={2} md={3} lg={4}>
              {basicPromotions.map((promotion, index) => (
                <Col key={index} className="mb-4 p-2">
                  <Card className='promotion-card'>
                    <CardBody>
                      <CardTitle className='promotion-card-title'>{promotion.businessName}</CardTitle>
                      <CardSubtitle className="mb-2 text-muted promotion-card-subtitle">{promotion.promotionType}</CardSubtitle>
                      {renderCarousel(promotion.imageUrls)}
                      <CardText>
                        <div className="location">
                          <FaMapMarkerAlt /> {promotion.location}
                        </div>
                        <div className="offer">
                          <strong>Offer:</strong> {promotion.offer}
                        </div>
                        <div className="description">
                          <strong>Description:</strong> <DescriptionWithReadMore description={promotion.description} />
                        </div>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Testimonial />
      <BrandSection />
      <Banner />
    </Layout>
  );
}

export default Promotion;