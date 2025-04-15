import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MembershipPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedPlan) {
      // Pass the selected plan to the payment page
      navigate('/payment', { state: { plan: selectedPlan } });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-wicked-light py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-wicked-green">Choose Your Membership</h1>
          <p className="mt-3 text-xl text-gray-600">
            Select the plan that works best for your social media sorcery
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Monthly subscription option */}
          <div 
            className={`
              border-2 rounded-xl p-6 cursor-pointer transition-all
              ${selectedPlan === 'monthly' 
                ? 'border-wicked-pink bg-white shadow-lg transform scale-105' 
                : 'border-gray-200 bg-white hover:border-wicked-green'
              }
            `}
            onClick={() => setSelectedPlan('monthly')}
          >
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-wicked-green">Monthly</h3>
              <div className="mt-4">
                <span className="text-5xl font-extrabold text-gray-900">$20</span>
                <span className="text-xl font-medium text-gray-500">/month</span>
              </div>
              <p className="mt-4 text-gray-500">
                Recurring monthly billing
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-wicked-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">Unlimited tweet analysis</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-wicked-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">Best value for regular users</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-wicked-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">Cancel anytime</span>
              </li>
            </ul>
          </div>

          {/* One month option */}
          <div 
            className={`
              border-2 rounded-xl p-6 cursor-pointer transition-all
              ${selectedPlan === 'onetime' 
                ? 'border-wicked-pink bg-white shadow-lg transform scale-105' 
                : 'border-gray-200 bg-white hover:border-wicked-green'
              }
            `}
            onClick={() => setSelectedPlan('onetime')}
          >
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-wicked-green">One Month</h3>
              <div className="mt-4">
                <span className="text-5xl font-extrabold text-gray-900">$25</span>
              </div>
              <p className="mt-4 text-gray-500">
                One-time payment
              </p>
            </div>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-wicked-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">30 days of access</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-wicked-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">Perfect for one-time projects</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-wicked-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">No automatic renewal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button 
            onClick={handleContinue} 
            disabled={!selectedPlan}
            className={`
              wicked-button py-3 px-8 text-lg
              ${!selectedPlan ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;