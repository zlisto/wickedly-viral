import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import CreateAccount from './components/CreateAccount';
import MembershipPage from './components/MembershipPage';
import PaymentPage from './components/PaymentPage';
import TweetAnalysis from './components/TweetAnalysis';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/tweet-analysis" element={<TweetAnalysis />} />
        {/* Fallback redirect for any unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;