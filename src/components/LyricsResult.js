import React from 'react';

const LyricsResult = ({ lyrics }) => {
  return (
    <div className="lyrics-result">
      {lyrics ? <pre>{lyrics}</pre> : <p>No lyrics to display.</p>}
    </div>
  );
};

export default LyricsResult;
