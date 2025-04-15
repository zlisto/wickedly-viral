import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // For now, just navigate to the tweet analysis page without checking credentials
    navigate('/tweet-analysis');
  };

  const handleCreateAccount = () => {
    navigate('/create-account');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-wicked-light">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-wicked-green">Wickedly Viral</h1>
          <p className="text-gray-600 mt-2">Discover your most bewitching tweets</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="wicked-input mt-1"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="wicked-input mt-1"
            />
          </div>
          
          <div className="pt-2">
            <button type="submit" className="wicked-button w-full">
              Login
            </button>
          </div>
        </form>
        
        <div className="text-center pt-2">
          <p className="text-gray-600">Don't have an account?</p>
          <button 
            onClick={handleCreateAccount}
            className="wicked-button-pink w-full mt-2"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;