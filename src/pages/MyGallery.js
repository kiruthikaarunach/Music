import React from 'react';
import GalleryComponent from '../components/GalleryComponent'; // Adjust relative path here

const App = () => {
  const images = [
   
    {
      src: `${process.env.PUBLIC_URL}/JamesVasanthan.jpg`,
      alt: 'Image 2',
      caption: 'Tamizhosai show with Music Director James Vasanthan',
      width: 800,
      height: 600
    },
   
    {
      src: `${process.env.PUBLIC_URL}/Susheelamam2.jpg`,
      alt: 'Image 3',
      caption: 'Album release by Playback singer P.Susheela mam',
      width: 800,
      height: 600
    },
    {
      src: `${process.env.PUBLIC_URL}/podhigai-full.jpg`,
      alt: 'Image 1',
      caption: 'Podhigai channel Performance',
      width: 800,
      height: 600
    },
    {
      src: `${process.env.PUBLIC_URL}/VijaySethupathy.jpg`,
      alt: 'Image 1',
      caption: 'Show Chief Guest',
      width: 800,
      height: 600
    },
    {
      src: `${process.env.PUBLIC_URL}/Jagadeesh Kumar.jpg`,
      alt: 'Image 4',
      caption: 'Nemili show with Playback singer Jagadeesh Kumar',
      width: 800,
      height: 600
    },
    {
      src: `${process.env.PUBLIC_URL}/Padmahasini T.jpg`,
      alt: 'Image 5',
      caption: 'Judge - Playback singer Chinmayi Sripada\'s mother Padmahasini T',
      width: 800,
      height: 600
    },
    {
      src: `${process.env.PUBLIC_URL}/Christopher Stanley.jpg`,
      alt: 'Image 6',
      caption: 'Judge and Playback singer Christopher Stanley ',
      width: 800,
      height: 600
    },
    {
      src: `${process.env.PUBLIC_URL}/Shuba mam.jpg`,
      alt: 'Image 7',
      caption: 'Lakshman Shruti show with Shuba mam',
      width: 800,
      height: 600
    },
    {
      src: `${process.env.PUBLIC_URL}/SRSM-supersinger.jpg`,
      alt: 'Image 8',
      caption: 'Nemili concert with SRSM Super Singer team',
      width: 900,
      height: 700
    },
    {
      src: `${process.env.PUBLIC_URL}/Sai Vignesh.jpg`,
      alt: 'Image 9',
      caption: 'Marriage show with Playback singer Sai Vignesh',
      width: 800,
      height: 600
    },
    {
      src: `${process.env.PUBLIC_URL}/Ze tamil Judge Anita.jpg`,
      alt: 'Image 10',
      caption: 'Lakshman Shruti show with Zee Tamil SAregamaPa Judge Anita',
      width: 800,
      height: 600
    },
    {
      src: `${process.env.PUBLIC_URL}/Janaki Bala.jpg`,
      alt: 'Image 11',
      caption: 'Singer Janaki Bala',
      width: 800,
      height: 600
    },
    {
      src: `${process.env.PUBLIC_URL}/Susheelaamma1.jpg`,
      alt: 'Image 11',
      caption: 'Audio Launch by Playback singer P.Susheela mam',
      width: 800,
      height: 600
    },
    {
      src: `${process.env.PUBLIC_URL}/Susheelamam1.jpg`,
      alt: 'Image 11',
      caption: 'Audio Launch by Playback singer P.Susheela mam',
      width: 800,
      height: 600
    },
 
    {
      src: `${process.env.PUBLIC_URL}/recording.jpg`,
      alt: 'Image 11',
      caption: 'Recording session',
      width: 800,
      height: 600
    },
    {
      src: `${process.env.PUBLIC_URL}/Harrisshow.jpg`,
      alt: 'Image 11',
      caption: 'Lakshman Shruti show',
      width: 800,
      height: 600
    },
    {
      src: `${process.env.PUBLIC_URL}/reyanrecording.jpg`,
      alt: 'Image 11',
      caption: 'Album recording session',
      width: 800,
      height: 600
    },
    {
      src: `${process.env.PUBLIC_URL}/recording1.jpg`,
      alt: 'Image 11',
      caption: 'Album recording session',
      width: 800,
      height: 600
    },
    {
      src: `${process.env.PUBLIC_URL}/release.jpg`,
      alt: 'Image 11',
      caption: 'Devotional album release',
      width: 800,
      height: 600
    },
    {
      src: `${process.env.PUBLIC_URL}/susheelaaward.jpg`,
      alt: 'Image 11',
      caption: 'Devotional Album Promotion',
      width: 800,
      height: 600
    },
   
    
  ];

  return (
    <div>
      <GalleryComponent images={images} />
    </div>
  );
};

export default App;
