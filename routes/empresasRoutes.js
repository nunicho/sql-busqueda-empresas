const express = require("express");
const router = express.Router();
const empresaController = require("../controllers/empresaController");

// Ruta para obtener los datos de las empresas
router.get("/empresas", empresaController.getEmpresas);

module.exports = router;
