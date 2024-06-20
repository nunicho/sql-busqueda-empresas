module.exports = (sequelize, DataTypes) => {
  const Banco = sequelize.define(
    "Banco",
    {
      idBanco: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_banco: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      tableName: "bancos", 
      timestamps: false, 
    }
  );

  return Banco;
};
