<template>
  <div class="panel">
    <img :src="image" alt="Panel Image" />
    <h2>{{ title }}</h2>
    <p><strong>Área:</strong> {{ area }}</p>
    <p><strong>Nombre:</strong> {{ name }}</p>
    <p><strong>Fecha de Publicación:</strong> {{ date }}</p>
  </div>
</template>

<script>
export default {
  name: 'CarouselPanel',
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    area: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.panel {
  text-align: left;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
}

.panel img {
  max-width: 100%;
  height: auto;
}

.panel h2 {
  margin: 10px 0;
}

.panel p {
  margin: 5px 0;
}
</style>
