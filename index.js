const readline = require("readline");
const {changeProduct} = require("./utils/changeProduct");
const {deleteProduct} = require("./utils/deleteProduct");
const {addProduct ,readProduct} = require("./utils/addProduct");
const get = require("./utils/getInput");
const express = require("express");
const controllers = require('./controllers');
const path = require('path');
startQuiz();

async function startQuiz() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });
        rl.setMaxListeners(400);
    console.log(
        "|___________________|\n" +
        "| 1. Список товаров |\n" +
        "| 2. Добавить товар |\n" +
        "| 3. Изменить товар |\n" +
        "| 4. Удлить товар   |\n" +
        "| 5.    Выход       |\n" +
        "|___________________|"
    );
    let answer = await get.getInput(rl);
    switch (parseInt(answer)) {
        case 1:
            readProduct();
            return startQuiz();
        case 2:
            console.log("--> Добавление товара\n");
            await addProduct();
            return startQuiz();
        case 3:
            console.log(" id товара под полное изменение");
            await changeProduct();
            return startQuiz();
        case 4:
            console.log("индекс товара на удаление");
            await deleteProduct();

            return startQuiz();
        case 5:
            console.log("заходи еще!")
            exit(rl);
            break;
        default:
            console.log("not-founded");
    }
    exit(rl);
}
const PORT = 3000;
const server = express();
server.set('view engine', 'ejs');
server.set('views', path.resolve(__dirname, 'UI'));
server.use(express.static(path.resolve(__dirname, 'style')));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(controllers);
function exit(rl) {
    rl.close();
}
