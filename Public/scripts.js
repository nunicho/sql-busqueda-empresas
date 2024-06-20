// Función para obtener los datos de las empresas por CUIT
async function fetchEmpresaByCUIT(cuit) {
  try {
    const response = await fetch(`http://localhost:3000/api/empresas/${cuit}`);
    const empresa = await response.json();

    if (empresa) {
      const resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerHTML = `
                 <div class="container">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">${empresa.nombre_soc}</h2>
        
        <h5><i class="bi bi-building"></i> Datos de la empresa</h5>
        <p class="card-text">CUIT: ${empresa.cuit}</p>
        <p class="card-text">Tipo: ${empresa.tipo}</p>
        <p class="card-text">Fecha de Contrato: ${new Date(
          empresa.fecha_contrato
        ).toLocaleDateString()}</p>
        <p class="card-text">Envergadura: ${
          empresa.envergadura
            ? empresa.envergadura.tipo_envergadura
            : "No especificada"
        }</p>
        <p class="card-text">Rubro: ${
          empresa.rubro ? empresa.rubro.actividad : "No especificada"
        }</p>
        <p class="card-text">Sector: ${
          empresa.rubro && empresa.rubro.sector
            ? empresa.rubro.sector.nombre_sector
            : "No especificado"
        }</p>
        
        <h5><i class="bi bi-person"></i> Asesor y DEP responsables</h5>
        <p class="card-text">Asesor: ${
          empresa.asesor ? empresa.asesor.nombre_asesor : "No especificada"
        }</p>
        <p class="card-text">DEP: ${
          empresa.asesor && empresa.asesor.departamento
            ? empresa.asesor.departamento.nombre_dep
            : "No especificado"
        }</p>
        
        <h5><i class="bi bi-bank"></i> Banco con el que opera</h5>
        <p class="card-text">Banco: ${
          empresa.banco ? empresa.banco.nombre_banco : "No especificada"
        }</p>
        
        <h5><i class="bi bi-people"></i> Recursos humanos</h5>
        <p class="card-text">Num. Socios: ${
          empresa.rrhh ? empresa.rrhh.num_socios : "No especificada"
        }</p>
        <p class="card-text">Num. Empleados: ${
          empresa.rrhh ? empresa.rrhh.num_empleados : "No especificada"
        }</p>
        
        <h5><i class="bi bi-person-badge"></i> Representante Legal</h5>
        <p class="card-text">Nombre: ${
          empresa.representante.nombre_rep
            ? empresa.representante.nombre_rep
            : "No especificada"
        }</p>
        <p class="card-text">DNI: ${
          empresa.representante.dni
            ? empresa.representante.dni
            : "No especificada"
        }</p>
        <p class="card-text">Profesión: ${
          empresa.representante.profesion
            ? empresa.representante.profesion
            : "No especificada"
        }</p>
        <p class="card-text">Nacionalidad: ${
          empresa.representante && empresa.representante.pais
            ? empresa.representante.pais.nombre_pais
            : "No especificado"
        }</p>
        
        <h5><i class="bi bi-award"></i> Programa vigente</h5>
        <p class="card-text">Nombre programa: ${
          empresa.programa.nombre_programa
            ? empresa.programa.nombre_programa
            : "No especificada"
        }</p>
        <p class="card-text">Línea: ${
          empresa.programa.linea && empresa.programa.linea.nombre_linea
            ? empresa.programa.linea.nombre_linea
            : "No especificada"
        }</p>
        <p class="card-text">Estado: ${
          empresa.programa.estado && empresa.programa.estado.nombre_estado
            ? empresa.programa.estado.nombre_estado
            : "No especificado"
        }</p>
        <p class="card-text">Descripcion: ${
          empresa.programa.descripcion
            ? empresa.programa.descripcion
            : "No especificada"
        }</p>
        <p class="card-text">Legajo: ${
          empresa.programa.legajo ? empresa.programa.legajo : "No especificada"
        }</p>
        <p class="card-text">Monto: PESOS ${
          empresa.programa.monto ? empresa.programa.monto : "No especificada"
        }</p>
        
        <h5><i class="bi bi-graph-up"></i> Datos Financieros</h5>
        <p class="card-text">Patrimonio neto: ${
          empresa.ratio.patneto ? empresa.ratio.patneto : "No especificada"
        }</p>
        <p class="card-text">Margen: ${
          empresa.ratio.margen ? empresa.ratio.margen : "No especificada"
        }</p>
        <p class="card-text">ROA: ${
          empresa.ratio.roa ? empresa.ratio.roa : "No especificada"
        }</p>
        <p class="card-text">ROE: ${
          empresa.ratio.roe ? empresa.ratio.roe : "No especificada"
        }</p>
        <p class="card-text">Endeudamiento: ${
          empresa.ratio.endeudamiento
            ? empresa.ratio.endeudamiento
            : "No especificada"
        }</p>
        
        <h5><i class="bi bi-geo-alt"></i> Localización</h5>
        <p class="card-text">Calle: ${
          empresa.localizacion.nombre_calle
            ? empresa.localizacion.nombre_calle
            : "No especificada"
        }</p>
        <p class="card-text">N°: ${
          empresa.localizacion.numeracion_calle
            ? empresa.localizacion.numeracion_calle
            : "No especificada"
        }</p>
        <p class="card-text">Ciudad: ${
          empresa.localizacion.ciudad
            ? empresa.localizacion.ciudad.nombre_ciudad
            : "No especificada"
        }</p>
        <p class="card-text">Provincia: ${
          empresa.localizacion.provincia
            ? empresa.localizacion.provincia.nombre_provincia
            : "No especificada"
        }</p>
        <p class="card-text">País: ${
          empresa.localizacion.pais
            ? empresa.localizacion.pais.nombre_pais
            : "No especificada"
        }</p>
        
        <h5><i class="bi bi-telephone"></i> Contacto</h5>
        <p class="card-text">Teléfono: ${
          empresa.contacto.telefono
            ? empresa.contacto.telefono
            : "No especificada"
        }</p>
        <p class="card-text">Email: ${
          empresa.contacto.email ? empresa.contacto.email : "No especificada"
        }</p>
        <p class="card-text">Web: ${
          empresa.contacto.web ? empresa.contacto.web : "No especificada"
        }</p>   
      </div>
    </div>
  </div>
            `;
    } else {
      const resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerHTML =
        '<p class="text-danger">No se encontró la empresa con el CUIT ingresado.</p>';
    }
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

document
  .getElementById("buscarEmpresaForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const inputCUIT = document.getElementById("inputCUIT").value.trim();
    if (inputCUIT !== "") {
      fetchEmpresaByCUIT(inputCUIT);
    } else {
      const resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerHTML =
        '<p class="text-danger">Por favor ingrese un CUIT válido.</p>';
    }
  });

// Script para resetear el formulario
document
  .getElementById("buscarEmpresaForm")
  .addEventListener("reset", function (event) {
    document.getElementById("resultado").innerHTML = "";
  });

// Script para obtener todas las empresas
document
  .getElementById("btnTodasEmpresas")
  .addEventListener("click", async function () {
    try {
      const response = await fetch("http://localhost:3000/api/empresas");
      const empresas = await response.json();

      // Mostrar las empresas en el div de resultados
      if (empresas.length > 0) {
        let html = "<h3>Todas las empresas</h3>";
        html += "<ul>";
        empresas.forEach((empresa) => {
          html += `<li>${empresa.nombre_soc} - CUIT: ${empresa.cuit}</li>`;
        });
        html += "</ul>";
        document.getElementById("resultado").innerHTML = html;
      } else {
        document.getElementById("resultado").innerHTML =
          "<p>No se encontraron empresas.</p>";
      }
    } catch (error) {
      console.error("Error al obtener las empresas:", error);
      document.getElementById("resultado").innerHTML =
        "<p>Ocurrió un error al cargar las empresas.</p>";
    }
  });
