// importart módulo express
const express = require('express');

// função do express para manipular as rotas
const rotaE = express.Router();

// GET
// rota para utilizar o método GET para estudante
rotaE.get('/', (req, res) => {
    res.send('Você entrou na rota estudante')
})

// POST
// rota para utilizar o método POST para estudante
rotaE.post('/cadastro', (req, res) => {
    res.send('Você entrou na rota para o cadastro de um novo estudante');
});

// PUT
// rota para utilizar o método PUT para estudante
rotaE.put('/atualizacao', (req, res) => {
    res.send('Você entrou na rota para a atualização dos dados de um estudante');
});

// DELETE
// rota para utilizar o método DELETE para o estudante 
rotaE.delete('/cadastro:del', (req, res) => {
    res.send('Você entrou na rota para apagar os dados de um aluno');
});

module.exports = rotaE;