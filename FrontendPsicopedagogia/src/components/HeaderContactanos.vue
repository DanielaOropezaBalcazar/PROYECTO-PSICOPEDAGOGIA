<template>
  <div class="cuerpo">
    <nav class="nav">
      <ul class="ul">
        <div class="logo">
          <router-link to="/mallacomponente_screen">
            <img src="../assets/images/Logos/logo_blanco.png" alt="Logo Universidad">
          </router-link>
        </div>
        <li v-for="(link, index) in navLinks" :key="index" :style="{ flexGrow: '1' }" class="li dropdown">
          <router-link :to="link.route">{{ link.text }}</router-link>
          <ul v-if="link.submenu" class="dropdown-content">
            <li v-for="(sublink, subindex) in link.submenu" :key="subindex" class="dropdown-item">
              <router-link :to="sublink.route">{{ sublink.text }}</router-link>
            </li>
          </ul>
        </li>
        <div class="login">
          <router-link to="/login">
            <img src="../assets/images/icono_blanco.png" alt="Login">
          </router-link>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComponente",
  data() {
    return {
      navLinks: [
        { route: "home", text: "Home" },
        {
          route: "/formacion-pregrado",
          text: "Formación",
          submenu: [
          { route: "/formacion-pregrado", text: "Formación Pregrado" },
            { route: "/mallacomponente_screen", text: "Malla Curicular" },
            { route: "/formacion-postgrado", text: "Formación Postgrado" },
            { route: "/formacion-continua", text: "Formación Continua" }
          ]
        },
        {
          route: "/zona-de-aprendizaje",
          text: "Investigación",
          submenu: [
            { route: "/zona-de-aprendizaje", text: "Zona de Aprendizaje" },  
            { route: "/inpsicopedia", text: "S.C.E. Inpsicopedia" },
          ]
        },
        { route: "/quienes-somos", text: "Quiénes Somos" },
        { route: "/contactos", text: "Contáctanos" }
      ]
    };
  }
};
</script>

<style scoped>
.cuerpo {
  margin: 0;
  font-family: Arial, sans-serif;
}

.nav {
  background-image: url('../assets/images/fondo_header.png'); /* Ruta de la imagen de fondo */
  background-size: cover; /* Para ajustar la imagen de fondo al tamaño del navbar */
  background-position: center; /* Para centrar la imagen de fondo */
}

.ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between; /* Distribuye las opciones de manera uniforme */
  width: 100%;
}

.li {
  position: relative; /* Necesario para el menú desplegable */
  flex-grow: 1; /* Permite que los elementos llenen el espacio disponible */
  font-size: 34px;
  animation: none; /* Deshabilita animaciones */
}

.li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  animation: none; /* Deshabilita animaciones */
}

.li a:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Estilo del menú desplegable */
.dropdown-content {
  display: none; /* Oculto por defecto */
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content .dropdown-item {
  color: black;
  text-align: left;
  padding: 12px 16px;
}

.dropdown-content .dropdown-item a {
  color: black;
  text-decoration: none;
}

.dropdown-content .dropdown-item a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

/* Mostrar el menú desplegable al pasar el cursor */
.li:hover .dropdown-content {
  display: block;
}

.logo img {
  max-height: 100px;
  margin-left: 20px;
  margin-right: 20px;
}

.login img {
  max-height: 100px;
  margin-right: 20px;
  margin-left: 20px;
}
</style>
