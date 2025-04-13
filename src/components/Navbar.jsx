import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music2, Search, Upload, User } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <Music2 className="nav-logo-icon" />
            <span className="nav-logo-text">SoundWave</span>
          </Link>
          
          <div className="nav-links">
            <Link 
              to="/search" 
              className={`nav-link ${location.pathname === '/search' ? 'active' : ''}`}
            >
              <Search className="nav-link-icon" />
              <span>Search</span>
            </Link>
            
            <Link 
              to="/upload" 
              className={`nav-link ${location.pathname === '/upload' ? 'active' : ''}`}
            >
              <Upload className="nav-link-icon" />
              <span>Upload</span>
            </Link>
            
            <Link 
              to="/profile" 
              className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}
            >
              <User className="nav-link-icon" />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;