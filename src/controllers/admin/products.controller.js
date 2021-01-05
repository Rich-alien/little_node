// const { Router } = require('express');
// const usersRepository = require('../../repositories/users.repository');
//
// const router = new Router();
//
// router.get('/', async (_request, response) => {
//     const users = await usersRepository.getAll();
//     response.render('admin/pages/users/view', { users });
// });
//
// router.get('/add', (_request, response) => {
//     response.render('admin/pages/users/add');
// });
//
// router.post('/add', async (request, response) => {
//     await usersRepository.add(request.body);
//     response.redirect('/admin/users');
// });
//
// module.exports = router;
