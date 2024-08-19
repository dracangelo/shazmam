// App.js
import React, { useState } from 'react';
import axios from 'axios';
import VoiceInput from '../src/components/VoiceInput';
import SearchBar from '../src/components/./SearchBar';
import LyricsResult from '../src/components/./LyricsResult';

const App = () => {
  const [lyrics, setLyrics] = useState('');
  const [error, setError] = useState('');

  const searchLyrics = async (query) => {
    try {
      const response = await axios.get(`https://api.lyrics.ovh/v1/artist/title`); //api
      setLyrics(response.data.lyrics);
    } catch (err) {
      setError('Lyrics not found');
    }
  };

  const handleVoiceInput = (transcript) => {
    searchLyrics(transcript); // Search lyrics based on voice transcript
  };

  return (
    <div className="App">
      <h1>Lyrics Search</h1>
      <SearchBar onSearch={searchLyrics} />
      <VoiceInput onVoiceInput={handleVoiceInput} />
      <LyricsResult lyrics={lyrics} error={error} />
    </div>
  );
};

export default App;
