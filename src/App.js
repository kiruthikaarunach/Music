
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { AppBar, Tabs, Tab, Box, Typography, Grid } from '@mui/material';
// import { Helmet } from 'react-helmet';
// import AboutMe from './pages/AboutMe';
// import MediaDesciptionLayout from './pages/MediaDescriptionLayout';
// import ResponsiveGallery from './pages/ResponsiveGallery';
// import MyGallery from './pages/MyGallery';
// import ClassTimings from './pages/ClassTimings';
// import YouTubeRow from './pages/YouTubeRow';
// import './App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import EditButton from './pages/EditButton';

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
//         <Box p={1}>
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

//   const getTabTitle = () => {
//     switch (value) {
//       case 0:
//         return "About Me";
//       case 1:
//         return "My Gallery";
//       case 2:
//         return "Class Timings";
//       case 3:
//         return "YouTube Videos";
//       default:
//         return "Kiruthika Arunachalam";
//     }
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Helmet>
//           <title>{getTabTitle()}</title>
//         </Helmet>
//         <AppBar position="static" className="appBar">
//           <Grid container justifyContent="center">
//             <Grid item xs={12}>
//               <Tabs
//                 value={value}
//                 onChange={handleChange}
//                 aria-label="nav tabs"
//                 variant="scrollable"
//                 scrollButtons="auto"
//                 className="tabs"
//               >
//                 <Tab icon={<i className="fas fa-chalkboard-teacher"></i>} label="About Me" {...a11yProps(0)} />
//                 <Tab icon={<i className="fas fa-user"></i>} label="My Gallery" {...a11yProps(1)} />
//                 <Tab icon={<i className="fas fa-clock"></i>} label="Class Timings" {...a11yProps(2)} />
//                 <Tab icon={<i className="fas fa-youtube"></i>} label="YouTube Videos" {...a11yProps(3)} />
//               </Tabs>
//             </Grid>
//           </Grid>
//         </AppBar>
//         <TabPanel value={value} index={0}>
//           <AboutMe />
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//           <MyGallery />
//         </TabPanel>
//         <TabPanel value={value} index={2}>
//           <ClassTimings />
//         </TabPanel>
//         <TabPanel value={value} index={3}>
//           <YouTubeRow />
//         </TabPanel>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import { AppBar, Tabs, Tab, Box, Typography, Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import AboutMe from './pages/AboutMe';
import MediaDesciptionLayout from './pages/MediaDescriptionLayout';
import ResponsiveGallery from './pages/ResponsiveGallery';
import MyGallery from './pages/MyGallery';
import ClassTimings from './pages/ClassTimings';
import YouTubeRow from './pages/YouTubeRow';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import EditButton from './pages/EditButton';

// ReactGA.initialize('G-42VXKFR85E');
ReactGA.initialize('G-42VXKFR85E', { debug: true });


function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
}

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
        <Box p={1}>
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

  const getTabTitle = () => {
    switch (value) {
      case 0:
        return "About Me";
      case 1:
        return "My Gallery";
      case 2:
        return "Class Timings";
      case 3:
        return "YouTube Videos";
      default:
        return "Kiruthika Arunachalam";
    }
  };

  usePageViews();

  return (
    <div className="App">
      <Helmet>
        <title>{getTabTitle()}</title>
      </Helmet>
      <AppBar position="static" className="appBar">
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="nav tabs"
              variant="scrollable"
              scrollButtons="auto"
              className="tabs"
            >
              <Tab icon={<i className="fas fa-chalkboard-teacher"></i>} label="About Me" {...a11yProps(0)} />
              <Tab icon={<i className="fas fa-user"></i>} label="My Gallery" {...a11yProps(1)} />
              <Tab icon={<i className="fas fa-clock"></i>} label="Class Timings" {...a11yProps(2)} />
              <Tab icon={<i className="fas fa-youtube"></i>} label="YouTube Videos" {...a11yProps(3)} />
            </Tabs>
          </Grid>
        </Grid>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AboutMe />
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
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
