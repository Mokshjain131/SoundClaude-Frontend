import React from 'react';
import { Music2, Github, Twitter, Linkedin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Music2 className="footer-logo" />
          <span className="footer-brand-name">SoundWave</span>
        </div>
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/search">Search</a></li>
              <li><a href="/upload">Upload</a></li>
              <li><a href="/profile">Profile</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 SoundWave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

