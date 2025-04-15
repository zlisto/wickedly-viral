import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import Papa from 'papaparse';

// Replace the FloatingBat component with this code:

// Replace the FloatingBat component with this code:

const FloatingBat = ({ index }) => {
  // Determine if bat should be on left or right side
  const isLeftSide = index % 2 === 0;
  
  // Position bats on the sides of the screen
  const top = `${10 + (index * 8)}%`;
  const left = isLeftSide ? `${5}%` : `${85}%`;
  const size = 30 + (index * 3);
  const delay = `${index * 0.4}s`;
  
  // Random slight rotation for more natural movement
  const rotation = Math.floor(Math.random() * 20) - 10;

  return (
    <div 
      className="floating-bat" 
      style={{ 
        top, 
        left, 
        animationDelay: delay,
        transform: `rotate(${rotation}deg)`
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Bat body */}
        <ellipse cx="50" cy="40" rx="20" ry="15" fill="black" />
        
        {/* Bat head */}
        <circle cx="50" cy="30" r="10" fill="black" />
        
        {/* Bat ears */}
        <path d="M45 23L40 15L45 25" fill="black" />
        <path d="M55 23L60 15L55 25" fill="black" />
        
        {/* Bat wings */}
        <path d="M30 40C20 35 10 20 5 40C15 50 25 45 30 40Z" fill="black" />
        <path d="M70 40C80 35 90 20 95 40C85 50 75 45 70 40Z" fill="black" />
        
        {/* Bat legs/tail */}
        <path d="M45 55L40 65" stroke="black" strokeWidth="2" />
        <path d="M55 55L60 65" stroke="black" strokeWidth="2" />
        <path d="M50 55L50 70" stroke="black" strokeWidth="2" />
        
        {/* Bat eyes - keeping eyes red for a spooky effect */}
        <circle cx="45" cy="30" r="2" fill="#ff0000" />
        <circle cx="55" cy="30" r="2" fill="#ff0000" />
      </svg>
    </div>
  );
};

// Also update the CSS for the floating-bat class in index.css:
// .floating-bat {
//   @apply fixed opacity-60 z-0;
//   animation: float 5s ease-in-out infinite;
// }
// (This increases the opacity from 30% to 60% to make the black bats more visible)
// Then update the bat rendering code in the main component:
// Change this line:
// {[...Array(5)].map((_, index) => (
// To:
// {[...Array(10)].map((_, index) => (

const TweetAnalysis = () => {
  const [tweetData, setTweetData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onDrop = useCallback(acceptedFiles => {
    setError(null);
    
    // Check if file is a CSV
    if (!acceptedFiles[0]?.name.endsWith('.csv')) {
      setError("Please upload a CSV file.");
      return;
    }

    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const csvData = reader.result;
      Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => {
          // Check if the CSV has the required columns
          const headers = results.meta.fields;
          if (!headers.includes('text') || !headers.includes('favorite_count')) {
            setError("CSV must contain 'text' and 'favorite_count' columns.");
            return;
          }

          // Sort by favorite_count in descending order
          const sortedData = results.data.sort((a, b) => b.favorite_count - a.favorite_count);
          setTweetData(sortedData);
        },
        error: (error) => {
          console.error("Error parsing CSV:", error);
          setError("Error parsing the CSV file. Please check the format.");
        }
      });
    };

    reader.onerror = () => {
      setError("Error reading the file.");
    };

    reader.readAsText(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-wicked-light relative overflow-hidden">
      {/* Floating Bats */}
      {[...Array(15)].map((_, index) => (
        <FloatingBat key={index} index={index} />
      ))}
      
      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-wicked-green">Wickedly Viral</h1>
          <button 
            onClick={handleLogout}
            className="wicked-button-pink"
          >
            Logout
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-wicked-green mb-6">Tweet Analysis</h2>
          
          <div 
            {...getRootProps()} 
            className={`drop-zone ${isDragActive ? 'drop-zone-active' : ''} mb-8`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-wicked-pink text-lg">Drop your CSV file here...</p>
            ) : (
              <div>
                <p className="text-wicked-green text-lg font-medium">Drag and drop your tweets CSV file here</p>
                <p className="text-gray-500 mt-2">File must contain 'text' and 'favorite_count' columns</p>
              </div>
            )}
          </div>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
              <p>{error}</p>
            </div>
          )}
          
          {tweetData.length > 0 && (
            <div className="overflow-x-auto">
              <h3 className="text-xl font-bold text-wicked-green mb-4">Your Top Tweets</h3>
              <table className="wicked-table">
                <thead>
                  <tr>
                    <th>Tweet Text</th>
                    <th>Favorite Count</th>
                  </tr>
                </thead>
                <tbody>
                  {tweetData.map((tweet, index) => (
                    <tr key={index}>
                      <td>{tweet.text}</td>
                      <td>{tweet.favorite_count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TweetAnalysis;