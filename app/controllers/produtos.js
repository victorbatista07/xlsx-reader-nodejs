const fs = require('fs');
const csv = require('csvtojson');
const csvWriter = require('csv-write-stream');

const {
    join
} = require('path');

const csvFileName = join(__dirname, '../../data/products.csv');

module.exports = {

    getProdutos: (req, res) => {
        try {
            csv()
                .fromFile(csvFileName)
                .then((jsonObj) => {
                    res.status(200).send(jsonObj);
                });
        } catch (e) {
            throw e;
        }
    },

    getProdutoByID: (req, res) => {
        try {
            csv()
                .fromFile(csvFileName)
                .then((jsonObj) => {
                    for (i = 0; i < jsonObj.length; i++) {
                        if (jsonObj[i].ID === req.params.id) {
                            return res.status(200).send(jsonObj[i]);
                        }
                    }
                    res.status(404).send("ID Not Found");
                })
        } catch (e) {
            throw e;
        }
    },

    createProduto: (req, res) => {
        try {
            let writer = csvWriter({sendHeaders: false});
            let inputCsv = {};
            csv()
                .fromFile(csvFileName)
                .then((jsonObj) => {
                    inputCsv = {
                        id: jsonObj.length + 1,
                        nome: req.body.nome,
                        preco: req.body.preco,
                    }
                    writer.pipe(fs.createWriteStream(csvFileName, {
                        flags: 'a'
                    }))
                    writer.write(inputCsv, {
                        sendHeaders: false
                    })
                    writer.end()
                    res.status(201).send('Produto criado');
                });
        } catch (e) {
            throw e;
        }
    }
};