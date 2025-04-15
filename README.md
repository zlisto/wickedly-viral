# Wickedly Viral App Tutorial

A React application with a "Wicked" theme for analyzing viral tweets, complete with Stripe payment integration.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Option 1: Cloning the Repository](#option-1-cloning-the-repository)
  - [Option 2: Building Manually](#option-2-building-manually)
- [Installing Node.js](#installing-nodejs)
- [Stripe Account Setup](#stripe-account-setup)
- [Setting Up the Application](#setting-up-the-application)
- [Running the Application](#running-the-application)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, make sure you have the following:

- A computer with internet access
- VS Code installed
- Basic understanding of web development concepts
- Git installed (for cloning option)

This tutorial assumes you have VS Code already installed. If not, please download and install it from [https://code.visualstudio.com/](https://code.visualstudio.com/).

> **Note:** For the Stripe integration, you'll need to create a free Stripe account.

## Getting Started

You have two options for setting up the Wickedly Viral app:

### Option 1: Cloning the Repository

If you want to get started quickly with all the code already in place:

1. Open your terminal or command prompt
2. Navigate to the directory where you want to store the project
3. Run the following command to clone the repository:
   ```bash
   git clone https://github.com/your-username/wickedly-viral.git
   ```
   (Replace "your-username" with the actual repository username)
4. Navigate into the project folder:
   ```bash
   cd wickedly-viral
   ```

After cloning, you'll need to install the dependencies:

1. For the client (React frontend):
   ```bash
   cd client
   npm install
   ```

2. For the server (Node.js backend):
   ```bash
   cd ../server
   npm install
   ```

### Option 2: Building Manually

If you prefer to build the application step by step:

1. Create a new folder for your project:
   ```bash
   mkdir wickedly-viral
   cd wickedly-viral
   ```

2. Create the client and server directories:
   ```bash
   mkdir client server
   ```

3. In the client directory, you'll create a React app and add the necessary files (described in the [Frontend Setup](#frontend-setup) section)

4. In the server directory, you'll set up the Node.js backend (described in the [Backend Setup](#backend-setup) section)

## Installing Node.js

Node.js is required to run the React application and the backend server. Follow these steps to install Node.js:

### Windows:
1. Go to [https://nodejs.org/en/](https://nodejs.org/en/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the installation wizard
4. Accept the license agreement and keep clicking "Next"
5. Click "Finish" when the installation is complete

### macOS:
1. Go to [https://nodejs.org/en/](https://nodejs.org/en/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the installation wizard
4. Click "Continue" through the installation process
5. Click "Close" when the installation is complete

### Verify Installation:
To verify that Node.js is installed correctly, open your terminal or command prompt and run:
```bash
node --version
npm --version
```

Both commands should display version numbers, confirming that Node.js and npm (Node Package Manager) are installed.

## Stripe Account Setup

Stripe is used for handling payments in the Wickedly Viral app. Follow these steps to set up your Stripe account:

### Create a Stripe Account:
1. Go to [https://stripe.com/](https://stripe.com/)
2. Click "Start now" or "Sign up"
3. Enter your email address and create a password
4. Complete the sign-up process by providing the required information

### Get Your API Keys:
1. Once logged into your Stripe Dashboard, click on "Developers" in the left sidebar
2. Click on "API keys"
3. You'll see your Publishable key and Secret key
4. Make sure you're in "Test mode" (there should be a toggle at the top right of the dashboard)
5. Copy these keys to use in the application later

### Create Stripe Products and Prices:
1. In the Stripe Dashboard, go to "Products" in the left sidebar
2. Click "Add product"
3. Create a product called "Monthly Subscription" with the following details:
   - Name: Monthly Subscription
   - Price: $20.00 USD / month (recurring)
4. Save this product and note the Price ID (it starts with "price_")
5. Create another product called "One Month Access" with these details:
   - Name: One Month Access
   - Price: $25.00 USD (one time)
6. Save this product and note the Price ID

> **Note:** Keep your API keys and Price IDs safe. You'll need to add them to the application's environment files in the later steps.

## Setting Up the Application

### Frontend Setup

#### If you cloned the repository:
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Create a file named `.env` in the client directory with your Stripe publishable key:
   ```
   REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

#### If you're building manually:

1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Initialize a new React application:
   ```bash
   npx create-react-app .
   ```
3. Create a `package.json` file with the required dependencies:
   ```json
   {
     "name": "wickedly-viral-client",
     "version": "0.1.0",
     "private": true,
     "dependencies": {
       "@stripe/react-stripe-js": "^1.16.5",
       "@stripe/stripe-js": "^1.54.1",
       "axios": "^1.4.0",
       "papaparse": "^5.4.1",
       "react": "^18.2.0",
       "react-dom": "^18.2.0",
       "react-dropzone": "^14.2.3",
       "react-router-dom": "^6.14.1",
       "react-scripts": "5.0.1",
       "tailwindcss": "^3.3.2",
       "autoprefixer": "^10.4.14",
       "postcss": "^8.4.24"
     },
     "scripts": {
       "start": "react-scripts start",
       "build": "react-scripts build",
       "test": "react-scripts test",
       "eject": "react-scripts eject"
     },
     "eslintConfig": {
       "extends": [
         "react-app",
         "react-app/jest"
       ]
     },
     "browserslist": {
       "production": [
         ">0.2%",
         "not dead",
         "not op_mini all"
       ],
       "development": [
         "last 1 chrome version",
         "last 1 firefox version",
         "last 1 safari version"
       ]
     },
     "proxy": "http://localhost:5000"
   }
   ```
4. Install the dependencies:
   ```bash
   npm install
   ```
5. Create the necessary configuration files and component files as mentioned in the original README
6. Create a `.env` file with your Stripe publishable key

### Backend Setup

#### If you cloned the repository:
1. Navigate to the server directory:
   ```bash
   cd ../server
   ```
2. Create a file named `.env` in the server directory with your Stripe keys:
   ```
   PORT=5000
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_PRICE_ID_MONTHLY=your_stripe_price_id_for_monthly_subscription
   STRIPE_PRICE_ID_ONETIME=your_stripe_price_id_for_onetime_payment
   ```

#### If you're building manually:

1. Navigate to the server directory:
   ```bash
   cd ../server
   ```
2. Create a `package.json` file with the required dependencies:
   ```json
   {
     "name": "wickedly-viral-server",
     "version": "1.0.0",
     "description": "Backend for Wickedly Viral app",
     "main": "server.js",
     "scripts": {
       "start": "node server.js",
       "dev": "nodemon server.js"
     },
     "dependencies": {
       "body-parser": "^1.20.2",
       "cors": "^2.8.5",
       "dotenv": "^16.3.1",
       "express": "^4.18.2",
       "stripe": "^12.11.0"
     },
     "devDependencies": {
       "nodemon": "^2.0.22"
     }
   }
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create the server.js file with the backend code
5. Create a `.env` file with your Stripe keys

## Running the Application

Now that you've set up both the frontend and backend, it's time to run the application. You'll need to run both the server and client simultaneously.

### Start the Backend Server:
1. In VS Code terminal, navigate to the server folder:
   ```bash
   cd server
   ```
2. Start the server:
   ```bash
   node server.js
   ```
   You should see a message that says "Server is running on port 5000"

### Start the Frontend Development Server:
1. Open a new terminal in VS Code (Terminal > New Terminal)
2. Navigate to the client folder:
   ```bash
   cd client
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   This will open your web browser to http://localhost:3000 where you can see the app running.

### Using the Application:
Once both servers are running, you can interact with the Wickedly Viral app:
1. On the homepage, you can either log in or create a new account
2. After creating an account, select a membership plan
3. Enter payment details using Stripe's test card:
   - Card number: 4242 4242 4242 4242
   - Expiry date: Any future date
   - CVC: Any 3 digits
   - ZIP: Any 5 digits
4. After successful payment, you'll be taken to the Tweet Analysis page
5. Create a sample CSV file with these columns: "text" and "favorite_count"
6. Drag and drop your CSV file onto the Tweet Analysis page
7. Your tweets will be displayed in a table, sorted by favorite count

> **Note:** Remember that you need to keep both the backend and frontend servers running for the application to work properly.

## Troubleshooting

If you encounter any issues while setting up or running the application, check the following common problems and solutions:

### Styling Issues:
**Problem:** The app is working but the styling is not applied (default fonts and buttons).

**Solution:** Make sure your Tailwind configuration files are in the correct location (client directory, not root). Check that your index.css file contains the Tailwind directives and all custom styles.

### Server Connection Issues:
**Problem:** Error connecting to the server when trying to make a payment.

**Solution:** Ensure your backend server is running on port 5000 and check that the proxy setting in client/package.json is correctly set to "http://localhost:5000".

### Stripe Payment Issues:
**Problem:** Payment fails or Stripe elements don't appear.

**Solution:** Double-check your Stripe API keys in both .env files. Make sure you're using the test mode keys and that the price IDs are correct.

### Missing Dependencies:
**Problem:** Errors about missing modules or packages.

**Solution:** Make sure you've run `npm install` in both the client and server directories. Check that your package.json files contain all the necessary dependencies.

### File Upload Issues:
**Problem:** CSV file not being parsed correctly or showing errors.

**Solution:** Ensure your CSV file has the correct column names: "text" and "favorite_count". Check for any formatting issues in the CSV file.

## Sample CSV Format

For testing the Tweet Analysis feature, you can create a CSV file with the following structure:

```csv
text,favorite_count
"This is an example tweet about Wicked!",42
"Defying gravity with these engagement numbers!",136
"Green is definitely my favorite color now.",78
```

## License

This project is available for educational purposes.