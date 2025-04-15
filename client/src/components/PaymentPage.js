import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

// Load Stripe outside of component to avoid recreating it on renders
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ plan }) => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    const createPaymentIntent = async () => {
      try {
        const response = await axios.post('/api/create-payment-intent', {
          plan: plan
        });
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
        setError('An error occurred while setting up payment. Please try again.');
      }
    };

    createPaymentIntent();
  }, [plan]);

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    try {
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      });

      if (payload.error) {
        setError(`Payment failed: ${payload.error.message}`);
        setProcessing(false);
      } else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);
        // Redirect to the tweet analysis page after successful payment
        setTimeout(() => {
          navigate('/tweet-analysis');
        }, 1500);
      }
    } catch (error) {
      console.error('Payment error:', error);
      setError('An unexpected error occurred. Please try again.');
      setProcessing(false);
    }
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-6">
        <label htmlFor="card-element" className="block text-sm font-medium text-gray-700 mb-2">
          Credit or debit card
        </label>
        <div className="border border-gray-300 rounded-md p-4 bg-white">
          <CardElement
            id="card-element"
            options={{
              style: {
                base: {
                  color: '#32325d',
                  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                  fontSmoothing: 'antialiased',
                  fontSize: '16px',
                  '::placeholder': {
                    color: '#aab7c4'
                  }
                },
                invalid: {
                  color: '#fa755a',
                  iconColor: '#fa755a'
                }
              }
            }}
            onChange={handleChange}
          />
        </div>
        {error && (
          <div className="text-red-500 mt-2 text-sm" role="alert">
            {error}
          </div>
        )}
      </div>

      <button
        disabled={processing || disabled || succeeded}
        className={`wicked-button w-full ${(processing || disabled || succeeded) ? 'opacity-50 cursor-not-allowed' : ''}`}
        id="submit"
      >
        {processing ? (
          <span>Processing...</span>
        ) : succeeded ? (
          <span>Payment successful!</span>
        ) : (
          <span>Pay now</span>
        )}
      </button>

      {succeeded && (
        <div className="text-center mt-4 text-wicked-green">
          <p>Payment succeeded! Redirecting you to the app...</p>
        </div>
      )}
    </form>
  );
};

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.plan;

  useEffect(() => {
    // If no plan is selected, redirect back to membership page
    if (!plan) {
      navigate('/membership');
    }
  }, [plan, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-wicked-light py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-wicked-green">Complete Your Purchase</h1>
          <p className="text-gray-600 mt-2">
            {plan === 'monthly' 
              ? 'Monthly Subscription - $20/month' 
              : 'One Month Access - $25'
            }
          </p>
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm plan={plan} />
        </Elements>

        <div className="mt-6 text-center">
          <button 
            onClick={() => navigate('/membership')}
            className="text-wicked-green hover:underline"
          >
            Go back to plan selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;