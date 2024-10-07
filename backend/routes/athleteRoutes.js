const express = require('express');
const { getAthleteById, createAthlete } = require('../controllers/athleteController');
const router = express.Router();

router.route('/:id').get(getAthleteById);
router.route('/').post(createAthlete);

module.exports = router;
