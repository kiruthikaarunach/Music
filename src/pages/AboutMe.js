// import React from 'react';
// import { Typography, Box, Grid } from '@mui/material';

// const AboutMe = () => {
//   return (
//     <Box p={2}>
//       <Typography variant="h4" gutterBottom>
//         About My Gurus
//       </Typography>

//       {/* First Grid */}
//       <Grid container spacing={0} style={{ marginTop: '0px', marginBottom: '0px'}}>
//         {/* Left grid for photos */}
//         <Grid item xs={12} md={6}>
//           {/* First row */}
//           <Grid container spacing={0} style={{ marginTop: '0px', marginBottom: '0px'}}>
//             <Grid item xs={12}>
//               <img
//                 src={`${process.env.PUBLIC_URL}/Shyamalamam.jpg`}
//                 alt="Guru 1"
//                 style={{ width: '100%', marginBottom: '0px' }}
//               />
//             </Grid>
//           </Grid>
//           {/* Second row */}
//           <Grid container spacing={0} style={{ height: '40%', marginTop: '0px', marginBottom: '0px' }}>
//             <Grid item xs={6} style={{ height: '100%' }}>
//               <img
//                 src={`${process.env.PUBLIC_URL}/Guru.jpg`}
//                 alt="Guru 2"
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//               />
//             </Grid>
           
//           </Grid>
//         </Grid>

//         {/* Right grid for descriptions */}
//         <Grid item xs={6} md={6} container alignItems="center" style={{ marginTop: '0px', marginBottom: '0px'  }}>
//           <Typography variant="body1" gutterBottom style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center' ,  marginBottom: '0px'}}>
//             Kiruthika Arunachalam is currently learning  carnatic music from Dr.Shyamala Vinod from past 8 years and had been always  learning music from her childhood .
//           </Typography>
//         </Grid>
//       </Grid>

//       {/* Second Grid */}
//       <Grid container spacing={0} style={{ marginTop: '0px' }}>
//         {/* Left grid for descriptions */}
//         <Grid item xs={12} md={6} container alignItems="center">
//           <Typography variant="body1" gutterBottom style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center' }}>
//             She is part of Music Director James Vasanthan's Tamizhosai team and has performed in many shows in India and Canada in his choir
//           </Typography>
//         </Grid>

//         {/* Right grid for photos */}
//         <Grid item xs={12} md={6}>
//           {/* First row */}
//           <Grid container spacing={0}>
//             <Grid item xs={12}>
//               <img
//                 src={`${process.env.PUBLIC_URL}/Tamizhosai.jpg`}
//                 alt="Guru 1"
//                 style={{ width: '100%', marginBottom: '0px' }}
//               />
//             </Grid>
//           </Grid>
//           {/* Second row */}
//           <Grid container spacing={0} style={{ height: '40%' }}>
//             <Grid item xs={6} style={{ height: '100%' }}>
//               <img
//                 src={`${process.env.PUBLIC_URL}/JamesVasanthan.jpg`}
//                 alt="Guru 2"
//                 style={{ width: '70%', height: '100%', objectFit: 'cover' , marginTop: '0px', marginBottom: '0px'}}
//               />
//             </Grid>
//             <Grid item xs={6} style={{ height: '100%' }}>
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src="https://www.youtube.com/embed/wZZn1_z1WXU"
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 style={{ height: '100%' }}
//               ></iframe>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>

//       {/* First Grid */}
//       <Grid container spacing={0}>
//         {/* Left grid for photos */}
//         <Grid item xs={6} md={6}>
//           {/* First row */}
//           <Grid container spacing={0}>
//             <Grid item xs={12}>
//               <img
//                 src={`${process.env.PUBLIC_URL}/Vandana-Srinivasan.jpg`}
//                 alt="Guru 1"
//                 style={{ width: '70%', marginBottom: '10px' }}
//               />
//             </Grid>
//           </Grid>
         
//         </Grid>

