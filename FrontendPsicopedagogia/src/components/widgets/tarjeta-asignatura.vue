<template>
  <div
    :class="['tarjeta', { 'tarjeta-blanca': isBlank, rotating: isRotating }]"
    @click="manejarClick"
  >
    <h3 v-if="!isBlank">{{ asignatura.nombre }}</h3>
    <p v-if="!isBlank">{{ asignatura.codigo }}</p>
    <p v-if="!isBlank">Requisito: {{ asignatura.requisito }}</p>
  </div>
</template>

<script>
export default {
  name: "TarjetaAsignatura",
  props: {
    asignatura: Object,
  },
  data() {
    return {
      isRotating: false,
    };
  },
  computed: {
    isBlank() {
      return !this.asignatura.nombre && !this.asignatura.codigo && !this.asignatura.requisito;
    },
  },
  methods: {
    manejarClick() {
      if (!this.isBlank) {
        this.isRotating = true;
        setTimeout(() => {
          this.isRotating = false;
        }, 1000);
      }
    },
  },
};
</script>

<style scoped>
/* Estilos para las tarjetas */
.tarjeta {
  background-color: #ffcccc; /* Color de fondo para las tarjetas */
  border: 2px solid #ddd; /* Borde de las tarjetas */
  border-radius: 30px; /* Esquinas redondeadas */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para las tarjetas */
  padding: 10px; /* Espaciado interno */
  margin: 10px; /* Espaciado externo */
  cursor: pointer; /* Cambia el cursor al pasar sobre la tarjeta */
  transition: transform 0.6s, box-shadow 0.6s, background-color 0.6s; /* Transiciones para efectos */
  text-align: center; /* Alineación centrada del texto */
  position: relative; /* Posicionamiento relativo */
  word-wrap: break-word; /* Permite la ruptura de palabras largas */
  overflow: hidden; /* Oculta el contenido desbordado */
}

.tarjeta:nth-child(2n) {
  background-color: #ccffcc; /* Color de fondo alternativo */
}

.tarjeta:nth-child(3n) {
  background-color: #ccccff; /* Color de fondo alternativo */
}

.tarjeta:nth-child(4n) {
  background-color: #ffccff; /* Color de fondo alternativo */
}

.tarjeta:hover {
  transform: translateY(-10px); /* Efecto de elevación al pasar el cursor */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada al pasar el cursor */
}

.tarjeta.rotating {
  transform: rotateY(360deg); 
}

.tarjeta h3 {
  margin-bottom: 10px; 
  color: #444; 
}

.tarjeta p {
  margin: 30px 0; /* Margen para los párrafos */
  color: #777; /* Color del texto de los párrafos */
}

.tarjeta-blanca {
  background-color: transparent; /* Fondo transparente para tarjetas en blanco */
  border: 1px solid transparent; /* Borde transparente */
  padding: 20px; /* Espaciado interno */
  margin: 10px; /* Espaciado externo */
}
</style>
