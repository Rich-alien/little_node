const {setData,getData} = require("./getData");
async function deleteProduct() {
    let products = getData();
    products.splice(answer,1);
    setData(products);
}

module.exports = {
    deleteProduct
}
