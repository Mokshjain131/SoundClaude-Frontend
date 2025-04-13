import React from 'react';
import '@/styles/WaveForm.css';

const WaveForm = ({ waveformData, progress }) => {
  if (!waveformData || waveformData.length === 0) {
    return null;
  }
  
  return (
    <div className="waveform">
      {waveformData.map((value, index) => {
        const barHeight = Math.max(value * 100, 3); // Ensure minimum height
        const isPlayed = (index / waveformData.length) < progress;
        
        return (
          <div 
            key={index} 
            className={`waveform-bar ${isPlayed ? 'played' : ''}`}
            style={{ height: `${barHeight}%` }}
          ></div>
        );
      })}
    </div>
  );
};

export default WaveForm;
