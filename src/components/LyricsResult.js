import React from 'react';

const LyricsResult = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.result.id}>
          <h3>{result.result.full_title}</h3>
          <p>Artist: {result.result.primary_artist.name}</p>
          <a href={result.result.url} target="_blank" rel="noopener noreferrer">
            View Lyrics on Genius
          </a>
        </div>
      ))}
    </div>
  );
};

export default LyricsResult;
