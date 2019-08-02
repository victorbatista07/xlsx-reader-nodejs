const fs = require('fs');
const csv = require('csv-parser');
// const csvStringify = require('csv-stringify');

const {
    join
} = require('path');


const csvFileName = join(__dirname, '../../data/products.csv');
const readStream = fs.createReadStream(csvFileName);
let csvData = [];

module.exports = {

    getProdutos: (req, res) => {
        readStream
            .pipe(csv())
            .on('data', (row) => {
                csvData.push(row)
            })
            .on('end', () => {
                res.status(200).send(csvData);
            });
    },

    getProdutosByID: (req, res) => {
        // req.query.id;
        res.send(`OK`);
    },

    createProduto: (req, res) => {
        fs.appendFile(productCsv, {
            id: req.query.id,
            nome: req.query.name,
            preco: req.query.preco
        }, 'utf8', function (err) {
            if (err) {
                res.send(500, err.message)
            }
        });
        res.send(201, "Produto criado!");

    },


}