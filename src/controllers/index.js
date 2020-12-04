const { Router } = require('express');
const homeController = require('./home.controller');
const productController = require('./product.controller');


const router = new Router();

router.use('/', homeController);
router.use('/product', productController);


module.exports = router;