const { Router } = require('express');

const router = new Router();

router.get('/', (_request, response) => {
    response.render('adminPanel/pages/home');
});
router.delete('/', (_request, response) => {
    response.render('adminPanel/pages/viewProduct');
});
router.get('/admin/add', (_request, response) => {
    response.render('adminPanel/pages/addProduct');
});
router.post('/admin/add',(_request, response) => {
    response.render('adminPanel/pages/addProduct');
});
router.get('/admin/edit',(_request, response) => {
    response.render('adminPanel/pages/editProduct');
});
router.post('/admin/edit', (_request, response) => {
    response.render('adminPanel/pages/editProduct');
});
router.get('/admin/partialEdit',(_request, response) => {
    response.render('adminPanel/pages/partialEdit');
});
router.post('/admin/partialEdit', (_request, response) => {
    response.render('adminPanel/pages/partialEdit');
});
module.exports = router;