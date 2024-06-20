const express = require("express");
const cors = require("cors");
const db = require("./backend/utils/sequelize");
const empresaRoutes = require("./backend/routes/empresasRoutes");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static("public"));

// Rutas
app.use("/api", empresaRoutes);

// Sincronización de la base de datos
db.sequelize
  .sync()
  .then(() => {
    console.log("Base de datos sincronizada");
  })
  .catch((err) => {
    console.error("Error al sincronizar la base de datos:", err);
  });

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
