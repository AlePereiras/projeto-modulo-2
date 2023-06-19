const {Sequelize} = require('sequelize');

const dbSequelize = new Sequelize('APIalunos', 'aluno.ifal', 'aluno.ifal', {
    dialect:'mysql', host:'localhost'
})

module.exports = dbSequelize;