// Promotion.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Promotion.css';
import Footer from '../../components/Footer/Footer';

const Promotion = () => {
  const [scrollDirection] = useState('down');
  let scrollPos = 0;

  const promotions = [
    {
      heading: 'Promotion 1',
      text: 'Description for Promotion 1. This is a sample text for the promotion.Unlock unbeatable savings and discover hidden gems in your neighborhood with LocalDeal – where incredible discounts meet community convenience! Dont miss out on exclusive offers tailored just for you ',
      uploadDate: '2024-01-26',
      uploadedBy: 'Jahangir',
      imageUrl: 'https://farm4.staticflickr.com/3049/2327691528_f060ee2d1f.jpg',
    },
    {
      heading: 'Promotion 2',
      text: 'Description for Promotion 2. This is another sample text for the promotion. Unlock unbeatable savings and discover hidden gems in your neighborhood with LocalDeal – where incredible discounts meet community convenience! Dont miss out on exclusive offers tailored just for you',
      uploadDate: '2024-01-27',
      uploadedBy: 'Jahangir',
      imageUrl: 'https://farm4.staticflickr.com/3319/3211138044_9232086442.jpg',
    },
    {
      heading: 'Promotion 3',
      text: 'Description for Promotion 3. This is a sample text for the promotion. Unlock unbeatable savings and discover hidden gems in your neighborhood with LocalDeal – where incredible discounts meet community convenience! Dont miss out on exclusive offers tailored just for you',
      uploadDate: '2024-01-26',
      uploadedBy: 'Jahangir',
      imageUrl: 'https://farm4.staticflickr.com/3224/3081748027_0ee3d59fea_z_d.jpg',
    },
    {
      heading: 'Promotion 4',
      text: 'Description for Promotion 4. This is another sample text for the promotion. Unlock unbeatable savings and discover hidden gems in your neighborhood with LocalDeal – where incredible discounts meet community convenience! Dont miss out on exclusive offers tailored just for you',
      uploadDate: '2024-01-27',
      uploadedBy: 'Jahangir',
      imageUrl: 'https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg',
    },
  ];

  const handleScroll = () => {
    const promotionRows = document.querySelectorAll('.promotion-row');
    const currentScrollPos = window.scrollY;
    const isScrollingDown = currentScrollPos > scrollPos;

    promotionRows.forEach((row, index) => {
      const rect = row.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        row.style.opacity = 1;

        // Apply animation classes only when scrolling down
        if (isScrollingDown) {
          row.classList.add(index % 2 === 0 ? 'even-row' : 'odd-row');
        } else {
          row.classList.remove('even-row', 'odd-row');
        }
      } else {
        row.classList.remove('even-row', 'odd-row');
      }
    });

    scrollPos = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <Container>
        <Row>
          <h3 className='promotion-heading'>Promotions <small> Explore different promotions</small></h3>
        </Row>
        {promotions.map((promotion, index) => (
          <Row key={index} className={`promotion-row ${scrollDirection === 'down' ? 'down-scroll' : 'up-scroll'}`} style={{ opacity: 0 }}>
            <Col lg={6} className={`order-lg-${index % 2 === 0 ? '1' : '2'}`}>
              <div className="promotion-content">
                <h2>{promotion.heading}</h2>
                <p>{promotion.text}</p>
                <div className="promotion-details">
                  <p>
                    <i className="fas fa-calendar-alt"></i> {promotion.uploadDate}
                  </p>
                  <p>
                    <i className="fas fa-user"></i> {promotion.uploadedBy}
                  </p>
                </div>
                <button className="promotion-btn">Read More</button>
              </div>
            </Col>
            <Col lg={6} className={`order-lg-${index % 2 === 0 ? '2' : '1'}`}>
              <div className="promotion-image" data-hoverable>
                <img src={promotion.imageUrl} alt={`Promotion ${index + 1}`} />
              </div>
            </Col>
          </Row>
        ))}
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default Promotion;
