const path = require("path");
const fs = require("fs");
let content = require('../state/data.json');

function getData(){
        return content;
}
 function setData(product){
        content.push(product);
}


module.exports={
    getData,
    setData,
}