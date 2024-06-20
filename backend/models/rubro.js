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


  return Rubro;
};
