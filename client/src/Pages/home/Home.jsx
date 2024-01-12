// src/Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';

// Import your images
import image1 from '../../assets/homeimages/home1.png';
import image2 from '../../assets/homeimages/home2.png';
import image3 from '../../assets/homeimages/home1.png';

const images = [image1, image2, image3];

const Slideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
    </div>
  );
};

const Home = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        <Slideshow images={images} />
      </header>
    </div>
  );
};

export default Home;
