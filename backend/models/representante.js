module.exports = (sequelize, DataTypes) => {
  const Representante = sequelize.define(
    "Representante",
    {
      idRepresentante: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_rep: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      dni: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      profesion: {
        type: DataTypes.STRING(50),
      },
      nacionalidad: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "representante",
      timestamps: false,
    }
  );

  Representante.associate = (models) => {
    Representante.belongsTo(models.Pais, {
      foreignKey: "nacionalidad",
      as: "pais",
    });
  };

  return Representante;
};
