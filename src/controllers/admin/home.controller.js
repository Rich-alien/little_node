const { Router } = require('express');

const router = new Router();

router.get('/', (_request, response) => {
    response.render('adminPanel/pages/home');
});
router.delete('/', (_request, response) => {
    response.render('adminPanel/pages/viewProduct');
});
router.get('/add', (_request, response) => {
    response.render('adminPanel/pages/addProduct');
});
router.post('/add',(_request, response) => {
    response.render('adminPanel/pages/addProduct');
});
router.get('/edit',(_request, response) => {
    response.render('adminPanel/pages/editProduct');
});
router.post('/edit', (_request, response) => {
    response.render('adminPanel/pages/editProduct');
});
router.get('/partialEdit',(_request, response) => {
    response.render('adminPanel/pages/partialEdit');
});
router.post('/partialEdit', (_request, response) => {
    response.render('adminPanel/pages/partialEdit');
});
module.exports = router;