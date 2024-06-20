module.exports = (sequelize, DataTypes) => {
  const Rrhh = sequelize.define(
    "Rrhh",
    {
      idRrhh: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      num_socios: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
      num_empleados: {
        type: DataTypes.TINYINT,
      },
    },
    {
      tableName: "rrhh",
      timestamps: false,
    }
  );
  return Rrhh;
};