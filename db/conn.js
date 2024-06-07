const { Sequelize } = require("sequelize");

const pool = new Sequelize("nodemvc", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  pool.authenticate();
  console.log("conexãp com o banco de dados realizada com sucesso.");
} catch (err) {
  console.log("não foi possivel conectar ao banco de dados.");
}
module.exports = pool;
