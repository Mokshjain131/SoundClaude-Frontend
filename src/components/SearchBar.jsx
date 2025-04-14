import React from 'react';
import { Search as SearchIcon } from 'lucide-react';
import '../styles/SearchBar.css';

const SearchBar = ({ value, onChange, placeholder = "Search for tracks..." }) => {
  return (
    <div className="searchbar-container">
      <SearchIcon className="searchbar-icon" />
      <input
          type="text"
        className="searchbar-input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        />
    </div>
  );
};

export default SearchBar;

