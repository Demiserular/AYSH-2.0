import React from 'react';
import ReactDOM from 'react-dom/client';
import VideoCall from '../src/components/VideoCall.jsx';

// Load React and the VideoCall component
const root = ReactDOM.createRoot(document.getElementById('video-call-root'));
root.render(
  <React.StrictMode>
    <VideoCall />
  </React.StrictMode>
); 