const { Router } = require('express');

const router = new Router();

router.get('/', (_request, response) => {
    response.render('pages/viewProduct');
});

module.exports = router;