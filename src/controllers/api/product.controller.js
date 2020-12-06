const usersRepository = require("../../repositories/usersRepository");
const { Router } = require('express');
// const {readProduct} = require("../../repositories/readProduct");

const router = new Router();

router.get('/', async (_request, response) => {
    const products = await usersRepository.getAll();
    response.json(products);
});
router.get('/:id', async(request, response) => {
    const product = await usersRepository.get(request.params.id);
    if (product) {
        response.json(product);
        return;
    }

    response.status(404);
});
router.post('/', async (request, response) => {
    const user = await usersRepository.add(request.body);
    response
        .status(201)
        .json(user);
});
// router.get('/:id', async(request, response) => {
//     const user = await usersRepository.get(request.params.id);
//     if (user) {
//         response.json(user);
//         return;
//     }
//
//     response.status(404);
// });
//
// router.post('/', async (request, response) => {
//     const user = await usersRepository.add(request.body);
//     response
//         .status(201)
//         .json(user);
// });

module.exports = router;