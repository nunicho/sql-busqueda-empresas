const { DataTypes } = require("sequelize");
const sequelize = require("../util/database"); // asegúrate de tener una configuración adecuada para la conexión a la base de datos

const Rrhh = sequelize.define("rrhh", {
  idRrhh: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  num_socios: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  num_empleados: {
    type: DataTypes.TINYINT,
    allowNull: true,
  },
});

module.exports = Rrhh;
