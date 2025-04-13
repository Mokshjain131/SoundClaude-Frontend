import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-section">
            <h3>SoundWave</h3>
            <p>The next generation of music streaming. Share your sounds, discover new artists.</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Youtube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>For Listeners</h4>
            <ul>
              <li><Link to="/discover">Discover</Link></li>
              <li><Link to="/playlists">Playlists</Link></li>
              <li><Link to="/charts">Charts</Link></li>
              <li><Link to="/genres">Genres</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>For Artists</h4>
            <ul>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/creators">For Creators</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/promote">Promotion</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/legal">Legal</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SoundWave. All rights reserved.</p>
          <div className="language-selector">
            <select>
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
