const readline = require("readline");
const {changeProduct} = require("./changeProduct");
const {deleteProduct} = require("./deleteProduct");
const {addProduct} = require("./addProduct");
const get = require("./getInput");
const {setJSONData} = require("./getData");
const {readProduct} = require("./readProduct");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
startQuiz();
async function startQuiz() {
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

function exit(rl) {
    setJSONData()
    rl.close();
}
