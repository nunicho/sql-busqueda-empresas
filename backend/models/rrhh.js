module.exports = (sequelize, DataTypes) => {
const Rrhh = sequelize.define(
  "Rrhh",
 {
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
return Rrhh;

}



