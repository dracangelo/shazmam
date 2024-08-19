import React, { useState } from 'react';

const VoiceInput = ({ onVoiceInput }) => {
  const [transcript, setTranscript] = useState('');

  const handleVoiceRecognition = () => {
    // Implement your voice recognition logic here
    // For demonstration, let's simulate it:
    const simulatedTranscript = 'sample lyrics or song title';
    setTranscript(simulatedTranscript);
    onVoiceInput(simulatedTranscript);
  };

  return (
    <div>
      <button onClick={handleVoiceRecognition}>Start Voice Input</button>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default VoiceInput;
