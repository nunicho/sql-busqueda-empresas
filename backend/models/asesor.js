module.exports = (sequelize, DataTypes) => {
  const Asesor = sequelize.define(
    "Asesor",
    {
      idAsesor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_asesor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idDep: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "asesor",
      timestamps: false,
    }
  );
  return Asesor;
};
