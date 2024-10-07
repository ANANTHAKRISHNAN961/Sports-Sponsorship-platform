const express = require('express');
const { getSponsorById, createSponsor } = require('../controllers/sponsorController');
const router = express.Router();

router.route('/:id').get(getSponsorById);
router.route('/').post(createSponsor);

module.exports = router;
