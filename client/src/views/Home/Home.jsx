import React, { useState, useEffect } from 'react';
import './Home.css';
import Service from '../Services/Service';
import image1 from '../../assets/homeimages/home3.png';

const images = [image1];

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
      <button className="prev" onClick={handlePrevClick}>&#10094;</button>
      <button className="next" onClick={handleNextClick}>&#10095;</button>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="Home">
        <header className="Home-header">
          <Slideshow images={images} />
        </header>
      </div>
      <Service />
    </>
  );
};

export default Home;
