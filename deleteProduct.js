const get = require("./getInput");
const product = require('./state/data');
const fs = require("fs");
const path = require("path");
const readline = require("readline");
async function deleteProduct() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });


    let dirPath = path.resolve(__dirname, "state");
    const filePath = path.resolve(dirPath, "data.json");
    let answer = await get.getInput(rl);
    product.splice(answer,1);
    const newJsonContent = JSON.stringify(product,null, 2);
    fs.mkdirSync(dirPath, {recursive: true});
    fs.writeFileSync(filePath, newJsonContent);
    // console.log(`продукт с id ${answer} был удален!`);
}

module.exports = {
    deleteProduct
}
