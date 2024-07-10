const sequelize = require('sequelize');

const connection = new sequelize("aula0407", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  define: {
    timestamps: false, // para não utilizar campos created_at e updated_at
    freezeTableName: true // para não adicionar o "s" no nome das tabelas
  }
});

connection.authenticate().then(() => {
    console.log('Conexão estabelecida com o banco de dados.');
  }).catch((error) => {
  console.error('Erro ao conectar com o banco de dados:', error);
  });

  module.exports = connection