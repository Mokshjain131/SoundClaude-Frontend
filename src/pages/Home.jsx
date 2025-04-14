import React from 'react';
import { Upload as UploadIcon, Search as SearchIcon } from 'lucide-react';
import Footer from '../components/Footer';
import '../styles/Home.css';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <div className="home">

      <section className="hero-section">
        <h1>Welcome to SoundWave</h1>
        <p className="hero-description">
          Your ultimate platform for music sharing and discovery. Upload, share, and explore music like never before.
        </p>
      </section>

      <section className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <UploadIcon className="feature-icon" />
            <h3>Easy Upload</h3>
            <p>Share your music with the world in just a few clicks. Support for high-quality audio formats.</p>
          </div>

          <div className="feature-card">
            <SearchIcon className="feature-icon" />
            <h3>Discover Music</h3>
            <p>Explore new tracks, artists, and genres through our intelligent recommendation system.</p>
          </div>
          </div>
      </section>

      <section className="about-section">
        <h2>About SoundWave</h2>
        <p>
          SoundWave is a community-driven music platform designed for both artists and listeners.
          Whether you're a musician looking to share your creations or a music enthusiast seeking
          new sounds, SoundWave provides the perfect space for musical discovery and sharing.
        </p>
      </section>

        <section className="getting-started-section">
          <h2>Getting Started</h2>
          <div className="steps-container">
            <div className="step">
              <span className="step-number">1</span>
              <h3>Create Account</h3>
              <p>Sign up for free and join our music community.</p>
          </div>
          <div className="step">
              <span className="step-number">2</span>
              <h3>Upload Music</h3>
              <p>Share your tracks with high-quality audio support.</p>
          </div>
            <div className="step">
              <span className="step-number">3</span>
              <h3>Discover</h3>
              <p>Explore and enjoy music from various artists.</p>
        </div>
    </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;