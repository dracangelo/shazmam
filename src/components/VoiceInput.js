import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceInput = ({ onVoiceInput }) => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Your browser does not support speech recognition.</span>;
  }

  const handleStartListening = () => {
    resetTranscript();
    SpeechRecognition.startListening();
  };

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
    onVoiceInput(transcript); // Send the transcript to the parent component
  };

  return (
    <div>
      <button onClick={handleStartListening}>
        {listening ? "Listening..." : "Start Listening"}
      </button>
      <button onClick={handleStopListening}>Stop Listening</button>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceInput;
