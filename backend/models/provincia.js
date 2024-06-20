module.exports = (sequelize, DataTypes) => {
  const Provincia = sequelize.define(
    "Provincia",
    {
      idProvincia: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_provincia: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "provincia",
      timestamps: false,
    }
  );

  return Provincia;
};