//         {/* Right grid for descriptions */}
//         <Grid item xs={12} md={6} container alignItems="center">
//           <Typography variant="body1" gutterBottom style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center' }}>
//             She  is  learning  semi classical music  from famous playback singer Vandana Srinivasan . 
//           </Typography>
//         </Grid>
//       </Grid>

//       {/* Second Grid */}
//       <Grid container spacing={1} style={{ marginTop: '20px' }}>
//         {/* Left grid for descriptions */}
//         <Grid item xs={12} md={6} container alignItems="center">
//           <Typography variant="body1" gutterBottom style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center' }}>
//            She learns film music from  famous Vijay TV Super Singer and Jaya Super Singer Winner and Playback Singer  Keshav Vinod
//           </Typography>
//         </Grid>

//         {/* Right grid for photos */}
//         <Grid item xs={12} md={6}>
         
//            {/* Right grid for photos */}
//         <Grid item xs={12} md={6}>
//           {/* Second row */}
//           <Grid container spacing={1} style={{ height: '40%' }}>
//             <Grid item xs={12} style={{ height: '100%' }}>
//               <img
//                 src={`${process.env.PUBLIC_URL}/keshav-vinod.jpg`}
//                 alt="Guru 2"
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//               />
//             </Grid>
//           </Grid>
//         </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default AboutMe;
import React from 'react';
import { Typography, Box } from '@mui/material';
import '../AboutMe.css'; // Import CSS for styling

