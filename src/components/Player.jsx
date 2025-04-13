import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from 'lucide-react';
import WaveSurfer from 'wavesurfer.js';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);

  useEffect(() => {
    wavesurfer.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: '#D1D5DB',
      progressColor: '#F97316',
      cursorColor: '#F97316',
      barWidth: 2,
      barRadius: 3,
      responsive: true,
      height: 40,
    });

    return () => wavesurfer.current.destroy();
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    wavesurfer.current.playPause();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 w-1/4">
            <img 
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop" 
              alt="Track thumbnail" 
              className="w-12 h-12 rounded object-cover"
            />
            <div>
              <h4 className="font-medium">Track Title</h4>
              <p className="text-sm text-gray-500">Artist Name</p>
            </div>
            <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />
          </div>

          <div className="flex flex-col items-center w-2/4">
            <div className="flex items-center space-x-4 mb-2">
              <SkipBack className="w-5 h-5 text-gray-600 cursor-pointer" />
              <button
                onClick={togglePlayPause}
                className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6" />
                )}
              </button>
              <SkipForward className="w-5 h-5 text-gray-600 cursor-pointer" />
            </div>
            <div ref={waveformRef} className="w-full" />
          </div>

          <div className="flex items-center space-x-2 w-1/4 justify-end">
            <Volume2 className="w-5 h-5 text-gray-600" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;