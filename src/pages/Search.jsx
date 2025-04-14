import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import '../styles/Search.css';
import Footer from '../components/Footer';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const serverUrl = 'https://soundclaude-backend.onrender.com';

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      alert('Please enter a search query');
      return;
    }

    setSearching(true);
    try {
      const response = await fetch(`${serverUrl}/search?q=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      if (data.success && data.results) {
        setResults(data.results);
      }
    } catch (error) {
      console.error('Search error:', error);
      alert('Error performing search');
    } finally {
      setSearching(false);
    }
  };

  const cleanFileName = (filename) => {
    return filename
      .replace(/%26/g, '&')
      .replace(/%20/g, ' ')
      .replace(/%5B/g, '[')
      .replace(/%5D/g, ']')
      .replace(/\.mp3$/, '')
      .replace(/^\d+-/, '')
      .replace(/\s*-\s*-\s*/g, ' - ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="search-container">
      <div className="search-header">
        <h1>Search Songs</h1>
        <p>Find songs based on mood, theme, or keywords</p>
      </div>

      <div className="search-box">
        <div className="search-input-container">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for songs..."
            className="search-input"
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        <button
          onClick={handleSearch}
          className="search-button"
          disabled={searching}
        >
          {searching ? 'Searching...' : 'Search'}
            </button>
    </div>

      {searching && (
        <div className="loading-indicator">
          <div className="loader"></div>
          <span>Searching for songs...</span>
      </div>
      )}

      <div className="results-container">
        {results.map((result, index) => (
          <div key={index} className="result-item">
            <div className="result-header">
              <h3>{cleanFileName(result.songData.filename)}</h3>
              <span className="similarity-score">
                Match: {(result.similarity * 100).toFixed(1)}%
              </span>
      </div>

            <div className="audio-player">
              <audio
                controls
                preload="metadata"
                src={`${serverUrl}/audio/${result.songData.audioFileId}`}
              >
                Your browser does not support the audio element.
              </audio>
              <a
                href={`${serverUrl}/audio/${result.songData.audioFileId}?download=true`}
                className="download-button"
                download
              >
                Download
              </a>
    </div>

            {result.songData.keywords && result.songData.keywords.length > 0 && (
              <div className="tags-section">
                <strong>Keywords:</strong>
                <div className="tags">
                  {result.songData.keywords.map((keyword, i) => (
                    <span key={i} className="tag">{keyword}</span>
                  ))}
                </div>
              </div>
            )}

            {result.songData.ddex_moods && result.songData.ddex_moods.length > 0 && (
              <div className="tags-section">
                <strong>Moods:</strong>
                <div className="tags">
                  {result.songData.ddex_moods.map((mood, i) => (
                    <span key={i} className="tag mood-tag">{mood}</span>
                  ))}
                </div>
              </div>
            )}

            {result.songData.summary && (
              <div className="summary-section">
                <strong>Summary:</strong>
                <p>{result.songData.summary}</p>
              </div>
            )}
          </div>
        ))}

        {results.length === 0 && !searching && searchQuery && (
          <div className="no-results">
            No results found for "{searchQuery}"
          </div>
        )}
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default Search;