const {Router} = require('express');
const homeController = require('./home.controller');
const apiController = require('./api');

const router = new Router();
router.use('/', homeController);
router.use('/api', apiController);
module.exports = router;