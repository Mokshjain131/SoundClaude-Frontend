import React from 'react';
import TrackCard from '../components/TrackCard';

const MOCK_TRACKS = [
  {
    id: 1,
    title: "Summer Vibes",
    artist: "DJ Wave",
    thumbnail: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=200&fit=crop",
    plays: "1.2M",
    duration: "3:45"
  },
  {
    id: 2,
    title: "Midnight Dreams",
    artist: "Luna Echo",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop",
    plays: "850K",
    duration: "4:20"
  },
  {
    id: 3,
    title: "Urban Beat",
    artist: "Metro Sound",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=200&fit=crop",
    plays: "2.1M",
    duration: "3:15"
  }
];

const Home = () => {
  return (
    <div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Trending Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_TRACKS.map(track => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Genre Recommendations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {['Electronic', 'Hip Hop', 'Rock', 'Jazz', 'Classical', 'Pop'].map(genre => (
            <div 
              key={genre}
              className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg p-6 text-white text-center cursor-pointer hover:from-orange-600 hover:to-orange-700 transition-colors"
            >
              <h3 className="font-semibold">{genre}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;