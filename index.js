const readline = require("readline");
const {changeProduct} = require("./changeProduct");
const {deleteProduct} = require("./deleteProduct");
const {addProduct} = require("./addProduct");
const {readFile} = require("./readProduct");
const get = require("./getInput");
startQuiz();

async function startQuiz() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    let answer;
    console.log(
        "|___________________|\n" +
        "| 1. Список товаров |\n" +
        "| 2. Добавить товар |\n" +
        "| 3. Изменить товар |\n" +
        "| 4. Удлить товар   |\n" +
        "| 5.    Выход       |\n" +
        "|___________________|"
    );
    answer = await get.getInput(rl);
    switch (parseInt(answer)) {
        case 1:
            readFile();
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
            //https://decodeit.ru/binary
            console.log("11010000 10110010 11010001 10001011 100000 11010001 10000010 11010000" +
                " 10111110 11010001 10000111 11010000 10111101 11010000 10111110 100000 11010000 " +
                "10110010 11010000 10110010 11010000 10110101 11010000 10111011 11010000 10111000" +
                " 100000 11010000 10111101 11010001 10000011 11010000 10110110 11010000 10111101 " +
                "11010001 10000011 11010001 10001110 100000 11010001 10000110 11010000 10111000 11010001 " +
                "10000100 11010001 10000000 11010001 10000011 100000 111111");
    }
    exit(rl);
}

function exit(rl) {
    rl.close();
}

// function getInput(rl) {
//     return new Promise(resolve => {
//         rl.question("> ", answer => {
//             resolve(answer);
//         })
//     })
//
// }