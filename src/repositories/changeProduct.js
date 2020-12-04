const {addProduct} = require("./addProduct");
const {deleteProduct} = require("./deleteProduct");

async function changeProduct() {
    await deleteProduct();
    await addProduct();
}

module.exports = {
    changeProduct,
}