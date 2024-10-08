const express = require('express');
const connectDB = require('./config/db.js'); // Import the connection logic
const athleteRoutes = require('./routes/athleteRoutes'); // Import your athlete routes

const app = express();

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
