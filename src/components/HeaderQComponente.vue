<template>
  <section>
    <head></head>
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
          <router-link class="nav-link" to="/pesta&ntildea-home">Home</router-link>

        </li>
        <li class="nav-item">
           <router-link class="nav-link" to="/pesta&ntildea-formacion-continua">Formación</router-link>

        </li>
        <li class="nav-item">
           <router-link class="nav-link" to="/pesta&ntildea-pregrado">Investigación</router-link>

        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/pesta&ntildea-quienes-somos">¿Quienes Somos?</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/pesta&ntildea-contactos">Contáctanos</router-link>
        </li>
        <li class="nav-item">
          <img src="../assets/images/Contactos/icono_morado 2.png" height="70" alt="Usuario" class="nav-link">
        </li>
      </ul>
  </nav>
</header>
  </section>

</template>
  
<script>
export default {
  name: "HeaderQComponente",
};
</script>