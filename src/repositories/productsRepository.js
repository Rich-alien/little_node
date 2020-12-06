const path = require('path');
const uuid = require('uuid');
const {readJsonFile, writeJsonFile} = require('../utils/file.utils');

const FILE_PATH = path.resolve(path.dirname(require.main.filename), '..', 'state', 'data.json');

const productRepository = {

    async getAll() {
        return await readJsonFile(FILE_PATH) || [];
    },

    async get(id) {
        const products = await this.getAll();
        return products.find(product => product.id === id);
    },

    async add(product) {
        const products = await this.getAll();
        const newProduct = {
            id: uuid.v1(),
            ...product
        };
        products.push(newProduct);
        await writeJsonFile(FILE_PATH, products);
        return newProduct;
    },
    async remove(id) {
        const products = await this.getAll();
        products.splice(id, 1);
        await writeJsonFile(FILE_PATH, products);
        return console.log("удален объект с индексом " + id);
    },
    async edit(id){
        const products = await this.getAll();
    }
};

module.exports = productRepository;
