
<template>
  <div class="app">
    <div class="background-image">
      <div class="login-panel">
        <h3>Iniciar Sesión</h3>
        <form @submit.prevent="login">
          <div>
            <label for="correo">Correo Electrónico:</label>
            <input type="email" id="correo" v-model="correo" required>
          </div>
          <div>
            <label for="contrasenia">Contraseña:</label>
            <input type="password" id="contrasenia" v-model="contrasenia" required>
          </div>
          <button type="submit">Iniciar Sesión</button>
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
  padding: 0;
  margin: 0;
}
.background-image {
  position: relative;
  height: 100vh;
  background-image: url('../assets/login.jpeg');
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
</style>
