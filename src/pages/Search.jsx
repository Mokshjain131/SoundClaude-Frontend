import React, { useState } from 'react';
import TrackCard from '../components/TrackCard';
import { Search as SearchIcon } from 'lucide-react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');

  const MOCK_SEARCH_RESULTS = [
    {
      id: 1,
      title: "Electronic Dreams",
      artist: "Synth Master",
      thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=200&fit=crop",
      plays: "500K",
      duration: "3:30"
    },
    {
      id: 2,
      title: "Acoustic Session",
      artist: "Guitar Hero",
      thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=200&fit=crop",
      plays: "200K",
      duration: "4:15"
    }
  ];

  const GENRES = [
    'All', 'Electronic', 'Rock', 'Hip Hop', 'Jazz', 'Classical', 'Pop', 'Folk'
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for tracks, artists, or albums..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500"
          />
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Filter by Genre</h3>
        <div className="flex flex-wrap gap-2">
          {GENRES.map(genre => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre.toLowerCase())}
              className={`px-4 py-2 rounded-full ${
                selectedGenre === genre.toLowerCase()
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_SEARCH_RESULTS.map(track => (
          <TrackCard key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
};

export default Search;