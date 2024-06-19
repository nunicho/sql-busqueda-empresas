const db = require("../models");
const Empresa = db.Empresa;

const getEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.findAll();
    res.json(empresas);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  getEmpresas,
};
