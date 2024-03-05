const express = require('express');
const router = express.Router();
const { Home } = require('../controllers/HomeController');


router.get('/', Home);

module.exports = router;