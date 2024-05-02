
<template>
  <div class="app">
    <div class="background-image">
      <div class="login-panel">
        <h3 class="h3">Iniciar Sesión</h3>
        <form @submit.prevent="login">
          <div>
            <label for="correo">Correo Electrónico:</label>
            <input type="email" id="correo" v-model="correo" required>
          </div>
          <div>
            <label for="contrasenia">Contraseña:</label>
            <input type="password" id="contrasenia" v-model="contrasenia" required>
          </div>
          <button class="create-button" type="submit">Iniciar Sesión</button>
          <p v-if="error" class="error">{{ error }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogInComponente",
  data() {
    return {
      correo: '',
      contrasenia: '',
      error: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:3000/usuarios/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            correo: this.correo,
            contrasenia: this.contrasenia
          })
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Error al iniciar sesión.');
        }
        // Iniciar sesión exitoso, puedes redirigir a otra página o realizar alguna acción adicional
        console.log('Inicio de sesión exitoso:', data);
        // Redireccionar al Dashboard
        this.$router.push('/pesta&ntildea-editar');
      } catch (error) {
        console.error('Error al iniciar sesión:', error.message);
        this.error = error.message;
      }
    }
  }
};
</script>

<style>
.app{

  padding-bottom: 0;
  margin-bottom: 0;
}
.background-image {
  position: relative;
  height: 100vh;
  background-image: url('../assets/images/Login/login.png');
  background-size: cover;
  background-position: center;
}

.background-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.login-panel {
  background-color: rgba(255, 255, 255, 0);
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  text-align: center;
  color: #ffffff;
}

.login-panel input[type="text"],
.login-panel input[type="email"],
.login-panel input[type="password"] {
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 15px;
  color: #ffffff;
  margin-bottom: 20px;
  padding: 10px;
}

.login-panel input[type="text"]::placeholder,
.login-panel input[type="password"]::placeholder {
  color: #ffffff;
}

.login-panel input[type="button"] {
  background-color: #ffffff;
  color: #000000;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
}

.login-panel input[type="button"].btn-primary:active {
  background-color: #000000;
  border-color: #fff;
}

.h3 {
  font-family: Inria Serif;
  color: #ffffff;
  font-size: 40px;
}

.create-button {
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

.create-button:hover {
  background-color: #45a049;
  color: white;
}

.create-button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>
