module.exports = (sequelize, DataTypes) => {
  const Localizacion = sequelize.define(
    "Localizacion",
    {
      idLocalizacion: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_calle: {
        type: DataTypes.STRING(50),
      },
      numeracion_calle: {
        type: DataTypes.INTEGER,
      },
      idCiudad: {
        type: DataTypes.INTEGER,
      },
      idProvincia: {
        type: DataTypes.INTEGER,
      },
      idPais: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "localizacion",
      timestamps: false,
    }
  );


  Localizacion.associate = (models) => {
 
    Localizacion.belongsTo(models.Ciudad, {
      foreignKey: "idCiudad",
      as: "ciudad",
    });

  
    Localizacion.belongsTo(models.Provincia, {
      foreignKey: "idProvincia",
      as: "provincia",
    });

   
    Localizacion.belongsTo(models.Pais, {
      foreignKey: "idPais",
      as: "pais",
    });
  };

  return Localizacion;
};
