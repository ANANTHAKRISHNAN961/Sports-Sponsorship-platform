const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); // Importing CORS
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use('/api/athletes', require('./routes/athleteRoutes'));
app.use('/api/sponsors', require('./routes/sponsorRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
