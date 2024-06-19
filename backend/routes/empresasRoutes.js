const express = require("express");
const router = express.Router();
const empresaController = require("../controllers/empresaController");

// Ruta para obtener todas las empresas
router.get("/empresas", empresaController.getEmpresas);

// Ruta para obtener una empresa por CUIT
router.get("/empresas/:cuit", empresaController.getEmpresaByCUIT);

module.exports = router;
