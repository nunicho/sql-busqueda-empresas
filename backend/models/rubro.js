module.exports = (sequelize, DataTypes) => {
  const Rubro = sequelize.define(
    "Rubro",
    {
      idRubro: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      actividad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idSector: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "rubro",
      timestamps: false,
    }
  );

  Rubro.associate = (models) => {
    Rubro.belongsTo(models.Sector, {
      foreignKey: "idSector",
      as: "sector",
    });
  };

  return Rubro;
};
