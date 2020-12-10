const { Router } = require('express');

const router = new Router();

router.get('/', (_request, response) => {
    response.render('pages/viewProduct');
});
router.delete('/', (_request, response) => {
    response.render('pages/viewProduct');
});
router.get('/add', (_request, response) => {
    response.render('pages/addProduct');
});
router.post('/add',(_request, response) => {
    response.render('pages/addProduct');
});
router.get('/edit',(_request, response) => {
    response.render('pages/editProduct');
});

router.post('/edit', (_request, response) => {
    response.render('pages/editProduct');
});

module.exports = router;