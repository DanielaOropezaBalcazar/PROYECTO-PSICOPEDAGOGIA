<template>
  <div class="app">
    <div class="container">
      <div class="header">
        <h1 class="main-title">Actividades Curriculares</h1>
      </div>
      <button class="create-button" @click="abrirModalCrear">Crear actividad</button>

      <div class="row">
        <div class="col-md-12" v-for="(actividad, index) in actividades" :key="actividad.id_actividad">
          <div class="card card-width" :style="{ backgroundColor: colores[index % colores.length] }">
            <div class="card-content">
              <div class="card-image">
                <img class="card-img" :src="actividad.columna_foto" alt="Imagen de la actividad">
              </div>
              <div class="card-body">
                <div class="card-details">
                  <div>
                    <h5 class="card-title">{{ actividad.nombre_actividad }}</h5>
                    <p class="card-text">{{ actividad.descripcion }}</p>
                    <p class="card-text">
                      <small class="text-muted">Fecha: {{ actividad.fecha }}</small>
                    </p>
                  </div>
                  <div class="button-container">
                    <button class="edit-button" @click="abrirModal(actividad)">Editar</button>
                    <button class="delete-button" @click="eliminarActividad(actividad.id_actividad)">Borrar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateActividad :show="showCrearModal" @close="showCrearModal = false" @update="cargarActividades" />
      <EditActividad :show="showModal" :actividad="actividadSeleccionada" @close="showModal = false" @update="cargarActividades" />

    </div>
  </div>
</template>

<script>
import EditActividad from "./EditActividad.vue";
import CreateActividad from "./CreateActividad.vue";

export default {
  components: {
    EditActividad,
    CreateActividad,
  },
  data() {
    return {
      actividades: [],
      colores: ['#fb7986', '#cce5ff', '#d4edda', '#fff3cd', '#d1ecf1', '#f9e2f6', '#fce4d6', '#d6d8db'],
      showModal: false,
      actividadSeleccionada: null,
      showCrearModal: false,
    };
  },
  mounted() {
    this.cargarActividades();
  },
  methods: {
    async cargarActividades() {
      try {
        const response = await fetch('http://localhost:3000/actividades/');
        if (!response.ok) {
          console.log(response)
          throw new Error('Error al obtener las actividades');
        }
        this.actividades = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
    abrirModal(actividad) {
      this.actividadSeleccionada = actividad;
      this.$emit('editar', this.actividadSeleccionada);
      this.showModal = true;
    },
    async eliminarActividad(id) {
      const confirmacion = confirm('¿Estás seguro de que quieres eliminar esta actividad?');
      if (!confirmacion) {
        return;
      }
      try {
        const response = await fetch(`http://localhost:3000/actividades/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Error al eliminar la actividad');
        }
        this.cargarActividades();
      } catch (error) {
        console.error(error);
      }
    },
    abrirModalCrear() {
      this.showCrearModal = true;
    },
  },
};
</script>
<style>

.container {
  margin-top: 0px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: center; /* Centra los elementos hijos horizontalmente */
  align-items: center; /* Centra los elementos hijos verticalmente */
  padding: 0 20px;
}

/* Estilos de los paneles */
.card {
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  border-radius: 10px;
  height: 200px;
}

.card-width {
  width: 80%; /* Ajusta este valor según tus necesidades */
  margin: 0 auto;
}

.card:hover {
  transform: translateY(-5px);
}

.card-content {
  display: flex;
}

.card-image {
  padding: 0px; /* Agrega un padding al contenedor de la imagen */
}

.card-img {
  width: auto;
  height: 200px; /* Cambia a auto para mantener la relación de aspecto de la imagen */
  max-height: 100%; /* Limita la altura máxima de la imagen al 100% del contenedor */
  object-fit: contain; /* Mantiene la relación de aspecto de la imagen */
  border-radius: 10px 0 0 10px;
}

.card-body {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}

.card-title {
  font-weight: bold;
  font-size: 1.2rem;
}

.card-text {
  font-size: 14px;
  color: #333;
}
.card-details {
  display: flex;
  justify-content: space-between;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px; /* Agrega un margen a la derecha */
  margin-top: 20px;
}
.edit-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 24px;
  margin: 10px 2px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.delete-button {
  background-color: #f44336; /* Rojo */
  color: white;
  padding: 10px 24px;
  margin: 10px 2px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.container .create-button {
  margin-top: 20px; /* Espacio entre el título y el botón */
  margin-bottom: 20px; /* Espacio entre el botón y los paneles */
  background-color: #4CAF50; /* Verde */
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 12px;
  border: none;
  box-shadow: 0 9px #999;
  margin-left: 10%;
}

.container .create-button:hover {
  background-color: #45a049;
  color: white;
}

.container .create-button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.col-md-12 {
  margin: 15px; /* Agrega margen alrededor de cada panel */
}

.main-title {
  text-align: center;
  font-size: 3rem; /* Tamaño de fuente más grande */
  color: #2944f8; /* Color de fuente diferente */
  font-family: 'Arial', sans-serif; /* Fuente diferente */
  margin: 1rem;
}
</style>