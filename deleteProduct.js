const get = require("./getInput");
const readline = require("readline");
const {setData,getData} = require("./getData");

async function deleteProduct() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    let answer = await get.getInput(rl);
    let products = getData();
    products.splice(answer,1);
    setData(products);

}

module.exports = {
    deleteProduct
}