const AboutMe = () => {
  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
      <i className="fas fa-music"></i>About Me and my Gurus<i className="fas fa-heart"></i>
      </Typography>

       {/* Fourth section */}
       <div className="guru-section">
          {/* Left column for descriptions */}
          <div className="guru-column">
          <div className="right-column">
          <i className="fas fa-music"></i>
              {/* Kiruthika Arunachalam is a Software Professional with 14 years IT experience with Fortune comapnies and  is currently a Full Stack Java Consultant to Sephora. Music has always been her passion and another profession right from her childhood.She values music to the core and respects Music equivalent to God and loves to teach for students with great respect to music.She learns from eminent Gurus and is very humbled and proud to have such profound Gurus.She teaches South Indian Carnatic music starting from basic lessons  like Sarali ,Janta, Dhattu varisais and Alankaras in 72 melakhartas raga and many janya ragas.She teaches Slokas and Bhajans which is raga based in Sanksrit, Hindi, Tamil and  Telugu. She also teaches Geethams ,Kritis and Varnams for advanced levels.She loves to teach Indian film music as well <i className="fas fa-heart"></i> */}
  
    Kiruthika Arunachalam is a Software Professional with 15+ years of IT experience with Fortune companies with a Master Degree in Computer Science and is currently a Full Stack Java Consultant to Sephora.
    
     Music has always been her passion and another profession right from her childhood. She values music deeply and respects it as equivalent to God, loving to teach students with great reverence. 
  She learns from eminent Gurus and is very humbled and proud to have such profound mentors. Kiruthika teaches South Indian Carnatic music starting from basic lessons like Sarali, Janta, Dhattu Varisais, and Alankaras in 72 Melakarta ragas and numerous Janya ragas. She also teaches Slokas and Bhajans, which are raga-based in Sanskrit, Hindi, Tamil, and Telugu.
  In addition, she teaches Geethams, Kritis, and Varnams for advanced levels and loves to teach Indian film music as well.
 She  has performed on TV when she was residing in India. She has done stage performances with play back singers and multiple bands  and was part of Lakshman Shruti for sometime.She  used to do play back recordings for budding music directors for devotional albums and +1 tracks.
 She is also a mother of 2 beautiful kids.
</div>

          </div>
       

          {/* Right column for photos */}
          <div className="guru-column">
          <div className="left-column">
            <img
              src={`${process.env.PUBLIC_URL}/Linkedin-pic.jpg`}
              alt="Guru 2"
              className="guru-image-horiz-vandana"
            />
          </div>
          </div>
        </div>

      {/* Container for the entire layout */}
      <div className="about-gurus-container">
        {/* First section */}
        <div className="guru-section">
          {/* Left column for photos */}
          <div className="guru-column">
          <div className="left-column">
            <img
              src={`${process.env.PUBLIC_URL}/Shyamalamam.jpg`}
              alt="Guru 1"
              className="guru-image-horiz-mam"
            />
            <img
              src={`${process.env.PUBLIC_URL}/Guru.jpg`}
              alt="Guru 2"
              className="guru-image-1-mam"
            />
             <img
              src={`${process.env.PUBLIC_URL}/Guru-award.jpg`}
              alt="Guru 3"
              className="guru-image-1-mam"
            />
              <img
              src={`${process.env.PUBLIC_URL}/SRSMSuperSingers.jpg`}
              alt="Guru 3"
              className="guru-image-1-mam-group"
            />
            
          </div>
          </div>

          {/* Right column for descriptions */}
          <div className="guru-column">
          <div className="right-column">
            <i className="fas fa-music"></i>  Kiruthika Arunachalam is currently learning carnatic music from Dr.Shyamala Vinod from past 8 years and had been always learning music from her childhood. Dr Shyamala gives voice training for leading Play back singers and Super Singers.<i className="fas fa-heart"></i>
            </div>
          </div>
        </div>

        {/* Second section */}
        <div className="guru-section">
          {/* Left column for descriptions */}
          <div className="guru-column">
          <div className="right-column">
          <i className="fas fa-music"></i>
              She is part of Music Director James Vasanthan's Tamizhosai team and has performed in many shows in India and Canada in his choir.Tamizhosai
              is a A 30-voice Choral Ensemble which sings ancient Tamil poems from Sangam Literature to convey the classical literature to the present generation through popular music.<i className="fas fa-heart"></i>
          </div>
          </div>

          {/* Right column for photos and video */}
          <div className="guru-column">
          <div className="left-column">
              <img
                src={`${process.env.PUBLIC_URL}/Tamizhosai.jpg`}
                alt="Guru 1"
                className="guru-image-horiz-jv"
              />
             <img
                src={`${process.env.PUBLIC_URL}/JamesVasanthan-cropped.jpg`}
                alt="Guru 2"
                className="guru-image-1-mam"
              />
          
            {/* YouTube video */}
            <iframe 
                width="50%"
                height="50%"
                src="https://www.youtube.com/embed/wZZn1_z1WXU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ height: '45%' }}
              ></iframe>
            </div>
            </div>
        </div>

        {/* Third section */}
        <div className="guru-section">
          {/* Left column for photos */}
          <div className="guru-column">
          <div className="left-column">
            <img
              src={`${process.env.PUBLIC_URL}/Vandana-Srinivasan.jpg`}
              alt="Guru 1"
              className="guru-image-horiz-vandana"
            />
            </div>
          </div>

          {/* Right column for descriptions */}
          <div className="guru-column">
          <div className="right-column">
          <i className="fas fa-music"></i>
              She is learning semi classical music from famous playback singer Vandana Srinivasan who is an Indian playback singer, working mainly for the South Indian film industry especially in Tamil, Telugu, and Kannada.<i className="fas fa-heart"></i>
            </div>
          </div>
        </div>

        {/* Fourth section */}
        <div className="guru-section">
          {/* Left column for descriptions */}
          <div className="guru-column">
          <div className="right-column">
          <i className="fas fa-music"></i>
              She learns film music from famous Vijay TV Super Singer and Jaya Super Singer Winner and Playback Singer Keshav Vinod.<i className="fas fa-heart"></i>
          </div>
          </div>

          {/* Right column for photos */}
          <div className="guru-column">
          <div className="left-column">
            <img
              src={`${process.env.PUBLIC_URL}/keshav-vinod.jpg`}
              alt="Guru 2"
              className="guru-image-horiz-vandana"
            />
          </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default AboutMe;

