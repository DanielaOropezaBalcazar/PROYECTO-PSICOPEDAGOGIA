<template>
  <div class="modal" v-if="show">
    <div class="modal-content">
      <span class="close-button" @click="closeModal">&times;</span>
      <h2 style="text-align: center;">Editar actividad</h2>
      <form @submit.prevent="submitForm">
        <label>Nombre de la actividad:</label>
        <input v-model="formData.nombre_actividad" type="text" required>


        <label>Foto:</label>
        <input type="file" @change="previewImage" accept="image/*" required> <!-- Solo permite imágenes -->
        <img :src="imagePreview" alt="Vista previa de la imagen" v-if="imagePreview" class="image-preview">


        <label>Descripción:</label>
        <textarea v-model="formData.descripcion" required></textarea>

        <label>Fecha:</label>
        <input v-model="formData.fecha" type="date" required>

        <label>ID del usuario:</label>
        <input v-model="formData.Usuario_id_usuario" type="number" required>

        <label>Tipo de actividad:</label>
        <select v-model="formData.tipo_actividad_id_tipo_actividad" required>
          <option v-for="tipo in tiposActividad" :key="tipo.id_tipo_actividad" :value="tipo.id_tipo_actividad">
            {{ tipo.clasificacion }}
          </option>
        </select>

        <div class="button-container">

          <button type="button" @click="closeModal">Cancelar</button> <!-- Botón de cancelar -->
          <button type="submit">Guardar cambios</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show', 'actividad'],
  data() {
    return {
      formData: { ...this.actividad },
      imagePreview: null,
      tiposActividad: [],
    };
  },
  async created() {
    try {
      const response = await fetch('http://localhost:3000/actividades/tipo-actividad');
      if (!response.ok) {
        throw new Error('Error al recuperar los datos de la tabla tipo_actividad.');
      }
      console.log(response)
      this.tiposActividad = await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  watch: {
    actividad(newVal) {
      this.formData = { ...newVal };
      // Convertir la fecha a un formato compatible con el input de tipo 'date'
      if (newVal.fecha) {
        this.formData.fecha = new Date(newVal.fecha).toISOString().split('T')[0];
      }
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    previewImage(event) {
      const file = event.target.files[0];
      if (file) {
        this.imagePreview = URL.createObjectURL(file);
      }
    },

    async submitForm() {
      // Crear un objeto para almacenar los datos del formulario
      const data = { ...this.formData };

      // Si hay una imagen seleccionada, convertirla a Base64 y agregarla al objeto
      if (this.imagePreview) {
        const response = await fetch(this.imagePreview);
        const blob = await response.blob();
        const base64data = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
        data.columna_foto = base64data;
      }

      console.log(data.columna_foto)

      // Convertir el objeto a JSON
      const json = JSON.stringify(data);

      console.log(this.actividad.id_actividad);
      try {
        const response = await fetch(`http://localhost:3000/actividades/${this.actividad.id_actividad}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: json,
        });
        console.log(response);
        if (!response.ok) {
          throw new Error('Error al modificar la actividad');
        }
        this.$emit('update');
        this.closeModal();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.modal-content {
  width: 80%;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  overflow: auto; /* Agrega scroll si es necesario */
  max-height: 80vh; /* Limita la altura del modal al 80% de la altura de la ventana */
}

.close-button {
  float: right;
  cursor: pointer;
}
form {
  display: grid;
  gap: 1rem;
}

label {
  font-weight: bold;
  color: #333;
}

input, textarea, select {
  padding: 0.5em;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  font-size: 1em;
}

button {
  background-color: #007BFF;
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

button:hover {
  background-color: #0056b3;
}
img {
  max-width: 100%;
  height: auto;
  margin-top: 1rem;
}
button[type="button"] {
  background-color: #f44336; /* Rojo */
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

button[type="button"]:hover {
  background-color: #d32f2f;
}
.button-container {
  display: flex;
  flex-direction: row; /* Cambia la dirección del flujo de los elementos a 'row' */
  justify-content: space-between;
  width: 100%; /* Asegura que el contenedor ocupe todo el ancho disponible */
}
.image-preview {

  height: auto; /* Mantiene la relación de aspecto de la imagen */
  max-height: 200px; /* Limita la altura máxima de la imagen a 200px */
}
</style>