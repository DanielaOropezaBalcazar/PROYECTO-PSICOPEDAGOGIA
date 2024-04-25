<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
    <div id="app">
      <nav>
        <ul>
          <li><router-link to="/home">Home</router-link></li>
          <li><router-link to="/pregrado">Pregrado</router-link></li>
          <li><router-link to="/postgrado">Postgrado</router-link></li>
          <li><router-link to="/continua">Formaci&oacute;n Cont&iacute;nua</router-link></li>
          <li><router-link to="/aprendizaje">Zona de Aprendizaje</router-link></li>
          <li><router-link to="/inpsicopedia">SC: Inpsicopedia</router-link></li>
          <li><router-link to="/quienes">¿Qui&eacute;nes Somos?</router-link></li>
          <li><router-link to="/contactos">Contactos</router-link></li>
          <li><router-link to="/login">Iniciar Sesi&oacute;n</router-link></li>
        </ul>
      </nav>
    </div>
    <router-view></router-view>
</template>

<style scoped>

</style>
