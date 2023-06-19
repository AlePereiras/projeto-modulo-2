const {Sequelize, DataTypes} = require('sequelize');
const db = require('./db');


const Aluno = db.define('aluno', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: DataTypes.DATEONLY
    },
    email_institucional: {
        type: DataTypes.STRING
    },
    matricula: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'aluno', 
    timestamps: false
})

module.exports = Aluno;

