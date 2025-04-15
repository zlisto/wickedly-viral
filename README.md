# Wickedly Viral App Tutorial

A React application with a "Wicked" theme for analyzing viral tweets, complete with Stripe payment integration.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installing Node.js](#installing-nodejs)
- [Stripe Account Setup](#stripe-account-setup)
- [Creating Project Structure](#creating-project-structure)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Running the Application](#running-the-application)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, make sure you have the following:

- A computer with internet access
- VS Code installed
- Basic understanding of web development concepts
- The code for the Wickedly Viral app (provided in this repository)

This tutorial assumes you have VS Code already installed. If not, please download and install it from [https://code.visualstudio.com/](https://code.visualstudio.com/).

> **Note:** For the Stripe integration, you'll need to create a free Stripe account.

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

## Creating Project Structure

Now we'll set up the basic folder structure for the Wickedly Viral application. The project will have a client folder for the frontend and a server folder for the backend.

### Create the Project Folders:
1. Open VS Code
2. Go to File > Open Folder
3. Create a new folder named "wickedly-viral" and open it
4. Inside VS Code, create two new folders:
   - client (for the React frontend)
   - server (for the Node.js backend)

Your project structure should look like this:
```
wickedly-viral/
├── client/
└── server/
```

### Terminal in VS Code:
You'll be using the terminal in VS Code for many of the upcoming steps. To open the terminal:
1. Go to Terminal > New Terminal in the VS Code menu
2. A terminal panel will open at the bottom of the VS Code window
3. Make sure the terminal is opened in your "wickedly-viral" folder

## Frontend Setup

Now we'll set up the React frontend application. Follow these steps carefully:

### Initialize React App:
1. In VS Code terminal, navigate to the client folder:
   ```bash
   cd client
   ```
2. Create a new React application:
   ```bash
   npx create-react-app .
   ```
   This might take a few minutes to complete.
3. After it's created, install the additional dependencies:
   ```bash
   npm install @stripe/react-stripe-js @stripe/stripe-js axios papaparse react-dropzone react-router-dom tailwindcss autoprefixer postcss
   ```

### Create Frontend Files:
Now that we have initialized our React app, we need to create or modify several files. The code for these files is provided in this repository. You will need to create these files in the correct locations.

1. Create the following configuration files in the client directory:
   - **tailwind.config.js** - Tailwind CSS configuration
   - **postcss.config.js** - PostCSS configuration
   - **.env** - Environment variables for frontend

2. Replace or modify the following files in the src directory:
   - **src/App.js** - Main application component
   - **src/index.js** - Entry point
   - **src/index.css** - Global styles with Tailwind directives

3. Create a components folder inside the src directory:
   ```bash
   mkdir src/components
   ```

4. Create the following component files inside the src/components folder:
   - **HomePage.js** - Login page component
   - **CreateAccount.js** - Account creation component
   - **MembershipPage.js** - Subscription selection component
   - **PaymentPage.js** - Stripe payment component
   - **TweetAnalysis.js** - Main app functionality

### Frontend .env File:
Create a file named `.env` in the client directory with the following content:
```
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```
Replace `your_stripe_publishable_key` with your actual Stripe publishable key from the Stripe dashboard.

> **Tip:** Make sure all the files are in their correct locations. The directory structure should look like this:

```
wickedly-viral/
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── HomePage.js
│   │   │   ├── CreateAccount.js
│   │   │   ├── MembershipPage.js
│   │   │   ├── PaymentPage.js
│   │   │   └── TweetAnalysis.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── .env
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
└── server/
```

After copying all the files, your frontend setup is complete!

## Backend Setup

Now let's set up the Node.js backend server for handling Stripe payments. Follow these steps:

### Initialize Node.js Project:
1. In VS Code terminal, navigate to the server folder:
   ```bash
   cd ../server
   ```
2. Initialize a new Node.js project:
   ```bash
   npm init -y
   ```
   This creates a basic package.json file.
3. Install the required dependencies:
   ```bash
   npm install express cors dotenv stripe body-parser
   npm install nodemon --save-dev
   ```

### Create Backend Files:
1. Create a file named **server.js** in the server directory
2. Copy the server.js code provided in this repository into this file
3. Create a file named **.env** in the server directory

### Backend .env File:
Add the following content to your server/.env file:
```
PORT=5000
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PRICE_ID_MONTHLY=your_stripe_price_id_for_monthly_subscription
STRIPE_PRICE_ID_ONETIME=your_stripe_price_id_for_onetime_payment
```

Replace the placeholders with your actual Stripe keys and price IDs:
- `your_stripe_secret_key`: Your Stripe secret key
- `your_stripe_price_id_for_monthly_subscription`: The price ID for the $20/month subscription
- `your_stripe_price_id_for_onetime_payment`: The price ID for the $25 one-time payment

Your backend directory should now look like this:
```
wickedly-viral/
└── server/
    ├── .env
    ├── package.json
    └── server.js
```

> **Important:** Never share your Stripe secret key with anyone or commit it to a public repository. The .env files should always be excluded from version control.

## Running the Application

Now that you've set up both the frontend and backend, it's time to run the application. You'll need to run both the server and client simultaneously.

### Start the Backend Server:
1. In VS Code terminal, navigate to the server folder:
   ```bash
   cd server
   ```
   If you're already in the wickedly-viral root folder, use `cd server`
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
   If you're already in the wickedly-viral root folder, use `cd client`
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

**Solution:** Run npm install in both the client and server directories to ensure all dependencies are installed.

### File Upload Issues:
**Problem:** CSV file not being parsed correctly or showing errors.

**Solution:** Ensure your CSV file has the correct column names: "text" and "favorite_count". Check for any formatting issues in the CSV file.

### Floating Bats Not Visible:
**Problem:** The floating bats in the Tweet Analysis page are not visible or look incorrect.

**Solution:** Check the FloatingBat component in TweetAnalysis.js and ensure the SVG code is correct. Also check that the .floating-bat CSS class is properly defined in index.css.

> **Pro Tip:** Use the browser's developer console (F12 or right-click and select "Inspect") to see any JavaScript errors that might be occurring.

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