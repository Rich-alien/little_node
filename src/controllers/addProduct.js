const {setData} = require("./getData");
const readline = require("readline");
const get = require("./getInput");
const {getData} = require("./getData");

async function addProduct() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    console.log("Введите имя товара");
    let getName = await get.getInput(rl);
    console.log("Введите кол-во товара");
    let getCount = await get.getInput(rl);
    console.log("Введите цену товара");
    let getPrice = await get.getInput(rl);
    console.log("Введите описание товара");
    let getDescription = await get.getInput(rl);
    let product = getData();
    product.push({
        name: getName,
        count: getCount,
        price: getPrice,
        description: getDescription,
    })
    setData(product);
}

module.exports = {
    addProduct
}

