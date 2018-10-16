const express = require('express');
const router = express.Router();
const handler = require('./handler');
const validation = require('./validation');

router.post('/login', validation.loginValidation(), handler.postLogin);

module.exports = router;