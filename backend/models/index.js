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

// Importa y define los modelos
db.Empresa = require("./empresa")(sequelize, DataTypes);
db.Envergadura = require("./envergadura")(sequelize, DataTypes);
db.Rubro = require("./rubro")(sequelize, DataTypes); // Importa el modelo Rubro
db.Banco = require("./banco")(sequelize, DataTypes); // Importa y define el modelo Banco
db.Rrhh = require("./rrhh")(sequelize, DataTypes); // Importa y define el modelo Rrhh


// Define las asociaciones si es necesario
db.Empresa.associate(db);


module.exports = db;
