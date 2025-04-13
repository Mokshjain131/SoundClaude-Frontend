import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = ({ initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);
  const [isExpanded, setIsExpanded] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const searchRef = useRef(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Close suggestions when clicking outside
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
        setIsExpanded(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    // Show recent searches immediately when focused and query is empty
    if (isExpanded && query === '') {
      setSuggestions([
        { type: 'recent', text: 'electronic music' },
        { type: 'recent', text: 'piano ambient' },
        { type: 'recent', text: 'drum and bass' }
      ]);
      setShowSuggestions(true);
      return;
    }
    
    // Only fetch suggestions if query has minimum length
    if (query.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    
    const fetchSuggestions = async () => {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Mock data
      const mockSuggestions = [
        { type: 'track', text: query + ' remix', id: 1 },
        { type: 'artist', text: 'DJ ' + query, id: 2 },
        { type: 'genre', text: query + ' beats', id: 3 },
        { type: 'playlist', text: 'Best of ' + query, id: 4 }
      ];
      
      setSuggestions(mockSuggestions);
      setShowSuggestions(true);
      setIsLoading(false);
    };
    
    // Debounce search
    const timeoutId = setTimeout(() => {
      fetchSuggestions();
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [query, isExpanded]);
  
  const handleFocus = () => {
    setIsExpanded(true);
    if (query === '') {
      setShowSuggestions(true);
    }
  };
  
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // Close suggestions
      setShowSuggestions(false);
      
      // Navigate to search page with query
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };
  
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.text);
    setShowSuggestions(false);
    navigate(`/search?q=${encodeURIComponent(suggestion.text)}`);
  };
  
  const clearSearch = () => {
    setQuery('');
    setShowSuggestions(false);
  };
  
  const getSuggestionIcon = (type) => {
    switch (type) {
      case 'recent':
        return <i className="fas fa-history"></i>;
      case 'track':
        return <i className="fas fa-music"></i>;
      case 'artist':
        return <i className="fas fa-user"></i>;
      case 'genre':
        return <i className="fas fa-tag"></i>;
      case 'playlist':
        return <i className="fas fa-list"></i>;
      default:
        return <i className="fas fa-search"></i>;
    }
  };

  return (
    <div 
      className={`search-bar-wrapper ${isExpanded ? 'expanded' : ''}`}
      ref={searchRef}
    >
      <form onSubmit={handleSearch} className="search-bar">
        <button type="submit" className="search-icon">
          <i className="fas fa-search"></i>
        </button>
        
        <input
          type="text"
          placeholder="Search for tracks, artists, or playlists"
          value={query}
          onChange={handleChange}
          onFocus={handleFocus}
          aria-label="Search"
        />
        
        {query && (
          <button 
            type="button" 
            className="clear-search-btn"
            onClick={clearSearch}
            aria-label="Clear search"
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </form>
      
      {showSuggestions && (
        <div className="search-suggestions">
          {isLoading ? (
            <div className="suggestion-loading">
              <span className="loading-spinner"></span>
              <span>Searching...</span>
            </div>
          ) : (
            <>
              {suggestions.length > 0 ? (
                <ul>
                  {suggestions.map((suggestion, index) => (
                    <li 
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <div className="suggestion-icon">
                        {getSuggestionIcon(suggestion.type)}
                      </div>
                      <span className="suggestion-text">{suggestion.text}</span>
                      {suggestion.type === 'recent' && (
                        <button 
                          className="remove-suggestion"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Remove from recent searches logic
                          }}
                          aria-label="Remove from history"
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                query.length >= 2 && (
                  <div className="no-suggestions">
                    <p>No results found for "{query}"</p>
                  </div>
                )
              )}
              
              {query.length >= 2 && (
                <div className="search-footer">
                  <button 
                    className="view-all-btn"
                    onClick={handleSearch}
                  >
                    <i className="fas fa-search"></i>
                    <span>Search for "{query}"</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
