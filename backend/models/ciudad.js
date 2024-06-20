module.exports = (sequelize, DataTypes) => {
  const Ciudad = sequelize.define(
    "Ciudad",
    {
      idCiudad: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_ciudad: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "ciudad",
      timestamps: false,
    }
  );

  return Ciudad;
};
