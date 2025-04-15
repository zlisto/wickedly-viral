# Wickedly Viral

A React application with a "Wicked" theme for analyzing viral tweets.

## Project Setup Instructions

### Prerequisites
- Node.js and npm installed
- Stripe account for payment processing

### Setting Up Environment Variables

1. **Frontend (.env file in the client directory)**
   ```
   REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

2. **Backend (.env file in the server directory)**
   ```
   PORT=5000
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_PRICE_ID_MONTHLY=your_stripe_price_id_for_monthly_subscription
   STRIPE_PRICE_ID_ONETIME=your_stripe_price_id_for_onetime_payment
   ```

### Installation and Setup

1. **Clone or create the project directory**

2. **Frontend Setup:**
   ```bash
   cd wickedly-viral/client
   npm install
   ```

3. **Backend Setup:**
   ```bash
   cd ../server
   npm install
   ```

4. **Running the Application:**

   Start the backend server:
   ```bash
   # In the server directory
   npm start
   ```

   Start the frontend development server:
   ```bash
   # In the client directory
   npm start
   ```

5. **Access the application:**
   - The frontend will run on: http://localhost:3000
   - The backend will run on: http://localhost:5000

## Features

1. **User Authentication**
   - Login and account creation
   - Local storage for user credentials (for demo purposes)

2. **Membership Options**
   - Monthly subscription ($20/month)
   - One-time payment ($25)

3. **Payment Processing**
   - Integrated with Stripe

4. **Tweet Analysis**
   - Upload CSV files containing tweets
   - Display tweets sorted by favorite count
   - Error handling for incorrect file formats

## Tech Stack

- **Frontend:**
  - React.js
  - React Router for navigation
  - Tailwind CSS for styling
  - Stripe Elements for payment UI

- **Backend:**
  - Node.js
  - Express.js
  - Stripe API for payment processing

## Testing the Application

For testing the payment functionality, you can use Stripe's test card numbers:
- Card number: 4242 4242 4242 4242
- Expiry date: Any future date
- CVC: Any 3 digits
- ZIP: Any 5 digits

## Sample CSV Format for Tweet Analysis

```csv
text,favorite_count
"This is an example tweet about Wicked!",42
"I loved the Wicked movie so much!",136
"Green is definitely my favorite color now.",78
```