<template>
  <!-- <HeaderQComponente></HeaderQComponente> -->
  <HeaderContactanos></HeaderContactanos>

  <router-view></router-view>
  <FooterComponente></FooterComponente>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import HeaderContactanos from './components/HeaderContactanos.vue'
import FooterComponente from './components/FooterComponente.vue'
// import HeaderQComponente from './components/HeaderQComponente.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld,
    //HeaderQComponente,
    HeaderContactanos,
    FooterComponente
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@import "./assets/css/quienes.css";
@import "./assets/css/contactanos.css";
@import "./assets/css/stylespre.css";
@import url("./assets/css/investigacion.css");
@import url("./assets/css/styleshome.css");
</style>
