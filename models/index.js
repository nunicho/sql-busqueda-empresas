const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "proyecto_alonsomauricio",
  "coderhouse-scorpion",
  "coderhouse",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Empresa = require("./empresa")(sequelize, DataTypes);

module.exports = db;
