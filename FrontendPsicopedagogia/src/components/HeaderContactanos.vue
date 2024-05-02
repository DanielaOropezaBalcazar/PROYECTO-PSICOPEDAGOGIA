<template>
  <div class="cuerpo">
    <nav class="nav">
      <ul class="ul">
        <div class="logo">
          <router-link to="/pesta&ntildea-home">
            <img src="../assets/images/Logos/logo_blanco.png" alt="Logo Universidad">
          </router-link>
        </div>
        <li v-for="(link, index) in navLinks" :key="index" :style="{ flexGrow: '1' }" class="li">
          <router-link :to="link.route">{{ link.text }}</router-link>
        </li>
        <div class="login">
          <router-link to="/pesta&ntildea-login">
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
        {route: "/pesta&ntildea-home", text: "Home"},
        {route: "/pesta&ntildea-formacion-continua", text: "Formación"},
        {route: "/pesta&ntildea-pregrado", text: "Investigación"},
        {route: "/pesta&ntildea-quienes-somos", text: "Quiénes Somos"},
        {route: "/pesta&ntildea-contactos", text: "Contáctanos"}
      ]
    }
  }
}
</script>

<style>
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
  flex-grow: 1; /* Permite que los elementos llenen el espacio disponible */
  font-size: 34px;
}

.li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.li a:hover {
  background-color: rgba(0, 0, 0, 0.05);
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
