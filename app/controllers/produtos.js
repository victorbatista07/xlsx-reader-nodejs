const fs = require('fs');
const csv = require('csvtojson');
const {
    Parser
} = require('json2csv');

const {
    join
} = require('path');

const csvFileName = join(__dirname, '../../data/products.csv');

module.exports = {

    getProdutos: (req, res) => {
        csv()
            .fromFile(csvFileName)
            .then((jsonObj) => {
                res.status(200).send(jsonObj);
            });
    },

    getProdutoByID: (req, res) => {
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
    },
};