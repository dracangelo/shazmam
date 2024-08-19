import React, { useState } from 'react';
import axios from 'axios';
import VoiceInput from './components/VoiceInput';
import SearchBar from './components/SearchBar';
import LyricsResult from './components/LyricsResult';

const App = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to search lyrics using the Genius API
  const searchLyrics = async (query) => {
    setError('');
    setResults([]);
    setLoading(true);

    try {
      const response = await axios.get('https://api.genius.com/search', {
        params: {
          q: query, // The search query (song title, artist, or lyrics)
        },
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_GENIUS_ACCESS_TOKEN}`, // Access token from environment variable
        },
      });

      if (response.data.response.hits.length > 0) {
        setResults(response.data.response.hits);
      } else {
        setError('No results found. Please try different search terms.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleVoiceInput = (transcript) => {
    searchLyrics(transcript); // Search lyrics based on voice transcript
  };

  return (
    <div className="App">
      <h1>Genius Lyrics Search</h1>
      <SearchBar onSearch={searchLyrics} />
      <VoiceInput onVoiceInput={handleVoiceInput} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <LyricsResult results={results} />
      )}
    </div>
  );
};

export default App;
