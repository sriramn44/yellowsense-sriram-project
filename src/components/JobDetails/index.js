import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {ThreeDots} from 'react-loader-spinner'

import "./jobdetails.css"


const JobDetails = () => {
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);         
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);   

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('https://testapi.getlokalapp.com/common/jobs?page=1');
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
        const data = await response.json();
        setJobs(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const job = jobs.find((job) => job.id === Number(id));

  if (loading) {
    return <div className="loader-container jobdetails-container" data-testid="loader">
      <ThreeDots type="ThreeDots" color="black" height="50" width="50" />
    </div>
  }

  if (error) {
    return <p className='jobdetails-container'>Error fetching jobs: {error}</p>; 
  }


  if (!job) {
    return <p className='jobdetails-container'>Job not found</p>;
  }

    const formatDate = (dateString) => {
      if (!dateString) return 'N/A'; 
      const date = new Date(dateString);
      return isNaN(date.getTime()) ? 'N/A' : date.toLocaleString(); 
    };

  return (
    <div className='jobdetails-container'>
      <h2>{job.title}</h2>
      <p>Place: {job.primary_details.Place || 'N/A'}</p>
      <p>Salary: {job.primary_details.Salary || 'N/A'}</p>
      <p>Job Type: {job.primary_details.Job_Type || 'N/A'}</p>
      <p>Experience: {job.primary_details.Experience || 'N/A'}</p>
      <p>Qualification: {job.primary_details.Qualification || 'N/A'}</p>
      <p>Phone : {job.whatsapp_no || 'N/A'}</p>
      <p>company_name : {job.company_name || 'N/A'}</p>
      <p>job_role : {job.job_role || 'N/A'}</p>
      <p>other_details : {job.other_details || 'N/A'}</p>
      <p>updated_on : {formatDate(job.updated_on)}</p>
      <p>expire_on : {formatDate(job.expire_on)}</p>
    </div>
  );
};

export default JobDetails;
