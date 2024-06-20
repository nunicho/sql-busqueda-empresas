module.exports = (sequelize, DataTypes) => {
  const Dep = sequelize.define(
    "Dep",
    {
      idDep: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_dep: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      telefono_dep: {
        type: DataTypes.STRING(20),
      },
      email_dep: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "dep",
      timestamps: false,
    }
  );
  return Dep;
};
