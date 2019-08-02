const fs = require('fs');
const csv = require('csv-parser');

const { join } = require('path');


const csvFileName = join(__dirname, '../../data/products.csv');
const readStream = fs.createReadStream(csvFileName, {
    encoding: 'utf8'
});

let csvData = [];

module.exports = {

    getProdutos: (req, res) => {
        readStream
            .pipe(csv())
            .on('data', (row) => {
                csvData.push(row);
            })
            .on('end', () => {
                res.status(200).send(csvData);
            });
    },

    getProdutoByID: (req, res) => {
        readStream
            .pipe(csv())
            .on('data', (row) => {
                if (req.query.id) {
                    search = (key, inputArray) => {
                        for (let i = 0; i < csvData.length; i++) {
                            if (csvData.id === req.query.id) {
                                return inputArray[i];
                            }
                        }
                    }
                }
                // console.log(row.id);
                // if(req.query.id == row.id);
                // csvData.push(row)
            })
            .on('end', () => {
                res.status(200).send(csvData);
            });
        res.send(`OK`);
    },

    createProduto: (req, res) => {
        fs.appendFile(csvFileName, {
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