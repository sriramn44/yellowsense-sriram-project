import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Job from './components/Job';
import Bookmark from './components/Bookmark';
import NotFound from './components/NotFound'
import JobDetails from './components/JobDetails';
import Header from './components/Header'

import "./App.css"


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/jobs" element={<Job />} />
          <Route path="/bookmarks" element={<Bookmark />}/>
          <Route path="/jobs/:id" element={<JobDetails />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
          
      </div>
    </Router>
  );
};

export default App;
