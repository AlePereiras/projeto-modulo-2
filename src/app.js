const express = require('express');
const db = require('./db');
const alunoRouter = require('./alunoRouter');
const { database } = require('pg/lib/defaults');

const app = express();
app.use(express.json());

app.use('/aluno', alunoRouter)

app.listen(3000, async() => {
    const resultDb = await db.sync({alter: true})
    console.log('Servidor Iniciado')
})