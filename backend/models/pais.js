module.exports = (sequelize, DataTypes) => {
  const Pais = sequelize.define(
    "Pais",
    {
      idPais: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_pais: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "pais",
      timestamps: false,
    }
  );

  return Pais;
};
