// athleteRoutes.js
const express = require('express');
const { registerAthlete } = require('../controllers/athleteController');
const router = express.Router();

router.post('/register', registerAthlete);

module.exports = router;
