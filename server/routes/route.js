const express = require('express');
const { postUser } = require('../controllers/signUp');
const router = express.Router();

router.post('/sing-up', postUser);

module.exports = router;