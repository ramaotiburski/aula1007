const DataTypes = require("sequelize");
const db = require("../config/dbconnection")

const Pedido = db.define('pedido', {
    
  
  
  });

(async () => {
    try {
        await Pedido.sync({ force: false }); //{ force: true }
        console.log('Tabela de Pedido criada com sucesso.');

    } catch (error) { 
        console.error('Não foi possível conectar-se ao banco de dados:', error);
    }
})();

module.exports = Pedido