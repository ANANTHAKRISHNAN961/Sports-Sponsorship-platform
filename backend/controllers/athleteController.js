const Athlete = require('../models/Athlete');

// Get athlete profile by ID
exports.getAthleteById = async (req, res) => {
  try {
    const athlete = await Athlete.findById(req.params.id);
    if (!athlete) return res.status(404).json({ message: 'Athlete not found' });
    res.json(athlete);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create athlete profile
exports.createAthlete = async (req, res) => {
  try {
    const { name, email, password, bio } = req.body;
    const newAthlete = new Athlete({ name, email, password, bio });
    await newAthlete.save();
    res.status(201).json(newAthlete);
  } catch (error) {
    res.status(500).json({ error: 'Error creating athlete' });
  }
};
