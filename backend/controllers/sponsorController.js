const Sponsor = require('../models/Sponsor');

// Get sponsor profile by ID
exports.getSponsorById = async (req, res) => {
  try {
    const sponsor = await Sponsor.findById(req.params.id);
    if (!sponsor) return res.status(404).json({ message: 'Sponsor not found' });
    res.json(sponsor);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Create sponsor profile
exports.createSponsor = async (req, res) => {
  try {
    const { name, email, password, company } = req.body;
    const newSponsor = new Sponsor({ name, email, password, company });
    await newSponsor.save();
    res.status(201).json(newSponsor);
  } catch (error) {
    res.status(500).json({ error: 'Error creating sponsor' });
  }
};
