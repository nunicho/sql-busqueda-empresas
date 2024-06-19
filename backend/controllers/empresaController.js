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
    const empresa = await Empresa.findOne({
      where: {
        cuit: {
          [Op.eq]: cuit,
        },
      },
    });

    if (empresa) {
      res.json(empresa);
    } else {
      res
        .status(404)
        .json({ message: `Empresa con CUIT ${cuit} no encontrada` });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getEmpresas,
  getEmpresaByCUIT,
};
