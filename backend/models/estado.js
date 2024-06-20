module.exports = (sequelize, DataTypes) => {
  const Estado = sequelize.define(
    "Estado",
    {
      idEstado: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_estado: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
    },
    {
      tableName: "estado",
      timestamps: false,
    }
  );

  return Estado;
};

