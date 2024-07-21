// // src/pages/MyVideos.js
// import React from 'react';
// import {
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBCarousel,
//   MDBCarouselItem,
//   MDBCarouselCaption
// } from 'mdb-react-ui-kit';
// import '../MyVideos.css';

// function MyVideos() {
//   return (
//     <div>
//       <h1>My Videos</h1>
//       <p>Here are some of my music performances...</p>
//       <MDBContainer>
//         <MDBRow className="gy-4"> {/* Add gap between rows */}
//           <MDBCol lg={4} md={6} className='mb-4'>
//             <div className="ratio ratio-16x9">
//               <iframe
//                 src="https://www.youtube.com/embed/ieqNGcMbZ1I"
//                 title="YouTube video"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </MDBCol>
//           <MDBCol lg={4} md={6} className='mb-4'>
//             <div className="ratio ratio-16x9">
//               <iframe
//                 src="https://www.youtube.com/embed/j2lyfIrvnZQ"
//                 title="YouTube video"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </MDBCol>
//           <MDBCol lg={4} md={6} className='mb-4'>
//             <div className="ratio ratio-16x9">
//               <iframe
//                 src="https://www.youtube.com/embed/APcBEY7ZOs8"
//                 title="YouTube video"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </MDBCol>
//           <MDBCol lg={4} md={6} className='mb-4'>
//             <div className="ratio ratio-16x9">
//               <iframe
//                 src="https://www.youtube.com/embed/CZi9x9sHpRg"
//                 title="YouTube video"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </MDBCol>
//           <MDBCol lg={4} md={6} className='mb-4'>
//             <div className="ratio ratio-16x9">
//               <iframe
//                 src="https://www.youtube.com/embed/2lDTufcn3Eg"
//                 title="YouTube video"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </MDBCol>
//           <MDBCol lg={4} md={6} className='mb-4'>
//             <div className="ratio ratio-16x9">
//               <iframe
//                 src="https://www.youtube.com/embed/kGjoxaziZKQ"
//                 title="YouTube video"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </MDBCol>
//           <MDBCol lg={4} md={6} className='mb-4'>
//             <div className="ratio ratio-16x9">
//               <iframe
//                 src="https://www.youtube.com/embed/Y9vdgI4Bks4"
//                 title="YouTube video"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </MDBCol>
//           <MDBCol lg={4} md={6} className='mb-4'>
//             <div className="ratio ratio-16x9">
//               <iframe
//                 src="https://www.youtube.com/embed/8ftq4uGUK9g"
//                 title="YouTube video"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </MDBCol>
//           <MDBCol lg={4} md={6} className='mb-4'>
//             <div className="ratio ratio-16x9">
//               <iframe
//                 src="https://www.youtube.com/embed/Aqxjjb4wyIs"
//                 title="YouTube video"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </MDBCol>
//           <MDBCol lg={4} md={6} className='mb-4'>
//             <div className="ratio ratio-16x9">
//               <iframe
//                 src="https://www.youtube.com/embed/NhuFQ1IppEk"
//                 title="YouTube video"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </MDBCol>
//           <MDBCol lg={4} md={6} className='mb-4'>
//             <div className="ratio ratio-16x9">
//               <iframe
//                 src="https://www.youtube.com/embed/2LFOaW-dK8s"
//                 title="YouTube video"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </MDBCol>
//           <MDBCol lg={4} md={6} className='mb-4'>
//             <div className="ratio ratio-16x9">
//               <iframe
//                 src="https://www.youtube.com/embed/k5Ar_qCsS50"
//                 title="YouTube video"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </MDBCol>
//           <MDBCol lg={4} md={6} className='mb-4'>
//             <div className="ratio ratio-16x9">
//               <iframe
//                 src="https://www.youtube.com/embed/ZPP1_e_wcI0"
//                 title="YouTube video"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </MDBCol>
//         </MDBRow>
//         <MDBRow>
//         <MDBCol lg={4} md={6} className='mb-4'>
//             <div className="ratio ratio-16x9">
//               <iframe
//                 src="https://www.youtube.com/embed/ZPP1_e_wcI0"
//                 title="YouTube video"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </div>
//   );
// }

// export default MyVideos;
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBModalDialog,
  MDBModalContent,
} from 'mdb-react-ui-kit';
import '../MyVideos.css';

const MyVideos = () => {
  const [modal, setModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const videoUrls = [
    'https://www.youtube.com/embed/ieqNGcMbZ1I',
    'https://www.youtube.com/embed/j2lyfIrvnZQ',
    'https://www.youtube.com/embed/APcBEY7ZOs8',
    'https://www.youtube.com/embed/CZi9x9sHpRg',
    'https://www.youtube.com/embed/2lDTufcn3Eg',
    'https://www.youtube.com/embed/kGjoxaziZKQ',
    'https://www.youtube.com/embed/Y9vdgI4Bks4',
    'https://www.youtube.com/embed/8ftq4uGUK9g',
    'https://www.youtube.com/embed/Aqxjjb4wyIs',
    'https://www.youtube.com/embed/NhuFQ1IppEk',
    'https://www.youtube.com/embed/2LFOaW-dK8s',
    'https://www.youtube.com/embed/k5Ar_qCsS50',
    'https://www.youtube.com/embed/ZPP1_e_wcI0',
  ];

  const openModal = (url) => {
    setCurrentVideo(url);
    setModal(true);
  };

  return (
    <div className="container-fluid p-0" style={{ position: 'fixed', top: 40, left: 0, right: 0, bottom: 0, overflowY: 'auto' }}>

    <MDBContainer fluid className="my-videos-container">
      <MDBRow className="g-4">
        {videoUrls.map((url, index) => (
          <MDBCol key={index} lg={4} md={6} sm={12} className="video-col">
            <div className="video-container" onClick={() => openModal(url)}>
              <iframe
                src={url}
                title={`YouTube video ${index + 1}`}
                allowFullScreen
              ></iframe>
            </div>
          </MDBCol>
        ))}
      </MDBRow>

      <MDBModal show={modal} setShow={setModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalBody>
              <div className="ratio ratio-16x9">
                <iframe
                  src={currentVideo}
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn onClick={() => setModal(false)} color="secondary">
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </MDBContainer>
    </div>
  );
};

export default MyVideos;
