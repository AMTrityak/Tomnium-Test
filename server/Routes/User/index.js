const express = require('express');
const router = express.Router();
const handler = require('./handler');
const validation = require('./validation');

router.post('/user', validation.validationRegistr(), handler.userRegistration);

module.exports = router;