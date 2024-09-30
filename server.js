const express = require('express');
const connectDB = require('./Config/db');
const userRoutes = require('./Routes/userRoutes');
const postRoutes = require('./Routes/postRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
