module.exports = (sequelize, DataTypes) => {
  const Linea = sequelize.define(
    "Linea",
    {
      idLinea: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_linea: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "linea",
      timestamps: false,
    }
  );

  return Linea;
};
