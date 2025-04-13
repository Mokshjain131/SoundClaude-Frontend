import React from 'react';
import { Upload as UploadIcon } from 'lucide-react';

function Upload() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Upload Track</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <UploadIcon className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <h2 className="text-xl font-semibold mb-2">Drag and drop your track</h2>
          <p className="text-gray-600 mb-4">or click to select a file</p>
          <input 
            type="file" 
            accept="audio/*"
            className="hidden" 
            id="track-upload"
          />
          <label 
            htmlFor="track-upload"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            Select File
          </label>
        </div>
        
        <div className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Track Title
            </label>
            <input 
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter track title"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Enter track description"
            />
          </div>
          
          <button 
            className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Upload Track
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upload;