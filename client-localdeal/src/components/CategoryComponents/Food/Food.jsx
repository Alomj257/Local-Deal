// // Food.jsx

// import React from 'react';
// import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUtensils, faBed } from '@fortawesome/free-solid-svg-icons';
// import './Food.css';
// import img1 from '../../../assets/about/a3.png';
// import img2 from '../../../assets/about/a1.png';

// function Food() {
//   return (
//     <Container>
//       <Row className='mb-5 mt-5'>
//         <Col md={6} className='mb-5'>
//           {/* Image Slider */}
//           <Carousel>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={img1}
//                 alt="Image 1"
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={img2}
//                 alt="Image 2"
//               />
//             </Carousel.Item>
//             {/* Add more Carousel.Items as needed */}
//           </Carousel>
//         </Col>

//         <Col md={6} className='mb-5'>
//           {/* Content with Read More button */}
//           <div className="content">
//             <div className="icon">
//               <FontAwesomeIcon icon={faUtensils} size="2x" className="icon" />
//             </div>
//             <div className="text-content">
//               <h2>Food</h2>
//               <p>Discover unbeatable savings right in your neighborhood with LocalDeal – where every purchase is a step closer to a smarter, trendier you! Don't just shop, thrive locally!</p>
//             </div>
//             <Button variant="primary" className="read-more-button">Read More</Button>
//           </div>
//         </Col>
//       </Row>
//       <Row className='mb-5 mt-5'>
//         <Col md={6} className='mb-5'>
//           {/* Content with Read More button */}
//           <div className="content">
//             <div className="icon">
//               <FontAwesomeIcon icon={faBed} size="2x" className="icon" />
//             </div>
//             <div className="text-content">
//               <h2>Accommodation</h2>
//               <p>Discover unbeatable savings right in your neighborhood with LocalDeal – where every purchase is a step closer to a smarter, trendier you! Don't just shop, thrive locally!</p>
//             </div>
//             <Button variant="primary" className="read-more-button">Read More</Button>
//           </div>
//         </Col>
//         <Col md={6} className='mb-5'>
//           {/* Image Slider */}
//           <Carousel>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={img1}
//                 alt="Image 1"
//               />
//             </Carousel.Item>
//             <Carousel.Item>
//               <img
//                 className="d-block w-100"
//                 src={img2}
//                 alt="Image 2"
//               />
//             </Carousel.Item>
//             {/* Add more Carousel.Items as needed */}
//           </Carousel>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Food;
