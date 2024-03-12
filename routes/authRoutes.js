const express = require('express');
const { loginUser, signupUser, adminLogin } = require('../controllers/AuthController');
const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);
router.post('/admin-login', adminLogin);

module.exports = router;