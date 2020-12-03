const { Router } = require('express');
const homeController = require('./home.controller');
// const usersController = require('./users.controller');
// const apiControllers = require('./api');

const router = new Router();

router.use('/', homeController);
// router.use('/products', usersController);
// router.use('/api', apiControllers);

module.exports = router;