import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Upload from './pages/Upload';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Auth from './pages/Auth';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;