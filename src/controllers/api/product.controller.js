const { Router } = require('express');
const {readProduct} = require("../../repositories/readProduct");

const router = new Router();

router.get('/', async (_request, response) => {
    const data = readProduct();
    response.json(data);
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