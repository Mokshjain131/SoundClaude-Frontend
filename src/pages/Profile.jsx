import React from 'react';
import TrackCard from '../components/TrackCard';
import Footer from '../components/Footer';
import '../styles/Profile.css';

const USER_TRACKS = [
  {
    id: 1,
    title: "My First Track",
    artist: "Username",
    plays: "1K",
    duration: "3:45"
  }
];

function Profile() {
  return (
    <>
      <div className="profile-container">
        <h1 className="profile-header">Profile</h1>
        <div className="profile-content">
          <div className="profile-info">
            <div className="profile-avatar"></div>
            <div className="profile-details">
              <h2>Username</h2>
              <p>Joined 2024</p>
            </div>
          </div>
          <div className="profile-tracks">
            <h3>Your Tracks</h3>
            {USER_TRACKS.length > 0 ? (
              <div className="tracks-grid">
                {USER_TRACKS.map(track => (
                  <TrackCard key={track.id} track={track} />
                ))}
              </div>
            ) : (
              <p className="no-tracks">No tracks uploaded yet</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;