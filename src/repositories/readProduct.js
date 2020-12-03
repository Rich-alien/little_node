const {getData} = require("./getData");

function readProduct() {
    const product = getData();
    return product;
}

module.exports = {
    readProduct
}