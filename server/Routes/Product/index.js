const express = require('express');
const router = express.Router();
const handler = require('./handler');
const validation = require('./validation');
const authMiddleWare = require('../../MiddleWares/auth');

router.post('/product/new',authMiddleWare.checkAuth(), validation.productValidation(), handler.postProduct);
router.get('/product/:id', handler.getProductsById);
router.get('/products', handler.getAllProducts);

module.exports = router;