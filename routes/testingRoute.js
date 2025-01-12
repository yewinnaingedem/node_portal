const express = require('express');

const router = express.Router();

const testingController = require('../controllers/testController');

router.get('/testing', testingController.index);

module.exports = router; // Correctly use `module.exports`
