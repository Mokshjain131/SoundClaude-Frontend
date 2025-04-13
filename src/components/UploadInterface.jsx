import React, { useState } from 'react';
import { Upload as UploadIcon, Music, X } from 'lucide-react';
import WaveForm from './WaveForm';
import '../styles/UploadInterface.css';

const UploadInterface = () => {
  const [file, setFile] = useState(null);
  const [trackInfo, setTrackInfo] = useState({
    title: '',
    artist: '',
    genre: ''
  });
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Uploading:', { file, trackInfo });
  };

  return (
    <div className="upload-interface">
      <div className="upload-dropzone">
        <input
              type="file" 
          id="file-upload"
          className="file-input"
              onChange={handleFileChange}
          accept="audio/*"
            />
        <label htmlFor="file-upload" className="dropzone-label">
          {file ? (
            <div className="file-preview">
              <Music size={24} />
              <span>{file.name}</span>
              <button onClick={handleRemoveFile} className="remove-file">
                <X size={20} />
              </button>
        </div>
          ) : (
            <>
              <UploadIcon size={48} />
              <span>Drop your audio file here or click to browse</span>
              <span className="dropzone-hint">MP3, WAV files supported</span>
            </>
          )}
        </label>
          </div>

      {file && (
        <form onSubmit={handleSubmit} className="track-form">
          <div className="form-group">
            <label htmlFor="title">Track Title</label>
            <input
              type="text"
              id="title"
              value={trackInfo.title}
              onChange={(e) => setTrackInfo({ ...trackInfo, title: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="artist">Artist Name</label>
            <input
              type="text"
              id="artist"
              value={trackInfo.artist}
              onChange={(e) => setTrackInfo({ ...trackInfo, artist: e.target.value })}
              required
            />
      </div>

          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <select
              id="genre"
              value={trackInfo.genre}
              onChange={(e) => setTrackInfo({ ...trackInfo, genre: e.target.value })}
              required
            >
              <option value="">Select a genre</option>
              <option value="electronic">Electronic</option>
              <option value="rock">Rock</option>
              <option value="hiphop">Hip Hop</option>
              <option value="jazz">Jazz</option>
              <option value="classical">Classical</option>
            </select>
    </div>

          <button type="submit" className="upload-button">
            Upload Track
          </button>
        </form>
      )}
    </div>
  );
};

export default UploadInterface;

