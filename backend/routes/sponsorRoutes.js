const express = require('express');
const { registerSponsor, loginSponsor } = require('../controllers/sponsorController');
const router = express.Router();

router.post('/register', registerSponsor);
router.post('/login', loginSponsor);

module.exports = router;
