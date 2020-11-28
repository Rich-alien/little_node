const fs = require('fs'),
    path = require('path'),
    product = require('./state/data')
// let json;
// // let json = '[{"title":"title1","description":"description1"},{"title":"title2","description":"description2"}]' тут будет наши данные
// console.table(JSON.parse(json));
// чтение данных
function readFile(){
    console.log("--> Чтение товара")
    console.table(product.product);
}
module.exports={
    readFile,
}