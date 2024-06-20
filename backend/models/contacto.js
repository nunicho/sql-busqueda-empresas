module.exports = (sequelize, DataTypes) => {
  const Contacto = sequelize.define(
    "Contacto",
    {
      idContacto: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      telefono: {
        type: DataTypes.STRING(20),
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      web: {
        type: DataTypes.STRING(100),
      },
    },
    {
      tableName: "contacto",
      timestamps: false,
    }
  );

  return Contacto;
};
