const Pessoa = require("../models/pessoa")
const Endereco = require("../models/endereco")
const db = require("../config/dbconnection")

Pessoa.hasOne(Endereco,{onDelete:"CASCADE"})
Endereco.belongsTo(Pessoa,{foreingKey:"pessoaId"})

db.sync()

module.exports = {Pessoa, Endereco}