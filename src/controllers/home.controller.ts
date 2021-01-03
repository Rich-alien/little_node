const productsRepository = require('../repositories/products.repository');

const { Router } = require('express');

const router = new Router();

router.get('/', (_request, response) => {
    response.render('pages/home');
});

router.get('/products', async (_request, response) => {
    const users = await productsRepository.getAll();
    response.render('pages/products/view', { users });
});

module.exports = router;