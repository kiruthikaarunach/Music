// CarouselComponent.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = ({ images }) => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000} // Change interval as needed
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
            <p className="legend">{image.caption}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
