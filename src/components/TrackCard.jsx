import React from 'react';
import { Play, Heart } from 'lucide-react';
import '../styles/TrackCard.css';

const TrackCard = ({ track }) => {
  return (
    <div className="track-card">
      <div className="track-card-image-container">
        <img 
          src={track.thumbnail || "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=200&fit=crop"} 
          alt={track.title} 
          className="track-card-image"
        />
        <button className="track-card-play">
          <Play className="w-6 h-6" />
        </button>
      </div>
      <div className="track-card-content">
        <div className="track-card-header">
          <div>
            <h3 className="track-card-title">{track.title}</h3>
            <p className="track-card-artist">{track.artist}</p>
          </div>
          <button className="track-card-like">
            <Heart className="w-5 h-5" />
          </button>
        </div>
        <div className="track-card-footer">
          <span>{track.plays} plays</span>
          <span>{track.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default TrackCard;