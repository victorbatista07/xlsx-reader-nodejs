const app = require('express').Router();
const { join } = require('path');

app.get('/produtos', (req, res) =>
    require(join(__dirname, '../controllers/produtos')).getProdutos(req, res));

    // app.get('/produto/${id}', (req, res) =>
    // require(join(__dirname, '../controllers/produtos')).getProdutoById(req, res));


    // app.post('/produto/add', (req, res) =>
    // require(join(__dirname, '../controllers/produtos')).createProduto(req, res));

//     GET /produtos
// Retorna um JSON com todos produtos
// ● GET /produto/{ID}
// Retorna um JSON com o produto de {ID}
// ● POST /produto/add
// Recebe um JSON (padrão abaixo) com os dados do produto e cadastra no
// arquivo CSV.
// {
// nome: "nome",
// preco: 1.11
// }

module.exports = app;