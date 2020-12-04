const path = require("path");
const fs = require("fs");
let content = require('../state/data.json');

function getData(){
        return content;
}
 function setData(product){
        content.push(product);
}

 function updateJSONData(){
     let dirPath = path.resolve(__dirname, "state");
     const filePath = path.resolve(dirPath, "data.json");
     const jsonContent = JSON.stringify(content, null, 2);
     fs.mkdirSync(dirPath, {recursive: true});
     fs.writeFileSync(filePath, jsonContent);
}

module.exports={
    getData,
    setData,
}