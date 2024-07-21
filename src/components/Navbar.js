// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">About Me</Link></li>
        {/* <li><Link to="/videos">My Videos</Link></li> */}
        <li><Link to="/students">My Students</Link></li>
        <li><Link to="/class-timings">Class Timings</Link></li>

        <li><Link to="/home">Home</Link></li>
        <li><Link to="/youtube-videos">YouTubeRow</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
