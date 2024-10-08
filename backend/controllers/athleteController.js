// athleteController.js
const Athlete = require('../models/Athlete');
const bcrypt = require('bcrypt');

exports.registerAthlete = async (req, res) => {
    const { name, email, password, bio } = req.body; // Assuming bio can also be sent during registration
    try {
        // Check if the email already exists
        const existingAthlete = await Athlete.findOne({ email });
        if (existingAthlete) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new athlete instance
        const athlete = new Athlete({
            name,
            email,
            password: hashedPassword,
            bio,
            achievements: [], // Initialize as empty array
            posts: [] // Initialize as empty array
        });

        // Save athlete to the database
        await athlete.save();

        // Respond with success
        res.status(201).json({ message: 'Athlete registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Error registering athlete', error });
    }
};
