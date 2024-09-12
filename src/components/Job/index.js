// src/components/Jobs.js
import React, { useState, useEffect } from 'react';
import {ThreeDots} from 'react-loader-spinner'

import Jobcard from '../Jobcard';
import "./job.css"

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const loadJobs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://testapi.getlokalapp.com/common/jobs?page=${page}`);
      const data = await response.json();
      console.log(data)
      console.log(data.results)
      setJobs(prevJobs => [...prevJobs, ...data.results]);
    } catch (err) {
      setError('Error fetching jobs');
    } finally {
      setIsLoading(false);
    }
  }; 

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !isLoading) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    loadJobs();
  }, [page]);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);
  

  return (
    <div className="job-container">
      {jobs.map(job => (
        <Jobcard key={job.id} job={job} />
      ))}
      {isLoading && <div className="loader-container" data-testid="loader">
      <ThreeDots type="ThreeDots" color="black" height="50" width="50" />
    </div>}
      {error && <p>{error}</p>}
      {!isLoading && jobs.length === 0 && <p>No jobs available.</p>}
    </div>
  );
};

export default Job;
