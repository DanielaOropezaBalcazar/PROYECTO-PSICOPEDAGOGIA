<template>
  <div class="tarjeta" @click="mostrarInformacion">
    <div class="tarjeta-contenido">
      <h3>{{ asignatura.nombre }}</h3>
      <p><strong>Código:</strong> {{ asignatura.codigo }}</p>
      <p><strong>Requisito:</strong> {{ asignatura.requisito }}</p>
      <transition name="fade">
        <div v-if="mostrarDetalle" class="detalle">
          <p>{{ asignatura.descripcion }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "TarjetaAsignatura",
  props: {
    asignatura: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      mostrarDetalle: false,
    };
  },
  methods: {
    mostrarInformacion() {
      this.mostrarDetalle = !this.mostrarDetalle;
    },
  },
};
</script>

<style>
.tarjeta {
  background: linear-gradient(135deg, #ffcc33 0%, #ff6666 100%);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;
}

.tarjeta:hover {
  background: linear-gradient(135deg, #ff9966 0%, #ff6666 100%);
  transform: scale(1.05);
}

.tarjeta-contenido h3 {
  margin: 0 0 10px;
}

.tarjeta-contenido p {
  margin: 5px 0;
}

.detalle {
  margin-top: 15px;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
