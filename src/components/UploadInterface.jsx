import React, { useState } from 'react';
import { Search as SearchIcon, Upload as UploadIcon } from 'lucide-react';

const UploadInterface = ({ onUpload, onSearch }) => {
  const [file, setFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first');
      return;
    }
    setIsProcessing(true);
    await onUpload(file);
    setIsProcessing(false);
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert('Please enter a search query');
      return;
    }
    onSearch(searchQuery);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Upload Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Upload Song</h2>
        <div className="flex flex-col items-center">
          <UploadIcon className="w-12 h-12 text-blue-500 mb-4" />
          <label className="cursor-pointer bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Select MP3 File
            <input 
              type="file" 
              className="hidden" 
              accept="audio/mp3,audio/*" 
              onChange={handleFileChange}
            />
          </label>
          {file && (
            <p className="mt-2 text-gray-600">Selected: {file.name}</p>
          )}
          <button 
            onClick={handleUpload}
            disabled={isProcessing}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            {isProcessing ? 'Processing...' : 'Upload and Process'}
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="border-t pt-6">
        <h2 className="text-2xl font-bold mb-4">Search for Songs</h2>
        <div className="flex">
          <div className="relative flex-grow">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by mood, theme or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            onClick={handleSearch}
            className="ml-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadInterface;
