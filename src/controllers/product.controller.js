const {addProduct} = require("../repositories/addProduct");
const { Router } = require('express');
const {readProduct} = require("../repositories/readProduct")

const router = new Router();

router.get('/view', async (_request, response) => {
    const data = readProduct();
    response.render('pages/product/view', { data });
});
router.get('/add', async (_request, response) => {
    response.render('pages/product/add');
});
router.post('/add', async (request, response) => {
    await addProduct(request.body);
    response.redirect('/product');
});
router.get('/edit', async (_request, response) => {
    response.render('pages/product/edit');
});
router.get('/delete', async (_request, response) => {
    response.render('pages/product/delete');
});

module.exports = router;