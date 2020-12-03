const {getData} = require("./getData");

 function readProduct(){
    console.log("--> Чтение товара")

        console.table(getData());
}
module.exports = {
    readProduct
}