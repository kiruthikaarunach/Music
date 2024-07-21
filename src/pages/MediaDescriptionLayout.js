import React from 'react';
import '../MediaDescriptionLayout.css'; // Import the CSS for styling

const MediaDescriptionLayout = () => {
  return (
    <div className="container">
      <div className="media-column">
        <img
          src={`${process.env.PUBLIC_URL}/image1.jpg`}
          alt="Image 1"
          className="media-item"
        />
        <img
          src={`${process.env.PUBLIC_URL}/image2.jpg`}
          alt="Image 2"
          className="media-item"
        />
        <iframe
          className="media-item"
          src="https://www.youtube.com/embed/wZZn1_z1WXU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="description-column">
        <p className="description">
          Kiruthika Arunachalam is currently learning carnatic music from Dr.Shyamala Vinod from the past 8 years and has always been learning music from her childhood.
        </p>
      </div>
    </div>
  );
};

export default MediaDescriptionLayout;
