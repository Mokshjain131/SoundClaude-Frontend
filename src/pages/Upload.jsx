import React, { useState } from 'react';
import './Up.css';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [fileNameDisplay, setFileNameDisplay] = useState('');
  const serverUrl = 'http://localhost:3000';

  const handleFileChange = (event) => {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      setSelectedFile(fileInput.files[0]);
      setFileNameDisplay(`Selected file: ${fileInput.files[0].name}`);
      setResult(null); // Clear previous results
    } else {
      setSelectedFile(null);
      setFileNameDisplay('');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('songFile', selectedFile);
    setLoading(true);

    try {
      const response = await fetch(`${serverUrl}/upload`, {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        let resultHTML = `<h3>Song Processed Successfully</h3>`;
        if (data.details && data.details.summary) {
          resultHTML += `<p><strong>Summary:</strong> ${data.details.summary}</p>`;
        }
        if (data.details && data.details.keywords) {
          resultHTML += `<p><strong>Keywords:</strong></p><div>`;
          Object.values(data.details.keywords).forEach(keyword => {
            resultHTML += `<span class="tag">${keyword}</span> `;
          });
          resultHTML += `</div>`;
        }
        if (data.details && data.details['ddex moods']) {
          resultHTML += `<p><strong>Moods:</strong></p><div>`;
          Object.values(data.details['ddex moods']).forEach(mood => {
            resultHTML += `<span class="tag mood-tag">${mood}</span> `;
          });
          resultHTML += `</div>`;
        }
        setResult({ success: true, html: resultHTML });
      } else {
        setResult({ 
          success: false, 
          error: data.error || 'Unknown error occurred',
          details: data.details
        });
      }
    } catch (error) {
      console.error('Upload error:', error);
      setResult({ 
        success: false, 
        error: 'Failed to upload file',
        details: error.message 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-page">
      <div className="upload-container">
        <h2>Upload Song</h2>
        <p>Upload an MP3 file to analyze its mood, themes, and keywords.</p>
        
        <div className="form-group" style={{ textAlign: 'center' }}>
          <div className="upload-icon">🎵</div>
          <label 
            htmlFor="songFile" 
            className="file-input-label"
          >
            Select MP3 File
          </label>
          <input 
            type="file" 
            id="songFile" 
            accept="audio/mp3,audio/*" 
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <div id="fileNameDisplay">{fileNameDisplay}</div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={handleUpload}
            className="upload-button"
            disabled={loading || !selectedFile}
          >
            {loading ? 'Uploading...' : 'Upload and Process'}
          </button>
        </div>

        {loading && (
          <div className="loading-indicator">
            <div className="loader"></div>
            <span>Processing your song... (this may take up to a minute)</span>
          </div>
        )}

        {result && (
          <div className={`result-container ${result.success ? 'success' : 'error'}`}>
            {result.success ? (
              <div dangerouslySetInnerHTML={{ __html: result.html }} />
            ) : (
              <div className="error-message">
                <h3>Upload Failed</h3>
                <p>{result.error}</p>
                {result.details && <p>{result.details}</p>}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Upload;