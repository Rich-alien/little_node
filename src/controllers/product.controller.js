
const { Router } = require('express');
const usersRepository = require('../repositories/usersRepository');

const router = new Router();

router.get('/', async (_request, response) => {
    const users = await usersRepository.getAll();
    response.render('pages/product/view', { users });
});

router.get('/add', (_request, response) => {
    response.render('pages/product/add');
});

router.post('/add', async (request, response) => {
    await usersRepository.add(request.body);
    response.redirect('pages/product/view');
});

module.exports = router;
// const {changeProduct} = require("../repositories/changeProduct");
// const {addProduct} = require("../repositories/addProduct");
// const { Router } = require('express');
// const {readProduct} = require("../repositories/readProduct")
//
// const router = new Router();
//
// router.get('/view', async (_request, response) => {
//     const data = readProduct();
//     response.render('pages/product/view', { data });
// });
//
//
// // router.get('/add', async (_request, response) => {
// //     response.render('pages/product/add');
// // });
// // router.post('/add', async (_request, response) => {
// //     await addProduct(_request.body);
// //     response.redirect('/product/view');
// // });
// router.post('/addProduct',async (_request, response) => {
//     const products = addProduct(_request.body);
//     response
//         .status(201)
//         .json(products);
// });
//
// // router.get('/edit', async (_request, response) => {
// //     response.render('pages/product/edit');
// // });
// // router.post('/edit', async (_request, response) => {
// //     await changeProduct(_request.body);
// //     response.redirect('/product/view');
// // });
// //
// //
// //
// // router.get('/delete', async (_request, response) => {
// //     response.render('pages/product/delete');
// // });
// //
// // module.exports = router;