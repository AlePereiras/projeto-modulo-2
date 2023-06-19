const express = require('express');
const Aluno = require('./alunoModel');
const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    res.send('Get all')
})

router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

router.get('/matricula/:matricula', (req, res) => {
    res.send(req.params.matricula)
})

router.post('/', (req, res) => {
    res.send(req.body)
})

router.put('/:id', (req, res) => {
    res.send(req)
})

router.delete('/:id', (req, res) => {
    res.status(204).send(req)
})

module.exports = router