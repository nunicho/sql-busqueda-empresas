  const db = require("../models");
  const Empresa = db.Empresa;
  const { Op } = require("sequelize");

  // Obtener todas las empresas
  const getEmpresas = async (req, res) => {
    try {
      const empresas = await Empresa.findAll();
      res.json(empresas);
    } catch (err) {
      res.status(500).send(err.message);
    }
  };

  // Buscar empresa por CUIT
  const getEmpresaByCUIT = async (req, res) => {
    const cuit = req.params.cuit;

    try {
      const empresa = await db.Empresa.findOne({
        where: { cuit: cuit },
        include: [
          {
            model: db.Envergadura,
            as: "envergadura",
            attributes: ["tipo_envergadura"],
          },
          {
            model: db.Rubro, // Incluye el modelo Rubro
            as: "rubro", // Alias con el que se asociará en la respuesta JSON
            attributes: ["actividad"], // Atributos del rubro que deseas incluir en la respuesta
          },
          {
            model: db.Banco, // Incluye el modelo Banco
            as: "banco", // Alias con el que se asociará en la respuesta JSON
            attributes: ["nombre_banco"], // Atributos del banco que deseas incluir en la respuesta
          },
          {
            model: db.Rrhh,
            as: "rrhh",
            attributes: ["num_socios", "num_empleados"],
          },
          {
            model: db.Asesor,
            as: "asesor",
            attributes: ["nombre_asesor"],
          },
          {
            model: db.Contacto,
            as: "contacto",
            attributes: ["telefono", "email", "web"],
          },

          {
            model: db.Representante,
            as: "representante",
            attributes: ["nombre_rep", "dni", "profesion"],
          },
          {
            model: db.Programa,
            as: "programa",
            attributes: ["nombre_programa", "descripcion", "legajo", "monto"],
          },
          {
            model: db.Ratio,
            as: "ratio",
            attributes: ["patneto", "margen", "roa", "roe", "endeudamiento"],
          },
          {
            model: db.Localizacion,
            as: "localizacion",
            attributes: ["nombre_calle", "numeracion_calle"],            
          },
        ],
      });

      if (empresa) {
        res.json(empresa);
      } else {
        res.status(404).json({ error: "Empresa no encontrada" });
      }
    } catch (error) {
      console.error("Error al buscar la empresa:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  };

  module.exports = {
    getEmpresas,
    getEmpresaByCUIT,
  };
