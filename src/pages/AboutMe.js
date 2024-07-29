
import React from 'react';
import { Typography, Box } from '@mui/material';
import '../AboutMe.css'; // Import CSS for styling

const AboutMe = () => {
  return (
    <Box p={2}>
     

      <div className="guru-section">
          {/* Left column for photos */}
          <div className="guru-column">
            {/* <div className="left-column"> */}
              <img
                src={`${process.env.PUBLIC_URL}/Kiruthika-singer.jpg`}
                alt="Guru 1"
                className="guru-image"
              />
            {/* </div> */}
          </div>

          {/* Right column for descriptions */}
          <div className="guru-column">
            {/* <div className="right-column"> */}
            <div className="centered-text">

              <i className="fas fa-music"></i>
              Kiruthika Arunachalam is a Software Professional with 15+ years of IT experience with Fortune companies with a Master's Degree in Computer Science and is currently a Full Stack Java Consultant to Sephora.
            
            Music has always been her passion. She values music deeply and respects it as equivalent to God, loving to teach students with great reverence.
            She learns from eminent Gurus and is very humbled and proud to have such profound mentors. 
            
            Kiruthika teaches South Indian Carnatic music starting from basic lessons like Sarali, Janta, Dhattu Varisais, and Alankaras in 72 Melakarta ragas and numerous Janya ragas. She also teaches Slokas and Bhajans, which are raga-based in Sanskrit, Hindi, Tamil, and Telugu.
            In addition, she teaches Geethams, Kritis, and Varnams for advanced levels and loves to teach Indian film music as well.
            She has performed on TV when she was residing in India. She has done stage performances with playback singers and multiple bands and had been part of Lakshman Shruti for some time. She used to do playback recordings for budding music directors for devotional albums and +1 tracks. scrollbar   <i className="fas fa-heart"></i>
            </div>
            </div>
          {/* </div> */}
        </div>

   
         {/* Fourth section */}
         <div className="guru-section">
          {/* Left column for descriptions */}
          <div className="guru-column">
            {/* <div className="right-column"> */}
            <div className="centered-text">
              <i className="fas fa-music"></i>
 Kiruthika Arunachalam is currently learning carnatic music from Dr.Shyamala Vinod for the past 8 years and had always been learning music from her childhood.Dr. Shyamala gives voice training for leading playback singers and Super Singers.
              <i className="fas fa-heart"></i>
              </div>
            {/* </div> */}
          </div>

          {/* Right column for photos */}
          <div className="guru-column">
            {/* <div className="left-column"> */}
              <img
                src={`${process.env.PUBLIC_URL}/Guru.jpg`}
                alt="Guru 2"
                className="guru-image-2"
              />
               <img
                src={`${process.env.PUBLIC_URL}/Guru-award.jpg`}
                alt="Guru 2"
                className="guru-image-2"
              />
               <img
                src={`${process.env.PUBLIC_URL}/Shyamalamam.jpg`}
                alt="Guru 2"
                className="guru-image-1"
              />
            
            {/* </div> */}
          </div>
        </div>
      
      {/* Fourth section */}
    
        {/* Second section */}
        <div className="guru-section">
          {/* Left column for descriptions */}
          <div className="guru-column">
          <div className="centered-text">

              <i className="fas fa-music"></i>
              She has performed in Music Director James Vasanthan's Tamizhosai team  in India and Canada. 
              <i className="fas fa-heart"></i>
            </div>
            </div>

          {/* Right column for photos and video */}
          <div className="guru-column">
              <img
                src={`${process.env.PUBLIC_URL}/Tamizhosai.jpg`}
                alt="Guru 1"
                className="guru-image-1"
              />
            
              {/* <div className="video-container"> */}
                <iframe 
                  className="guru-image-1-video"
                  src="https://www.youtube.com/embed/wZZn1_z1WXU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              {/* </div> */}
            
          </div>
        </div>
        <div className="guru-section">
          {/* Left column for descriptions */}
          <div className="guru-column">
          <div className="centered-text">

              <i className="fas fa-music"></i>
              She learnt basics of western classical from James Vasanthan as part of being in Tamizhosai.Tamizhosai is a 30-voice Choral Ensemble which sings ancient Tamil poems from Sangam Literature to convey the classical literature to the present generation through popular music.
              <i className="fas fa-heart"></i>
          </div>
</div>
          {/* Right column for photos */}
          <div className="guru-column">
          <img
                src={`${process.env.PUBLIC_URL}/JamesVasanthan-cropped.jpg`}
                alt="Guru 2"
                className="guru-image"
              />
          </div>
          </div>
        

        {/* Third section */}
        <div className="guru-section">
          {/* Left column for photos */}
          <div className="guru-column">
              <img
                src={`${process.env.PUBLIC_URL}/Vandana-Srinivasan.jpg`}
                alt="Guru 1"
                className="guru-image-1"
              />
          </div>

          {/* Right column for descriptions */}
          <div className="guru-column">
          <div className="centered-text">

              <i className="fas fa-music"></i>
              She is learning semi-classical music from famous playback singer Vandana Srinivasan who is an Indian playback singer, working mainly for the South Indian film industry especially in Tamil, Telugu, and Kannada.
              <i className="fas fa-heart"></i>
          </div>
          </div>
        </div>

        {/* Fourth section */}
        <div className="guru-section">
          {/* Left column for descriptions */}
          <div className="guru-column">
          <div className="centered-text">

              <i className="fas fa-music"></i>
              She learns film music from famous Vijay TV Super Singer and Jaya Super Singer Winner and Playback Singer Keshav Vinod.
              <i className="fas fa-heart"></i>
          </div>
</div>
          {/* Right column for photos */}
          <div className="guru-column">
              <img
                src={`${process.env.PUBLIC_URL}/keshav-vinod.jpg`}
                alt="Guru 2"
                className="guru-image-1"
              />
          </div>
        </div>
    </Box>
  );
};

export default AboutMe;


