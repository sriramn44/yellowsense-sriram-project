import React, { useState, useEffect } from 'react';
import "./bookmark.css"

const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        setBookmarks(savedBookmarks);
    }, []);

    const removeBookmark = (id) => {
        const updatedBookmarks = bookmarks.filter(job => job.id !== id);
        setBookmarks(updatedBookmarks);
        localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    };

    return (
        <div className="bookmarks-container">
            <h2>Bookmarked Jobs</h2>
            {bookmarks.length > 0 ? (
                <ul>
                    {bookmarks.map(job => (
                        <li key={job.id} className="bookmark-item">
                            <div>
                                <h3>{job.title}</h3>
                                <p>Place: {job.primary_details.Place}</p>
                                <p>Salary: {job.primary_details.Salary}</p>
                                <p>Experience: {job.primary_details.Experience}</p>
                            </div>
                            <button onClick={() => removeBookmark(job.id)}>Remove Bookmark</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No jobs bookmarked yet.</p>
            )}
        </div>
    );
};

export default Bookmarks;
