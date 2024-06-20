const db = require("../utils/sequelize");
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
          model: db.Rubro, 
          as: "rubro", 
          attributes: ["actividad"], 
          include: [
            {
              model: db.Sector, 
              as: "sector",
              attributes: ["nombre_sector"], 
            },
          ],
        },
        {
          model: db.Banco, 
          as: "banco", 
          attributes: ["nombre_banco"], 
        },
        {
          model: db.Rrhh,
          as: "rrhh",
          attributes: ["num_socios", "num_empleados"],
        },
        {
          model: db.Asesor,
          as: "asesor",
          include: [
            {
              model: db.Dep,
              as: "departamento",
              attributes: ["nombre_dep", "telefono_dep", "email_dep"],
            },
          ],
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
          include: [
            {
              model: db.Pais,
              as: "pais",
              attributes: ["nombre_pais"], 
            },
          ],
        },
        {
          model: db.Programa,
          as: "programa",
          attributes: ["nombre_programa", "descripcion", "legajo", "monto"],
          include: [
            {
              model: db.Linea,
              as: "linea",
              attributes: ["nombre_linea"],
            },
            {
              model: db.Estado,
              as: "estado",
              attributes: ["nombre_estado"],
            },
          ],
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
          include: [
            {
              model: db.Ciudad,
              as: "ciudad",
              attributes: ["nombre_ciudad"],
            },
            {
              model: db.Provincia,
              as: "provincia",
              attributes: ["nombre_provincia"],
            },
            {
              model: db.Pais,
              as: "pais",
              attributes: ["nombre_pais"],
            },
          ],
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
