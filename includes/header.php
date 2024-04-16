<style>
  /* Estilos adicionales */
  .navbar .navbar-brand {
    display: flex;
    align-items: center; /* Alinea verticalmente */
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  /* Ajusta el tamaño del navbar */
  .navbar {
    height: 100px; /* Cambia este valor según sea necesario */
    background-color: wheat;
  }

  /* Ajusta el tamaño de los enlaces del navbar */
  .navbar-nav .nav-link {
    font-size: 20px; /* Tamaño de fuente */
    padding: 20px; /* Relleno */
    margin-right: 20px; /* Espacio entre enlaces */
  }
</style>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-light bg-white">
  <a class="navbar-brand" href="index.php">
    <img src="images/Logo.png" height="150" class="d-inline-block align-top" alt="Logo">
  </a>
  <!-- Botón para dispositivos pequeños -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- Elementos del navbar -->
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="index.php">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="eventos.php">Eventos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="login.php">Inicio de Sesión</a>
      </li>
    </ul>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="galeria.php">Fotos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="pedidos.php">Pedidos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contactos.php">Contacto</a>
      </li>
    </ul>
  </div>
</nav>
