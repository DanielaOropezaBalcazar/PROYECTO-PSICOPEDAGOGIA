<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  </head>
  
  <div id="app">
    <h1>Malla Curricular</h1>
    <div class="contenedor-grid">
      <div v-for="seccion in secciones" :key="seccion">
        <div class="seccion-titulo">Semestre {{ seccion }}</div>
        <div class="fila">
          <TarjetaAsignatura
            v-for="asignatura in asignaturasPorSeccion(seccion)"
            :key="asignatura.codigo"
            :asignatura="asignatura"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TarjetaAsignatura from "../widgets/tarjeta-asignatura.vue";

export default {
  name: "MallaCurricular",
  components: {
    TarjetaAsignatura,
  },
  data() {
    return {
      asignaturas: [
        {
          seccion: "1",
          nombre: "Psicopedagogía",
          codigo: "PSP-101",
          requisito: "Ninguno",
        },
        {
          seccion: "1",
          nombre: "Psicología del Desarrollo Infantil",
          codigo: "PSP-211",
          requisito: "PSP-101",
        },
        {
          seccion: "1",
          nombre: "Psicología del Desarrollo Infantil",
          codigo: "PSP-211",
          requisito: "PSP-101",
        },
        { seccion: "1", nombre: "", codigo: "", requisito: "" },
        {
          seccion: "1",
          nombre: "Psicología del Desarrollo Infantil",
          codigo: "PSP-211",
          requisito: "PSP-101",
        },
        {
          seccion: "1",
          nombre: "Psicología del Desarrollo Infantil",
          codigo: "PSP-211",
          requisito: "PSP-101",
        },
        {
          seccion: "1",
          nombre: "Psicología del Desarrollo Infantil",
          codigo: "PSP-211",
          requisito: "PSP-101",
        },
        { seccion: "2", nombre: "", codigo: "", requisito: "" },
        {
          seccion: "2",
          nombre: "Psicología del Desarrollo Infantil",
          codigo: "PSP-211",
          requisito: "PSP-101",
        },
        {
          seccion: "2",
          nombre: "Psicología del Desarrollo Infantil",
          codigo: "PSP-211",
          requisito: "PSP-101",
        },
        {
          seccion: "3",
          nombre: "Psicología del Desarrollo Infantil",
          codigo: "PSP-211",
          requisito: "PSP-101",
        },
        {
          seccion: "3",
          nombre: "Psicología del Desarrollo Infantil",
          codigo: "PSP-211",
          requisito: "PSP-101",
        },
        {
          seccion: "3",
          nombre: "Psicología del Desarrollo Infantil",
          codigo: "PSP-211",
          requisito: "PSP-101",
        },
        {
          seccion: "3",
          nombre: "Psicología del Desarrollo Infantil",
          codigo: "PSP-211",
          requisito: "PSP-101",
        },
        {
          seccion: "4",
          nombre: "Psicología del Desarrollo Infantil",
          codigo: "PSP-211",
          requisito: "PSP-101",
        },
        {
          seccion: "4",
          nombre: "Psicología del Desarrollo Infantil",
          codigo: "PSP-211",
          requisito: "PSP-101",
        },
        // Añadir más asignaturas según sea necesario
      ],
    };
  },
  computed: {
    secciones() {
      const secciones = new Set();
      this.asignaturas.forEach((asignatura) => {
        secciones.add(asignatura.seccion);
      });
      return Array.from(secciones);
    },
  },
  methods: {
    asignaturasPorSeccion(seccion) {
      return this.asignaturas.filter(
        (asignatura) => asignatura.seccion === seccion
      );
    },
  },
};
</script>

<style>

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

/* Contenedor de la malla */
.contenedor-grid {
  max-width: 1200px;
  margin: 0 auto;
}

.seccion-titulo {
  font-size: 1.5em;
  margin: 20px 0;
  text-align: left;
  color: #555;
}

.fila {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 40px; /* Espacio entre secciones */
}
</style>
