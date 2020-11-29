const fs = require("fs");
const path = require("path");
const readline = require("readline");

async function addProduct() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
    console.log("Введите имя товара");
    let getName = await getInput(rl);
    console.log("Введите кол-во товара");
    let getCount = await getInput(rl);
    console.log("Введите цену товара");
    let getPrice = await getInput(rl);
    console.log("Введите описание товара");
    let getDescription = await getInput(rl);

    let dirPath = path.resolve(__dirname, "state");
    const filePath = path.resolve(dirPath, "data.json");
    const file = readFile(filePath);
    const content = file && JSON.parse(file) || [];
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


function getInput(rl) {
    return new Promise(resolve => {
        rl.question(">", answer => {
            resolve(answer);
        })
    })
}
function readFile(filePath) {
    if(fs.existsSync(filePath)){
        return fs.readFileSync(filePath);
    }
    return null;
}
module.exports = {
    addProduct
}