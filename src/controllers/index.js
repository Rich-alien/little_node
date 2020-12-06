const { Router } = require('express');
const homeController = require('./home.controller');
const productController = require('./product.controller');
const apiController = require('./api');


const router = new Router();

router.use('/', homeController);
router.use('/product', productController);
router.use('/api', apiController);


module.exports = router;