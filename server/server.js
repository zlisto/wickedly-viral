require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Define price IDs for different plans
const PRICE_IDS = {
  monthly: process.env.STRIPE_PRICE_ID_MONTHLY,
  onetime: process.env.STRIPE_PRICE_ID_ONETIME
};

// Create a payment intent
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { plan } = req.body;
    
    if (!plan || !PRICE_IDS[plan]) {
      return res.status(400).json({ error: 'Invalid plan selected' });
    }

    // Get the price from Stripe
    const price = await stripe.prices.retrieve(PRICE_IDS[plan]);
    
    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: price.unit_amount,
      currency: price.currency,
      // Verify your integration in this guide by including this parameter
      metadata: { integration_check: 'accept_a_payment', plan: plan }
    });

    res.json({
      clientSecret: paymentIntent.client_secret
    });

  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'An error occurred while processing your payment.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});