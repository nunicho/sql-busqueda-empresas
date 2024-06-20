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
db.Rubro = require("./rubro")(sequelize, DataTypes); 
db.Banco = require("./banco")(sequelize, DataTypes); 
db.Rrhh = require("./rrhh")(sequelize, DataTypes); 
db.Asesor = require("./asesor")(sequelize, DataTypes); 
db.Contacto = require("./contacto")(sequelize, DataTypes);
db.Representante = require("./representante")(sequelize, DataTypes);
db.Programa = require("./programa")(sequelize, DataTypes);
db.Ratio = require("./ratio")(sequelize, DataTypes);
db.Localizacion = require("./localizacion")(sequelize, DataTypes);

db.Dep = require("./dep")(sequelize, DataTypes);
db.Sector = require("./sector")(sequelize, DataTypes);
db.Linea = require("./linea")(sequelize, DataTypes); 
db.Estado = require("./estado")(sequelize, DataTypes); 
db.Ciudad = require("./ciudad")(sequelize, DataTypes);
db.Provincia = require("./provincia")(sequelize, DataTypes); 
db.Pais = require("./pais")(sequelize, DataTypes); 


//Se definen las asociaciones
db.Empresa.associate(db);
db.Asesor.associate(db);
db.Rubro.associate(db);
db.Programa.associate(db);
db.Localizacion.associate(db);
db.Representante.associate(db);


module.exports = db;
