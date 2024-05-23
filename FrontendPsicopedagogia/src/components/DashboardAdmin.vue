<template>
  <div class="app">
    <h1 class="main-title">Dashboard Admin</h1>

    <!-- Areas de Administracion -->

    <h2 class="sub-title">Actividades</h2>
    <router-link to="/actividades" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/Actividades.png" alt="Actividades" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">Actividades</div>
      </div>
    </router-link>

    <!-- Programa Integra -->
    <div class="spacer"></div>

    <h2 class="sub-title">Programa Integra Psicopedagogia</h2>
    <router-link to="/otra-pagina" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/ejemplo.jpg" alt="Actividades" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">Graduados</div>
      </div>
    </router-link>
    <router-link to="/autoridad" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/ejemplo.jpg" alt="Actividades" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">Autoridades</div>
      </div>
    </router-link>
    <router-link to="/otra-pagina" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/ejemplo.jpg" alt="Actividades" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">Bolsa de Empleo</div>
      </div>
    </router-link>
    <router-link to="/otra-pagina" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/ejemplo.jpg" alt="Actividades" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">Trabajos realizados</div>
      </div>
    </router-link>


    <!-- Formacion Pregrado -->
    <div class="spacer"></div>

    <h2 class="sub-title">Formacion: Pregrado</h2>
    <router-link to="/otra-pagina" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/ejemplo.jpg" alt="Actividades" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">Perfiles de Estudiantes</div>
      </div>
    </router-link>
    <router-link to="/alianza" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/ejemplo.jpg" alt="Actividades" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">Alianzas</div>
      </div>
    </router-link>
    <router-link to="/actividad-curricular" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/ejemplo.jpg" alt="actividad-curricular" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">Actividades Curriculares </div>
      </div>
    </router-link>

    <!-- Formacion PostGrado -->
    <div class="spacer"></div>

    <h2 class="sub-title">Formacion: Postgrado</h2>
    <router-link to="/otra-pagina" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/ejemplo.jpg" alt="Actividades" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">PostGrado</div>
      </div>
    </router-link>

    <!-- Zona Aprendizaje-->
    <div class="spacer"></div>

    <h2 class="sub-title">Zona de Aprendizaje</h2>
    <router-link to="/otra-pagina" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/ejemplo.jpg" alt="Actividades" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">Publicaciones Zona Aprendizaje</div>
      </div>
    </router-link>
    <router-link to="/otra-pagina" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/ejemplo.jpg" alt="Actividades" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">Integrantes Zona Aprendizaje</div>
      </div>
    </router-link>


    <!-- Sociedad Cientifica-->
    <div class="spacer"></div>

    <h2 class="sub-title">Sociedad Cientifica</h2>
    <router-link to="/otra-pagina" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/ejemplo.jpg" alt="PInpsicopedia" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">Publicaciones Inpsicopedia</div>
      </div>
    </router-link>
    <router-link to="/otra-pagina" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/ejemplo.jpg" alt="IInpsicopedia" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">Integrantes Inpsicopedia </div>
      </div>
    </router-link>

    <!-- Contactos -->
    <div class="spacer"></div>

    <h2 class="sub-title">Contactos</h2>
    <router-link to="/plantelDocente" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/ejemplo.jpg" alt="Plantel" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">Plantel Docente</div>
      </div>
    </router-link>


  </div>
</template>

<script>
export default {
  name: 'DashboardAdmin',
  setup() {
    return {
      isZoomed,
      zoomIn,
      zoomOut
    };
  }
};

import { ref } from 'vue';

const isZoomed = ref(false);

// Función para hacer zoom sobre la imagen
const zoomIn = () => {
  isZoomed.value = true;
};

// Función para deshacer el zoom sobre la imagen
const zoomOut = () => {
  isZoomed.value = false;
};
</script>

<style scoped>
.app {
  padding: 0;
  margin: 0;
  width: 88%; /* Cambia el ancho a 80% del ancho de la ventana */
  margin: 0 auto; /* Centra el contenido horizontalmente */

  top: 0; /* Fija el borde superior al borde superior de la ventana */
  left: 50%; /* Centra el contenido horizontalmente */
  background-color: #ffffff; /* Fondo del 80% de la pantalla */
  border-radius: 10px; /* Bordes redondeados */
}

.main-title {
  text-align: center;
  font-size: 3rem; /* Tamaño de fuente más grande */
  color: #F416BB; /* Color de fuente diferente */
  font-family: 'Arial', sans-serif; /* Fuente diferente */
  margin: 1rem;
}

.sub-title {
  text-align: left;
  font-size: 2rem; /* Tamaño de fuente más grande */
  color: #F96071; /* Color de fuente diferente */
  font-family: 'Arial', sans-serif; /* Fuente diferente */
  margin: 1rem;
}

/* Estilos para la animación */
.animated-link {
  display: inline-block;
  position: relative;
  overflow: hidden;
  border-radius: 8px; /* Añade bordes redondeados */
  border: 2px solid #ccc; /* Define el borde y su color */
  cursor: pointer; /* Cambia el cursor al pasar sobre la imagen */
  transition: border-color 0.3s ease; /* Transición para el color del borde */
  margin-bottom: 20px; /* Añade espacio entre las imágenes */
  margin-left: 20px;
}

.animated-link img {
  transition: transform 0.3s ease;
  width: 350px; /* Establece el ancho de la imagen */
  height: 350px; /* Establece la altura de la imagen */
  object-fit: cover; /* Escalar la imagen para que llene el contenedor manteniendo su proporción */
  vertical-align: middle; /* Alinea la imagen verticalmente */
}

/* Efecto de zoom */
.animated-link:hover img {
  transform: scale(1.1);
}

.animated-link:hover {
  border-color: #007bff; /* Cambia el color del borde al pasar sobre la imagen */
}

/* Estilos para superponer texto sobre la imagen */
.image-overlay {
  position: relative;
  display: inline-block;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Agrega sombra al texto */
  z-index: 1; /* Asegura que el texto esté por encima de la imagen */
}

.image-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
  z-index: 0; /* Coloca el fondo detrás de la imagen */
  transition: opacity 0.3s ease; /* Añade transición para la opacidad */
}

.animated-link:hover .image-overlay::before {
  opacity: 0.9; /* Reducir la opacidad al pasar el cursor sobre la imagen */
}

/* Espaciador entre las imágenes */
.spacer {
  height: 20px; /* Altura del espacio entre las imágenes */
}
</style>
