import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Testimonial.css";

const testimonialData = [
  {
    name: "Teresa May",
    role: "Founder at ET Company",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
    rating: 4.5,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
  },
  {
    name: "Maggie McLoan",
    role: "Photographer at Studio LA",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp",
    rating: 5,
    testimonial:
      "Autem, totam debitis suscipit saepe sapiente magnam officiis quaerat necessitatibus odio assumenda.",
  },
  {
    name: "Alexa Horwitz",
    role: "Front-end Developer in NY",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp",
    rating: 4.5,
    testimonial:
      "Cras sit amet nibh libero, in gravida nulla metus scelerisque ante sollicitudin commodo cras purus odio, vestibulum in tempus viverra turpis.",
  },
  {
    name: "Jahangir Alom",
    role: "Technical Manager",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp",
    rating: 4.5,
    testimonial:
      "Cras sit amet nibh libero, in gravida nulla metus scelerisque ante sollicitudin commodo cras purus odio, vestibulum in tempus viverra turpis.",
  },
];;

export default function Testimonial() {
  const [startIndex, setStartIndex] = useState(0);
  const [displayedCards, setDisplayedCards] = useState(3); // Initially display 3 cards
  const [expandedTestimonials, setExpandedTestimonials] = useState(Array(testimonialData.length).fill(false));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 599) {
        setDisplayedCards(1);
      } else if(window.innerWidth <= 768){
        setDisplayedCards(2);
      }else {
        setDisplayedCards(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTestimonial = (index) => {
    setExpandedTestimonials((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const isTestimonialExpanded = (index) => {
    return expandedTestimonials[index];
  };

  const nextSlide = () => {
    if (startIndex + displayedCards < testimonialData.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <Container>
      <div className="justify-content-center text-center">
        <div>
          <h3 className="mb-3" style={{ color: '#20247b'}}>What customers say about Localdeal</h3>
          <p className="mb-4">Localdeal has been rated 4.8 out of 5 based on 962 reviews as of August 2023</p>
        </div>
      </div>
      <Row className="text-center testimonial">
        {testimonialData.slice(startIndex, startIndex + displayedCards).map((testimonial, index) => (
          <Col key={startIndex + index}  sm={6} md={4} lg={4}>
            <Card className="testimonial-card">
              <Card.Body className="py-3 mt-1 p d-flex flex-column">
                <div>
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src={testimonial.image}
                      className="rounded-circle shadow-1-strong"
                      width="60"
                      height="60"
                      alt={`${testimonial.name}'s avatar`}
                    />
                  </div>
                  <h5 className="font-weight-bold">{testimonial.name}</h5>
                  <h6 className="font-weight-bold">{testimonial.role}</h6>
                  <ul className="list-unstyled d-flex justify-content-center mb-2">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <li key={i}>
                        <i className="fas fa-star text-info"></i>
                      </li>
                    ))}
                    {testimonial.rating % 1 !== 0 && (
                      <li>
                        <i className="fas fa-star-half-alt text-info"></i>
                      </li>
                    )}
                  </ul>
                  <p className="mb-2">
                    <i className="fas fa-quote-left pe-2"></i>
                    {isTestimonialExpanded(startIndex + index)
                      ? testimonial.testimonial
                      : testimonial.testimonial.slice(0, 80) + "..."}
                  </p>
                </div>
                <span
                  className="read-more"
                  onClick={() => toggleTestimonial(startIndex + index)}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  {isTestimonialExpanded(startIndex + index) ? " Read less" : " Read more"}
                </span>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="controls text-center">
        <button className="control-button" onClick={prevSlide} disabled={startIndex === 0}>
          <span>&#8592;</span>
        </button>
        <button className="control-button" onClick={nextSlide} disabled={startIndex + displayedCards >= testimonialData.length}>
          <span>&#8594;</span>
        </button>
      </div>
    </Container>
  );
}
