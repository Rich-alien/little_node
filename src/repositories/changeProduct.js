const {getData} = require("./getData");
const {addProduct} = require("./addProduct");

async function changeProduct(data) {
    getData().splice(data.id,1);
    let product = {
        name : data.name,
        count : data.count,
        price : data.price,
        description : data.description,
    }
    await addProduct(product);
}

module.exports = {
    changeProduct,
}