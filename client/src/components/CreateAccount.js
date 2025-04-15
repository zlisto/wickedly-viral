import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, we would send this to a server
    // For now, we're just going to simulate saving to a local "database"
    const userData = {
      firstName,
      lastName,
      username,
      password
    };
    
    // In a real app, we would store this in a database
    // For demo purposes, we'll just log it and store in localStorage
    console.log('User account created:', userData);
    
    // Simulate storing in a CSV file by saving to localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    existingUsers.push(userData);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    
    // Navigate to membership page
    navigate('/membership');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-wicked-light">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-wicked-green">Create Your Account</h1>
          <p className="text-gray-600 mt-2">Join the wickedly viral community</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="wicked-input mt-1"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="wicked-input mt-1"
              />
            </div>
          </div>
          
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
          
          <div className="pt-4">
            <button type="submit" className="wicked-button w-full">
              Create Account
            </button>
          </div>
        </form>
        
        <div className="text-center">
          <button 
            onClick={() => navigate('/')}
            className="text-wicked-green hover:underline"
          >
            Already have an account? Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;