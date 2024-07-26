// ResponsiveGallery.js
import React from 'react';
import '../ResponsiveGallery.css';

const ResponsiveGallery = () => {
  return (
    <div className="gallery-container">
         <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/Linkedin-pic.jpg`} alt="Image 1" className="gallery-image-1" />
        {/* <p className="image-description">This is the description for Image 1</p> */}
        <i className="fas fa-music"></i>
              Kiruthika Arunachalam is a Software Professional with 15+ years of IT experience with Fortune companies with a Master's Degree in Computer Science and is currently a Full Stack Java Consultant to Sephora.
            Music has always been her passion and another profession right from her childhood. She values music deeply and respects it as equivalent to God, loving to teach students with great reverence.
            She learns from eminent Gurus and is very humbled and proud to have such profound mentors. Kiruthika teaches South Indian Carnatic music starting from basic lessons like Sarali, Janta, Dhattu Varisais, and Alankaras in 72 Melakarta ragas and numerous Janya ragas. She also teaches Slokas and Bhajans, which are raga-based in Sanskrit, Hindi, Tamil, and Telugu.
            In addition, she teaches Geethams, Kritis, and Varnams for advanced levels and loves to teach Indian film music as well.
            She has performed on TV when she was residing in India. She has done stage performances with playback singers and multiple bands and was part of Lakshman Shruti for some time. She used to do playback recordings for budding music directors for devotional albums and +1 tracks.
            She is also a mother of 2 beautiful kids.              <i className="fas fa-heart"></i>
      </div>
      <div className="image-container">
        <img src="Tamizhosai.jpg" alt="Image 2" className="gallery-image-2" />
        <p className="image-description">This is the description for Image 2</p>
      </div>
      <div className="image-container">
        <img src={`${process.env.PUBLIC_URL}/JamesVasanthan.jpg`} alt="Image 1" className="gallery-image-1" />
        <p className="image-description">This is the description for Image 1</p>
      </div>
      <div className="image-container">
        <img src="Tamizhosai.jpg" alt="Image 2" className="gallery-image-2" />
        <p className="image-description">This is the description for Image 2</p>
      </div>
    </div>
  );
};

export default ResponsiveGallery;
