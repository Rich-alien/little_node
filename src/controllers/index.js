const {Router} = require('express');
const homeController = require('./home.controller');
const apiController = require('./api');
const adminHomeController = require('./admin/home.controller');
const adminUsersController = require('./admin/products.controller');

const router = new Router();
router.use('/admin/', adminHomeController);
router.use('/', homeController);
router.use('/api', apiController);

router.use('/admin/product.ts', adminUsersController);

module.exports = router;