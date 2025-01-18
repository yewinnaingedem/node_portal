const express = require('express');

const router = express.Router();

const testingController = require('../controllers/testController');
const AuthController = require('../controllers/AuthController');

router.get('/testing', testingController.index);
router.post('/login' ,  AuthController.login)

module.exports = router; // Correctly use `module.exports`
