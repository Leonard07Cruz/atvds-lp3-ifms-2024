// importar módulo express
const express = require('express');

// função do express para manipular as rotas
const rotaP = express.Router();

// GET
// rota para utilizar o método GET para professor
rotaP.get('/', (req, res) => {
    res.send('Você entrou na rota professor');
})

// POST
// rota para utilizar o método POST para professor
rotaP.post('/cadastro', (req, res) => {
    res.send('Você entrou na rota para o cadastro de um novo professor');
});

// PUT
// rota para utilizar o método PUT para professor
rotaP.put('/atualizacao', (req, res) => {
    res.send('Você entrou na rota para a atualização dos dados de um professor');
});

// DELETE
// rota para utilizar o método DELETE para o professor 
rotaP.delete('/cadastro:del', (req, res) => {
    res.send('Você entrou na rota para deletar os dados de um professor');
});

module.exports = rotaP;