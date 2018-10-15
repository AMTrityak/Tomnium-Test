const express = require('express');
const router = express.Router();
const handler = require('./handler');

router.post('/login', handler.postLogin);

module.exports = router;