<template>
  <div>
    <h1>perfil Estudiante</h1>
    <form @submit.prevent="submitData">
      <h2>Persona</h2>
      <input v-model="persona.nombre" placeholder="Nombre">
      <input v-model="persona.apellido" placeholder="Apellido">
      <input v-model="persona.telefono" placeholder="Teléfono">
      <h2>Graduado</h2>
      <input v-model="graduado.anio" placeholder="Año">
      <input v-model="graduado.trabajo_grado" placeholder="Trabajo de Grado">
      <textarea v-model="graduado.testimonio" placeholder="Testimonio"></textarea>
      <button type="submit">Enviar Datos</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      persona: {
        nombre: '',
        apellido: '',
        telefono: ''
      },
      graduado: {
        anio: '',
        trabajo_grado: '',
        testimonio: ''
      }
    };
  },
  methods: {
    submitData() {
      axios.post('http://localhost:3000/api/persona-graduado', {
        ...this.persona,
        graduado: this.graduado
      })
      .then(() => {
        alert('Datos insertados correctamente');
      })
      .catch(error => {
        console.error('Error al insertar datos:', error);
      });
    }
  }
}
</script>
