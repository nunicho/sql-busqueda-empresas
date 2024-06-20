module.exports = (sequelize, DataTypes) => {
  const Empresa = sequelize.define(
    "Empresa",
    {
      idEmpresa: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_soc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cuit: {
        type: DataTypes.STRING(13),
        allowNull: false,
      },
      fecha_contrato: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      idEnvergadura: {
        type: DataTypes.INTEGER,
      },
      fecha_i_m_e: {
        type: DataTypes.DATE,
      },
      idRubro: {
        type: DataTypes.INTEGER,
      },
      idBanco: {
        type: DataTypes.INTEGER,
      },
      idRrhh: {
        type: DataTypes.INTEGER,
      },
      idAsesor: {
        type: DataTypes.INTEGER,
      },
      idContacto: {
        type: DataTypes.INTEGER,
      },
      idRepresentante: {
        type: DataTypes.INTEGER,
      },
      idPrograma: {
        type: DataTypes.INTEGER,
      },
      idRatio: {
        type: DataTypes.INTEGER,
      },
      idLocalizacion: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "empresa",
      timestamps: false,
    }
  );

  Empresa.associate = (models) => {
    Empresa.belongsTo(models.Envergadura, {
      foreignKey: "idEnvergadura",
      as: "envergadura",
    });

    Empresa.belongsTo(models.Rubro, {
      foreignKey: "idRubro",
      as: "rubro",
    });

     Empresa.belongsTo(models.Banco, {
       foreignKey: "idBanco",
       as: "banco",
     });

     Empresa.belongsTo(models.Rrhh, {
       foreignKey: "idRrhh",
       as: "rrhh",
     });

  };

  return Empresa;
};
