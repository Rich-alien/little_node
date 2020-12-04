const {changeProduct} = require("../repositories/changeProduct");
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
router.post('/add', async (_request, response) => {
    await addProduct(_request.body);
    response.redirect('/product/view');
});


router.get('/edit', async (_request, response) => {
    response.render('pages/product/edit');
});
router.post('/edit', async (_request, response) => {
    await changeProduct(_request.body);
    response.redirect('/product/view');
});



router.get('/delete', async (_request, response) => {
    response.render('pages/product/delete');
});

module.exports = router;