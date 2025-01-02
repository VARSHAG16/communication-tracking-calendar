import React, { useState } from 'react';

const Dashboard = () => {
  const [username, setUsername] = useState('JohnDoe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('password123');
  
  const handleUpdateProfile = () => {
    alert('Profile Updated!');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      
      <div className="mb-4">
        <strong>Username:</strong>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border w-full"
        />
      </div>
      
      <div className="mb-4">
        <strong>Email:</strong>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border w-full"
        />
      </div>
      
      <div className="mb-4">
        <strong>Password:</strong>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border w-full"
        />
      </div>
      
      <button
        onClick={handleUpdateProfile}
        className="bg-green-500 text-white px-4 py-2"
      >
        Update Profile
      </button>
    </div>
  );
};

export default Dashboard;
