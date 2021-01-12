const {Router} = require('express');

const apiController = require('./api');
const homeController = require('./admin/home.controller');
const catalog = require('./home.controller')
const app = new Router();

// app.use('/', homeController);
app.use('/', catalog)
app.use('/admin', homeController);
app.use('/api', apiController);

// app.use('/admin/product.ts', adminUsersController);

module.exports = app;