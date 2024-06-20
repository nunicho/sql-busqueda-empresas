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
db.Asesor = require("./asesor")(sequelize, DataTypes); // Importa y define el modelo Asesor
db.Contacto = require("./contacto")(sequelize, DataTypes);
db.Representante = require("./representante")(sequelize, DataTypes);
db.Programa = require("./programa")(sequelize, DataTypes);
db.Ratio = require("./ratio")(sequelize, DataTypes);
db.Localizacion = require("./localizacion")(sequelize, DataTypes);

db.Dep = require("./dep")(sequelize, DataTypes);
db.Sector = require("./sector")(sequelize, DataTypes); // Importa y define el modelo Sector
db.Linea = require("./linea")(sequelize, DataTypes); 
db.Estado = require("./estado")(sequelize, DataTypes); 
db.Ciudad = require("./ciudad")(sequelize, DataTypes); // Importa y define el modelo Ciudad
db.Provincia = require("./provincia")(sequelize, DataTypes); // Importa y define el modelo Provincia
db.Pais = require("./pais")(sequelize, DataTypes); // Importa y define el modelo Pais


// Define las asociaciones si es necesario
db.Empresa.associate(db);
db.Asesor.associate(db);
db.Rubro.associate(db);
db.Programa.associate(db);
db.Localizacion.associate(db);
db.Representante.associate(db);


module.exports = db;
