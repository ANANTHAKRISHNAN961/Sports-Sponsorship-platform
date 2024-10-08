const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js'); // Import the connection logic
const athleteRoutes = require('./routes/athleteRoutes'); // Import your athlete routes

const app = express();

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:3000', // Allow your React app to access the API
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    credentials: true, // Allow credentials (if needed)
};

// Use CORS middleware
app.use(cors(corsOptions));
// Allow preflight requests
app.options('*', cors(corsOptions)); // Handle preflight OPTIONS requests

// Connect to your MongoDB database
connectDB(); // Call the function to connect to the database

// Middleware to parse JSON requests
app.use(express.json());

// Use athlete routes
app.use('/api/athletes', athleteRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
