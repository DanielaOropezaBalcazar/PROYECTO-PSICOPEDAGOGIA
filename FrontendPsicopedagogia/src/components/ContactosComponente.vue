<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Allerta&family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">
  <div class="container mt-4">
    <div class="header">
      <h1 class="main-title">Contactos</h1>
    </div>
    <div class="row">
      <div class="col-md-6" v-for="(contacto) in contactos" :key="contacto.id_contacto">
        <div class="d-flex flex-column align-items-center mb-4 card">
          <div class="img-container">
            <img
              :src="contacto.foto"
              alt="Foto de contacto"
              class="img-fluid mb-6 img-circle"
            />
          </div>
          <span class="text-center nombre">{{ contacto.nombre }}</span>
          <span class="seccion-morada titulo">{{ contacto.titulo }}</span>
          <span class="text-center text-secondary email">{{ contacto.email }}</span>
          <span class="text-center text-secondary telefono">{{ contacto.telefono }}</span>
        </div>
      </div>
    </div>

    <!-- Manteniendo los elementos previos de la página -->
    <center>
      <h3 class="h3_1">Plantel Docente</h3>
    </center>

    <div class="container mt-4">
      <div class="row">
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item nombre" v-for="docente in docentes" :key="docente.id_persona">
              {{ docente.nombre }} {{ docente.apellido }}
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item correo" v-for="docente in docentes" :key="docente.id_persona">
              {{ docente.profesion }}
            </li>
          </ul>
        </div>
      </div>

      <div class="text-center">
        <h3 class="h3_1">Dirección</h3>
        <p>
          Av. 14 de Septiembre y Calle 2 de Obrajes Bloque N – Jardín posterior
          <br />
          <span class="seccion-morada">Departamento de Psicopedagogía</span>
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.068280227043!2d-68.11456612398523!3d-16.52265018422452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20ee187a3103%3A0x2f2bb2b7df32a24d!2sUniversidad%20Cat%C3%B3lica%20Boliviana%20%22San%20Pablo%22!5e0!3m2!1ses-419!2sbo!4v1713403932709!5m2!1ses-419!2sbo"
          width="80%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="text-center">
        <h3 class="h3_1">Horarios de consulta</h3>
        <p>
          De lunes a viernes de 08:30 a 16:30
          <br />
          <span class="seccion-morada">Contacto: </span> 2782222
          <span class="seccion-morada">Int.: </span> 2872
          <br />
          <span class="seccion-morada">WhatsApp: </span> 73231313 – 77294940
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactosComponente",
  data() {
    return {
      contactos: [],
      docentes: [],
      colores: ['#fb7986', '#cce5ff', '#d4edda', '#fff3cd', '#d1ecf1', '#f9e2f6', '#fce4d6', '#d6d8db'],
    };
  },
  mounted() {
    this.cargarContactos();
    this.cargarDocentes();
  },
  methods: {
    async cargarContactos() {
      try {
        const response = await fetch('http://localhost:3000/autoridad');
        if (!response.ok) {
          throw new Error('Error al obtener las autoridades');
        }
        const data = await response.json();
        this.contactos = data.map(autoridad => ({
          id_contacto: autoridad.id_autoridad,
          nombre: `${autoridad.nombre} ${autoridad.apellido}`,
          titulo: autoridad.rol,
          email: 'Desconocido',  // Ajusta según la estructura de tu API
          foto: autoridad.columna_foto,
          telefono: autoridad.telefono,
        }));
      } catch (error) {
        console.error(error);
      }
    },
    async cargarDocentes() {
      try {
        const response = await fetch('http://localhost:3000/plantel-docente');
        if (!response.ok) {
          throw new Error('Error al obtener los docentes');
        }
        const data = await response.json();
        this.docentes = data.map(docente => ({
          id_persona: docente.id_persona,
          nombre: docente.nombre,
          apellido: docente.apellido,
          profesion: docente.profesion,
        }));
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
.container {
  margin-top: 0px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.main-title {
  font-size: 3rem;
  color: #2944f8;
  font-family: 'Arial', sans-serif;
  margin: 1rem;
}

.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  max-width: 100%;
  min-height: 500px; /* Hace que la carta sea más larga */
}

.card:hover {
  transform: translateY(-5px);
}

.img-container {
  margin-bottom: 10px;
}

.img-circle {
  width: 300px; /* Tamaño más grande */
  height: 300px; /* Tamaño más grande */
  border-radius: 50%;
  object-fit: cover;
}

.nombre {
  font-weight: bold;
  font-size: 1.2rem;
}

.titulo {
  color: #6f42c1;
  font-size: 1rem;
  margin-top: 5px;
}

.email, .telefono, .correo {
  color: #6c757d;
  font-size: 0.9rem;
  margin-top: 5px;
}

.h3_1 {
  font-size: 1.5rem;
  color: #333;
}
</style>
