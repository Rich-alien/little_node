//добавление json эллемент
const fs = require('fs');
const path = require('path');
const readline = require('readline');
 function addProduct() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


    console.log("--> Добавление товара");
    console.log("введите имя твовара");
    let getName =  getInput(rl);
    console.log("введите кол-во твовара");
    let getCount =  getInput(rl);
    console.log("введите цену твовара");
    let getPrice =  getInput(rl);
    console.log("введите описание твовара");
    let getDescription =  getInput(rl);
    console.log(data);
    const data = {
        name : getName,
        count : getCount,
        price : getPrice,
        description : getDescription,
    }
    fs.writeFile(__dirname,'data.json',JSON.stringify(data.product),(err )=>{
        if (err) console.log(err);
    })
    exit(rl);
}

function exit(rl) {
    rl.close();
}

function getInput(rl) {
    return new Promise(resolve => {
        rl.question("Введите имя товара", answer => {
            resolve(answer);
        })
    })
}
module.exports = {
    addProduct
}