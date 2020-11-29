const product = require("./state/data");
function readFile(){
    console.log("--> Чтение товара")
    console.table(product);
}
module.exports={
    readFile,
}