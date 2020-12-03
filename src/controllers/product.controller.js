const { Router } = require('express');
const {readProduct} = require("../repositories/readProduct")

const router = new Router();

router.get('/', async (_request, response) => {

    const data = readProduct();
    response.render('pages/product/view', { data });
});


module.exports = router;