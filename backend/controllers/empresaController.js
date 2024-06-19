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
