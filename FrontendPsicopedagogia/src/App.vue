<template>
  <div id="app">
    <h1>Mi Carrusel de Paneles</h1>
    <div class="carousel">
      <div v-for="(panel, index) in panels" :key="index" class="panel">
        <img :src="panel.image" alt="Panel Image" />
        <h2>{{ panel.title }}</h2>
        <p><strong>Área:</strong> {{ panel.area }}</p>
        <p><strong>Nombre:</strong> {{ panel.name }}</p>
        <p><strong>Fecha de Publicación:</strong> {{ panel.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      panels: [
        {
          image: 'https://via.placeholder.com/300',
          title: 'Título 1',
          area: 'Área 1',
          name: 'Nombre 1',
          date: '2024-06-01'
        },
        {
          image: 'https://via.placeholder.com/300',
          title: 'Título 2',
          area: 'Área 2',
          name: 'Nombre 2',
          date: '2024-06-02'
        }
        // Puedes agregar más paneles aquí según sea necesario
      ]
    };
  }
};
</script>

<style>
#app {
  text-align: center;
  padding: 20px;
}

.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.panel {
  text-align: left;
  padding: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin: 10px;
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
