import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./index.css"

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='divcontainer'>
      <button onClick={() => navigate('/')} className='nav-container'>Home</button>
      <nav>
        <Link to="/jobs"><button className='nav-container'>Jobs</button></Link>  
        <Link to="/bookmarks"><button className='nav-container'>Bookmarks</button></Link>
      </nav>
    </header>
  );
};

export default Header;
