import React from 'react';

const LyricsResult = ({ lyrics, error }) => {
  return (
    <div>
      {error && <p>{error}</p>}
      {lyrics && <pre>{lyrics}</pre>}
    </div>
  );
};

export default LyricsResult;
