import React from 'react';
import '../GalleryComponent.css';

const GalleryComponent = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="photo-container">
          <img src={image.src} alt={image.alt} className="photo" />
          {image.caption && <div className="photo-caption">{image.caption}</div>}
        </div>
      ))}
    </div>
  );
};

export default GalleryComponent;
