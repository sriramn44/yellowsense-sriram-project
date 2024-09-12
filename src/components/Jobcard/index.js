import React from 'react';
import { Link } from 'react-router-dom';

import "./jobcard.css"



const Jobcard = ({ job, isBookmarked }) => {
  const handleBookmark = (e) => {
    e.stopPropagation();
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    if (!bookmarks.find(item => item.id === job.id)) {
      bookmarks.push(job);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      alert('Job bookmarked!');
    } else {
      alert('Job already bookmarked.');
    }
  };


  return (
    <div className="jobcard-container">
      <Link to={`/jobs/${job.id}`}>
      <h3>job title : {job.title}</h3>
      
      <p>Place :{job.primary_details?.Place || 'N/A'}</p>
      <p>Salary : {job.primary_details?.Salary || 'N/A'}</p>
      <p>Phone : {job.whatsapp_no}</p>
      </Link>
      {!isBookmarked && (
        <button onClick={handleBookmark}>Bookmark</button>
      )}
    </div>
  );
};

export default Jobcard;
