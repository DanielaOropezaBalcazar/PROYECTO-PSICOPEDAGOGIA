<template>
  <section>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light" :style="{ backgroundColor: navbarColor }">
        <a class="navbar-brand" href="#">
          <img src="../assets/images/Logos/logo_morado.png" height="60" alt="Logo">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item" @click="changeColor('#ffcfac')">
              <router-link class="nav-link" to="/pesta&ntildea-home">Home</router-link>
            </li>
            <li class="nav-item" @click="changeColor('#8bc34a')">
              <router-link class="nav-link" to="/pesta&ntildea-formacion-continua">Formación</router-link>
            </li>
            <li class="nav-item" @click="changeColor('#2196f3')">
              <router-link class="nav-link" to="/pesta&ntildea-pregrado">Investigación</router-link>
            </li>
            <li class="nav-item" @click="changeColor('#ff9800')">
              <router-link class="nav-link" to="/pesta&ntildea-quienes-somos">¿Quiénes Somos?</router-link>
            </li>
            <li class="nav-item" @click="changeColor('#9c27b0')">
              <router-link class="nav-link" to="/pesta&ntildea-contactos">Contáctanos</router-link>
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
  name: "HeaderComponente",
  data() {
    return {
      navbarColor: '#D6ADFF'  // Color inicial del navbar
    };
  },
  methods: {
    changeColor(color) {
      this.navbarColor = color;  // Cambia el color del navbar
    }
  }
};
</script>

