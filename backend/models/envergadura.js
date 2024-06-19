module.exports = (sequelize, DataTypes) => {
  const envergadura = sequelize.define(
    "Envergadura",
    {
      idEnvergadura: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      tipo_envergadura: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "envergadura",
      timestamps: false,
    }
  );

  return envergadura;
};
