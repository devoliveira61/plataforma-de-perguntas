const Sequelize = require("sequelize");

const connection = new Sequelize(
  "plataformadeperguntas",
  "root",
  "zannogames",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = connection;