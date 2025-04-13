import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Player from './components/Player';
import Home from './pages/Home';
import Search from './pages/Search';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <div className="min-h-screen" style={{ backgroundColor: 'var(--color-gray-50)' }}>
        <Navbar />
        <main className="main container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
        <Player />
      </div>
    </Router>
  );
}

export default App;