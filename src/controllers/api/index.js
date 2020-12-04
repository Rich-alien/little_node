const { Router } = require('express');
const productController = require('./product.controller');

const router = new Router();

router.use('/view', productController);

module.exports = router;