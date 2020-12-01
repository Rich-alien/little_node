const fs = require("fs");
const path = require("path");
const readline = require("readline");
const get = require("./getInput");
let i = 0;
let content;
async function addProduct() {
    i++;
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

    let dirPath = path.resolve(__dirname, "state");
    const filePath = path.resolve(dirPath, "data.json");
    const file = readFile(filePath);
    content = file && JSON.parse(file) || [];
    content.push({
        name: getName,
        count: getCount,
        price: getPrice,
        description: getDescription,
    });

    const jsonContent = JSON.stringify(content, null, 2);
    fs.mkdirSync(dirPath, {recursive: true});
    fs.writeFileSync(filePath, jsonContent);
}



function readFile(filePath) {
    if(fs.existsSync(filePath)){
        return fs.readFileSync(filePath);
    }
    return null;
}
const product = require("./state/data");
function readProduct(){
    console.log("--> Чтение товара")
    if(i>0){
        console.table(content);
    }else console.table(product);

}
module.exports = {
    addProduct,
    readProduct
}

