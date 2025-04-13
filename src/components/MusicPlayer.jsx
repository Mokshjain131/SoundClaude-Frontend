import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WaveForm from '@/components/WaveForm/WaveForm';
import '@/styles/MusicPlayer.css';

const MusicPlayer = ({ isVisible }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLooping, setIsLooping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [showPlaylist, setShowPlaylist] = useState(false);
  
  const audioRef = useRef(null);
  
  // Mock current track data
  const currentTrack = {
    id: 1,
    title: 'Summer Vibes',
    artist: 'DJ Sunset',
    artistId: 'dj-sunset',
    thumbnail: 'https://picsum.photos/300/300?random=1',
    audio: 'https://example.com/audio.mp3', // Replace with actual audio file
    waveformData: [0.1, 0.3, 0.7, 0.5, 0.2, 0.8, 0.4, 0.6, 0.3, 0.5, 0.7, 0.2, 0.4, 0.6, 0.8, 0.4, 0.2, 0.5, 0.7, 0.3]
  };
  
  // Mock playlist
  const playlist = [
    currentTrack,
    {
      id: 2,
      title: 'Midnight Dreams',
      artist: 'Luna Sky',
      artistId: 'luna-sky',
      thumbnail: 'https://picsum.photos/300/300?random=2',
    },
    {
      id: 3,
      title: 'Urban Rhythm',
      artist: 'Beat Masters',
      artistId: 'beat-masters',
      thumbnail: 'https://picsum.photos/300/300?random=3',
    }
  ];
  
  useEffect(() => {
    if (audioRef.current) {
      // Set up event listeners
      const audio = audioRef.current;
      
      const updateTime = () => setCurrentTime(audio.currentTime);
      const updateDuration = () => setDuration(audio.duration);
      
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      audio.addEventListener('ended', handleTrackEnd);
      
      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
        audio.removeEventListener('ended', handleTrackEnd);
      };
    }
  }, []);
  
  useEffect(() => {
    // Apply volume changes to the audio element
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);
  
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  const handleTrackEnd = () => {
    if (isLooping) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      setIsPlaying(false);
      audioRef.current.currentTime = 0;
    }
  };
  
  const seek = (e) => {
    const seekTime = (e.nativeEvent.offsetX / e.target.clientWidth) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };
  
  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  const handleVolumeChange = (e) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };
  
  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };
  
  const toggleShuffle = () => {
    setIsShuffling(!isShuffling);
  };
  
  const togglePlaylist = () => {
    setShowPlaylist(!showPlaylist);
  };
  
  // Only render if player is visible
  if (!isVisible) return null;

  return (
    <div className="music-player">
      <audio ref={audioRef} src={currentTrack.audio} />
      
      <div className="player-left">
        <img 
          src={currentTrack.thumbnail} 
          alt={currentTrack.title} 
          className="current-track-thumbnail" 
        />
        
        <div className="current-track-info">
          <Link to={`/track/${currentTrack.id}`} className="current-track-title">
            {currentTrack.title}
          </Link>
          <Link to={`/artist/${currentTrack.artistId}`} className="current-track-artist">
            {currentTrack.artist}
          </Link>
        </div>
        
        <div className="track-controls">
          <button 
            className={`control-btn like-btn ${false ? 'active' : ''}`}
            aria-label="Like"
          >
            <i className="far fa-heart"></i>
          </button>
          
          <button 
            className="control-btn"
            aria-label="Download"
          >
            <i className="fas fa-download"></i>
          </button>
        </div>
      </div>
      
      <div className="player-center">
        <div className="main-controls">
          <button 
            className={`control-btn ${isShuffling ? 'active' : ''}`}
            onClick={toggleShuffle}
            aria-label="Shuffle"
          >
            <i className="fas fa-random"></i>
          </button>
          
          <button 
            className="control-btn"
            aria-label="Previous track"
          >
            <i className="fas fa-step-backward"></i>
          </button>
          
          <button 
            className="play-pause-btn"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            <i className={isPlaying ? 'fas fa-pause' : 'fas fa-play'}></i>
          </button>
          
          <button 
            className="control-btn"
            aria-label="Next track"
          >
            <i className="fas fa-step-forward"></i>
          </button>
          
          <button 
            className={`control-btn ${isLooping ? 'active' : ''}`}
            onClick={toggleLoop}
            aria-label="Loop"
          >
            <i className="fas fa-redo"></i>
          </button>
        </div>
        
        <div className="progress-container">
          <span className="time current">{formatTime(currentTime)}</span>
          
          <div className="progress-bar-container" onClick={seek}>
            <div className="progress-bar">
              <div 
                className="progress-indicator"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
            </div>
            <WaveForm 
              waveformData={currentTrack.waveformData} 
              progress={currentTime / duration} 
            />
          </div>
          
          <span className="time duration">{formatTime(duration)}</span>
        </div>
      </div>
      
      <div className="player-right">
        <button 
          className="control-btn playlist-btn"
          onClick={togglePlaylist}
          aria-label="View playlist"
        >
          <i className="fas fa-list"></i>
        </button>
        
        <div className="volume-container">
          <button 
            className="control-btn volume-btn"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            <i className={
              isMuted ? 'fas fa-volume-mute' : 
              volume < 30 ? 'fas fa-volume-off' :
              volume < 70 ? 'fas fa-volume-down' : 
              'fas fa-volume-up'
            }></i>
          </button>
          
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
            aria-label="Volume"
          />
        </div>
      </div>
      
      {showPlaylist && (
        <div className="player-playlist">
          <div className="playlist-header">
            <h3>Up Next</h3>
            <button className="close-playlist" onClick={togglePlaylist}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <ul className="playlist-tracks">
            {playlist.map((track, index) => (
              <li 
                key={track.id} 
                className={`playlist-item ${track.id === currentTrack.id ? 'active' : ''}`}
              >
                <img 
                  src={track.thumbnail}
                  alt={track.title}
                  className="playlist-item-thumbnail"
                />
                
                <div className="playlist-item-info">
                  <span className="playlist-item-title">{track.title}</span>
                  <span className="playlist-item-artist">{track.artist}</span>
                </div>
                
                {track.id === currentTrack.id && (
                  <div className="now-playing">
                    <i className="fas fa-volume-up"></i>
                  </div>
                )}
                
                <button className="playlist-item-action">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
