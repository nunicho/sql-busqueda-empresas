module.exports = (sequelize, DataTypes) => {
  const Ratio = sequelize.define(
    "Ratio",
    {
      idRatio: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      patneto: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      margen: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false,
      },
      roa: {
        type: DataTypes.DECIMAL(5, 2),
      },
      roe: {
        type: DataTypes.DECIMAL(5, 2),
      },
      endeudamiento: {
        type: DataTypes.DECIMAL(5, 2),
      },
    },
    {
      tableName: "ratio",
      timestamps: false,
    }
  );

  return Ratio;
};
