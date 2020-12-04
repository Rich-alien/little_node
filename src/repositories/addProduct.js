const {setData} = require("./getData");

async function addProduct(product) {
    setData(product);
}

module.exports = {
    addProduct
}

