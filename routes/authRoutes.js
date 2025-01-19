const express = require('express');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

router.post('/register', AuthController.post);


module.express = router;