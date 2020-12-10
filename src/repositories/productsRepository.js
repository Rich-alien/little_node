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
    async edit(data) {
        const products = await this.getAll();
        const idProduct = products[data.id];
        const updateProduct = {
            id: idProduct.id,
            name: data.name,
            count: data.count,
            price: data.price,
            description: data.description,
        };
        products[data.id] = updateProduct;
        await writeJsonFile(FILE_PATH, products);
        return idProduct;
    },
    async partialEdit(data) {
        debugger;
        const products = await this.getAll();
        const idProduct = products[data.id];
        console.log(data);
        const updateProduct = {
            id: idProduct.id,
            name: data.name !== "" ? data.name : products.name,
            count: data.count !== "" ? +data.count : products.count,
            price: data.price !== "" ? +data.price : products.price,
            description: data.name !== "" ? data.description : idProduct.description,
        };
        products[data.id] = updateProduct;
        await writeJsonFile(FILE_PATH, products);
        return idProduct;
    }
};

module.exports = productRepository;
