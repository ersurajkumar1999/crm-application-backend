const express = require('express');
const { loginUser, signupUser, adminLogin } = require('../controllers/AuthController');
const router = express.Router();

router.post('/auth/login', loginUser);
router.post('/auth/signup', signupUser);
router.post('/auth/admin-login', adminLogin);

module.exports = router;