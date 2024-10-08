const Sponsor = require('../models/Sponsor');
const bcrypt = require('bcrypt');

exports.registerSponsor = async (req, res) => {
    const { name, company, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const sponsor = new Sponsor({ name, company, email, password: hashedPassword });
        await sponsor.save();
        res.status(201).json({ message: 'Sponsor registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering sponsor', error });
    }
};

exports.loginSponsor = async (req, res) => {
    const { email, password } = req.body;
    try {
        const sponsor = await Sponsor.findOne({ email });
        if (!sponsor) return res.status(404).json({ message: 'Sponsor not found' });

        const isPasswordValid = await bcrypt.compare(password, sponsor.password);
        if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error during login', error });
    }
};
