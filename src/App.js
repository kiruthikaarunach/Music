// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AppBar, Tabs, Tab, Box, Typography, Grid } from '@mui/material';
// import AboutMe from './pages/AboutMe';
// import ClassTimings from './pages/ClassTimings';
// import YouTubeRow from './pages/YouTubeRow';
// import './App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`tabpanel-${index}`}
//       aria-labelledby={`tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={1}> {/* Reduced padding from p={3} to p={1} */}
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index) {
//   return {
//     id: `tab-${index}`,
//     'aria-controls': `tabpanel-${index}`,
//   };
// }

// function App() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <AppBar position="static" className="appBar">
//           <Grid container justifyContent="center">
//             <Grid item xs={12} md={10}>
//               <Tabs value={value} onChange={handleChange} aria-label="nav tabs" centered>
//                 <Tab icon={<i className="fas fa-user"></i>} label="About Me" {...a11yProps(0)} />
//                 <Tab icon={<i className="fas fa-clock"></i>} label="Class Timings" {...a11yProps(1)} />
//                 <Tab icon={<i className="fas fa-youtube"></i>} label="YouTube Videos" {...a11yProps(2)} />
//               </Tabs>
//             </Grid>
//           </Grid>
//         </AppBar>
//         <TabPanel value={value} index={0}>
//           <AboutMe />
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//           <ClassTimings />
//         </TabPanel>
//         <TabPanel value={value} index={2}>
//           <YouTubeRow />
//         </TabPanel>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppBar, Tabs, Tab, Box, Typography, Grid } from '@mui/material';
import AboutMe from './pages/AboutMe'; // Import AboutMe component
import MediaDesciptionLayout from './pages/MediaDescriptionLayout'; // Import AboutMe component

import MyGallery from './pages/MyGallery';
import ClassTimings from './pages/ClassTimings';
import YouTubeRow from './pages/YouTubeRow';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={1}> {/* Reduced padding from p={3} to p={1} */}
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <div className="App">
        <AppBar position="static" className="appBar">
          <Grid container justifyContent="center">
            <Grid item xs={12} md={10}>
              <Tabs value={value} onChange={handleChange} aria-label="nav tabs" centered>
                <Tab icon={<i className="fas fa-chalkboard-teacher"></i>} label="AboutMe" {...a11yProps(0)} />
                <Tab icon={<i className="fas fa-user"></i>} label="My Gallery" {...a11yProps(1)} />
                <Tab icon={<i className="fas fa-clock"></i>} label="Class Timings" {...a11yProps(2)} />
                <Tab icon={<i className="fas fa-youtube"></i>} label="YouTube Videos" {...a11yProps(3)} />
              </Tabs>
            </Grid>
          </Grid>
        </AppBar>
        <TabPanel value={value} index={0}>
          <AboutMe />
          {/* <MediaDesciptionLayout/> */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MyGallery />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ClassTimings />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <YouTubeRow />
        </TabPanel>
      </div>
    </Router>
  );
}

export default App;
