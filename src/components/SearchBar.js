import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'; // Assuming this is your existing search bar component
import LyricsResult from './LyricsResult'; // Component for displaying lyrics
import { ClipLoader } from 'react-spinners'; // For loading spinner

const SearchLyrics = () => {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to handle lyrics search
  const searchLyrics = async (query) => {
    // Resetting error and lyrics before making a new search
    setError('');
    setLyrics('');
    setLoading(true); // Set loading state to true

    try {
      const response = await axios.get(
        `https://api.lyrics.ovh/v1/artist/title`, // Replace with actual API URL and parameters
      );

      // Check if lyrics are found
      if (response.data.lyrics) {
        setLyrics(response.data.lyrics);
      } else {
        setError('Lyrics not found. Please try different search terms.');
      }
    } catch (err) {
      // Handle different types of errors
      if (err.response && err.response.status === 404) {
        setError('Lyrics not found for this query.');
      } else {
        setError('An unexpected error occurred. Please try again later.');
      }
    } finally {
      setLoading(false); // Stop loading when the request is complete
    }
  };

  return (
    <div className="search-lyrics">
      <h1>Lyrics Search</h1>
      <SearchBar onSearch={searchLyrics} />
      {loading ? (
        <div className="loading-spinner">
          <ClipLoader color="#000" loading={loading} size={50} />
        </div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <LyricsResult lyrics={lyrics} />
      )}
    </div>
  );
};

export default SearchLyrics;
