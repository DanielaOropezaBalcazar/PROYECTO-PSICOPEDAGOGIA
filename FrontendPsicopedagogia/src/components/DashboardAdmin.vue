<template>
  <div class="appDash">
    <aside class="sidebar">
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
    <router-link to="/publicacion-zona-aprendizaje" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/ejemplo.jpg" alt="Actividades" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">Publicaciones Zona Aprendizaje</div>
      </div>
    </router-link>
    <router-link to="/integrantes-zona-aprendizaje" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/ejemplo.jpg" alt="Actividades" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">Integrantes Zona Aprendizaje</div>
      </div>
    </router-link>


    <!-- Sociedad Cientifica-->
    <div class="spacer"></div>

    <h2 class="sub-title">Sociedad Cientifica</h2>
    <router-link to="/publicacion-inpsicopedia" class="animated-link">
      <div class="image-overlay">
        <img src="../assets/ejemplo.jpg" alt="PInpsicopedia" @mouseenter="zoomIn" @mouseleave="zoomOut">
        <div class="overlay-text">Publicaciones Inpsicopedia</div>
      </div>
    </router-link>
    <router-link to="/integrantes-inpsicopedia" class="animated-link">
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
    </aside>

    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>


<script>
export default {
  name: 'DashboardAdmin',
  setup() {
    const isZoomed = ref(false);

    const zoomIn = () => {
      isZoomed.value = true;
    };

    const zoomOut = () => {
      isZoomed.value = false;
    };

    return {
      isZoomed,
      zoomIn,
      zoomOut
    };
  }
};

import { ref } from 'vue';

</script>

<style scoped>
.appDash {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 20%;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.content {
  width: 80%;
  padding: 20px;
  overflow-y: auto;
}

.main-title {
  text-align: center;
  font-size: 2rem;
  color: #F416BB;
  font-family: 'Arial', sans-serif;
  margin-bottom: 2rem;
}

.sub-title {
  text-align: left;
  font-size: 1.5rem;
  color: #F96071;
  font-family: 'Arial', sans-serif;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.animated-link {
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 2px solid #ccc;
  cursor: pointer;
  transition: border-color 0.3s ease;
  margin-bottom: 1rem;
}

.animated-link img {
  transition: transform 0.3s ease;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.animated-link:hover img {
  transform: scale(1.1);
}

.animated-link:hover {
  border-color: #007bff;
}

.image-overlay {
  position: relative;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.image-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
  transition: opacity 0.3s ease;
}

.animated-link:hover .image-overlay::before {
  opacity: 0.9;
}
</style>