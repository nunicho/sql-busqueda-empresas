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
        allowNull: false,
      },
    },
    {
      tableName: "asesor",
      timestamps: false,
    }
  );

  Asesor.associate = (models) => {
    Asesor.belongsTo(models.Dep, {
      foreignKey: "idDep",
      as: "departamento",
    });
  };

  return Asesor;
};
