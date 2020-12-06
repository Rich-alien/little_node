const productRepository = require("../../repositories/productsRepository");
const { Router } = require('express');

const router = new Router();

router.get('/', async (_request, response) => {
    const products = await productRepository.getAll();
    response.json(products);
});
router.post('/', async (request, response) => {
    const product = await productRepository.add(request.body);
    response
        .status(201)
        .json(product);
});
router.delete('/delete', async (request, response) => {
    const product = await productRepository.remove(request.body.id);
    response
        .status(201)
        .json (product)
});

module.exports = router;