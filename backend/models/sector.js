module.exports = (sequelize, DataTypes) => {
  const Sector = sequelize.define(
    "Sector",
    {
      idSector: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_sector: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      tableName: "sector",
      timestamps: false,
    }
  );

  return Sector;
};
