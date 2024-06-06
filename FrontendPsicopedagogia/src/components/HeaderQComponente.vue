<template>
  <section>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-#D6ADFF">
        <a class="navbar-brand" href="#">
          <img src="../assets/images/Logos/logo_naranja.png" height="60" class="d-inline-block align-top" alt="Logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/formacion-pregrado" id="navbarDropdown"
                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Formación
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/formacion/curso1">Curso 1</router-link>
                <router-link class="dropdown-item" to="/formacion/curso2">Curso 2</router-link>
                <router-link class="dropdown-item" to="/formacion/curso3">Curso 3</router-link>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/zona-de-aprendizaje" id="navbarDropdown2"
                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Investigación
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                <router-link class="dropdown-item" to="/inpsicopedia">Inpsicopedia</router-link>
                <router-link class="dropdown-item" to="/investigacion/proyecto2">Proyecto 2</router-link>
                <router-link class="dropdown-item" to="/investigacion/proyecto3">Proyecto 3</router-link>
              </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/quienes-somos">¿Quienes Somos?</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contactos">Contáctanos</router-link>
            </li>
            <li class="nav-item">
              <img src="../assets/images/Contactos/icono_morado 2.png" height="70" alt="Usuario" class="nav-link">
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </section>
</template>

<script>
export default {
  name: "HeaderQComponente",
};
</script>

<style scoped>
.navbar-nav .dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  position: absolute;
  float: none;
  width: auto;
  margin-top: 0;
}
</style>
