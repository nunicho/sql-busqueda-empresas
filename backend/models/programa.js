module.exports = (sequelize, DataTypes) => {
  const Programa = sequelize.define(
    "Programa",
    {
      idPrograma: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_programa: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
      legajo: {
        type: DataTypes.STRING(20),
      },
      monto: {
        type: DataTypes.INTEGER,
      },
      idEstado: {
        type: DataTypes.INTEGER,
      },
      idLinea: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "programa",
      timestamps: false,
    }
  );

  Programa.associate = (models) => {
    Programa.belongsTo(models.Linea, {
      foreignKey: "idLinea",
      as: "linea",
    });

    Programa.belongsTo(models.Estado, {
      foreignKey: "idEstado",
      as: "estado",
    });
  };

  return Programa;
};
