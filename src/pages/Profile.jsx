import React from 'react';

function Profile() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-200"></div>
          <div>
            <h2 className="text-2xl font-semibold">Username</h2>
            <p className="text-gray-600">Joined 2024</p>
          </div>
        </div>
        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold mb-4">Your Tracks</h3>
          <p className="text-gray-600">No tracks uploaded yet</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;