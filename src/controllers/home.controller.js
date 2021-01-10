const { Router } = require('express');
const data = require('../../state/data.json');
const router = new Router();

router.get('/', (request, response) => {
    response.render('.././views/pages/products/index.ejs', { data });
});

module.exports = router;
