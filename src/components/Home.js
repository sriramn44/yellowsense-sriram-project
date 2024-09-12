import React from 'react';
import { Link } from 'react-router-dom';

import "./Home.css"

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Job App</h1>
      <nav>
        <ul className='sub-container'>
          <li><Link to="/jobs"><button type="button" class="job-button">Jobs</button></Link></li>
          <li><Link to="/bookmarks"><button type="button" class="job-button">Bookmarks</button></Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;