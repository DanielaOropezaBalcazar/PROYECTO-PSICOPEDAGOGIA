<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Navbar con Bootstrap</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: Allerta;
      font-size: 24px;
    }

    h1 {
      font-family: Inria Serif;
      color: #8438FF;
      font-size: 40px;
      
    }

    .navbar {
      background-color: #ebd67a;
      /* Morado en hexadecimal */
    }

    .navbar-nav {
      width: 100%;
    }

    .nav-item {
      width: calc(100% / 6);
      /* Dividir en 6 para 6 elementos */
      text-align: center;
      
    }

    .nav-link {
      padding: 0.5rem 1rem;
      
      
      
      /* Espacio alrededor del enlace */
    }
    .a.nav-link {
      padding: 0.5rem 1rem;
      color: #000000;
      font: bold;
      
      /* Espacio alrededor del enlace */
    }
    /* Estilo para eliminar el borde de las celdas de la tabla */
    .list-group-item {
      border: none !important;
    }

    /* Estilo para cambiar el color de los correos electrónicos */
    .correo {
      color: #7862FF;
      /* Color naranja */
      text-align: center;
      /* Alinea el texto al centro */
    }

    /* Estilo para centrar los nombres */
    .nombre {
      text-align: center;
      /* Alinea el texto al centro */
    }

    /* Estilo para la sección morada */
    .seccion-morada {
      color: #ffffff;
      /* Color morado */
      font-size: 24px;
      /* Tamaño de la fuente */
    }

    footer {
      background-color: #000000;
      color: #333;
    }
    .mission-container {
            background-color: #ff6347;
            color: white;
            padding: 20px;
        }
        .mission-text {
            font-size: 18px;
            line-height: 1.5;
        }
        .image-container {
            padding: 20px;
        }
        .image-container img {
            max-width: 100%;
            height: auto;
        }
        .mission-container {
    background-color: #ff6347;
    color: white;
    padding: 20px;
}

.mission-text {
    font-size: 18px;
    line-height: 1.5;
}
.image-container {
    padding: 20px;
    position: relative;
  text-align: center;
}
.image-container img {
    width: 100%; /* Ajustamos el ancho de la imagen para ocupar todo el espacio disponible */
    height: auto;
    display: block;
}
.caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.0);
  color: white;
  padding: 10px;
  font-size: 52px;
  font-weight: bold;
  text-align: center;
  font-family: 'Roboto Condensed', sans-serif;
}
.main-content {
  padding-bottom: 80px;
}
.custom-mission-container {
    background-color: #ff6347;
    width: 500px; /* Ancho fijo de 500 píxeles */
    height: 300px; 
    color: white;
    padding: 20px;
}
.custom-image {
    width: 612px; /* Ancho deseado */
    height: 720px; /* Alto deseado */
}

    /* Estilos para el primer conjunto de recuadros */
    .mission-container:nth-of-type(1) {
        background-color: #F96071; /* Color para el primer conjunto */
    }
    
    /* Estilos para el segundo conjunto de recuadros */
    .mission-container:nth-of-type(2) {
        background-color: #F97260; /* Color para el segundo conjunto */
    }

    /* Estilos para el tercer conjunto de recuadros */
    .mission-container:nth-of-type(3) {
        background-color: #37a853; /* Color para el tercer conjunto */
    }

    .mission-container {
  background-color: #f5844c;
  color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px; /* Aumentar el ancho máximo */
  margin: 0 auto; /* Centrar horizontalmente */
  text-align: center; /* Centrar el texto horizontalmente */
}

.mission-container {
  background-color: #f5844c;
  color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px; /* Aumentar el ancho máximo */
  margin: 0 auto; /* Centrar horizontalmente */
  text-align: center; /* Centrar el texto horizontalmente */
}

.mission-container h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

  </style>
</head>

<body>

  <nav class="navbar navbar-expand-lg navbar-light bg-#D6ADFF">
    <a class="navbar-brand" href="#">
      <img src="../images/Logos/logo_naranja.png" height="60" class="d-inline-block align-top" alt="Logo">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Formación</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Investigación</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Quiénes somos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contáctanos</a>
        </li>
        <li class="nav-item">
          <img src="../images/icono_blanco.png" height="70" alt="Usuario" class="nav-link">
        </li>
      </ul>
    </div>
  </nav>

  <div class="container mt-4">

  <div class="container mt-4">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mission-container" style="background-color: #F96071;">
                <h2>Misión</h2>
                <p class="mission-text">Formar profesionales en educación, altamente capacitados, comprometidos con el desarrollo integral de las personas y con un enfoque interdisciplinario que promueva la educación inclusiva y la equidad educativa. Nuestra misión es contribuir al bienestar y al éxito académico de los individuos, identificando y abordando las necesidades específicas de cada uno, a través de la investigación, la evaluación y la intervención psicopedagógica.</p>
            </div>
            <div class="col-md-6 image-container">
                <img class="custom-image" src="../images/Quienes somos/pintura.jpeg" alt="Imagen">
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-6 image-container" >
                <img src="../images/Quienes somos/cerebro.jpeg" alt="Imagen">
            </div>
            <div class="col-md-6 mission-container" style="background-color: #F97260;">
                <h2>Impacto</h2>
                <p class="mission-text">La psicopedagogía impacta el mundo 
al promover una educación inclusiva, detectar y prevenir dificultades de aprendizaje, apoyar la diversidad, mejorar el rendimiento académico y ofrecer asesoramiento a docentes y 
familias. Los psicopedagogos trabajan para garantizar que todos tengan acceso a una educación de calidad, adaptada a sus necesidades individuales, contribuyendo así a 
construir sociedades más equitativas, inclusivas y  educativamente exitosas.</p>
            </div>
            <div class="col-md-6 image-container">
                <img src="../images/Quienes somos/dibujos.jpeg" alt="Imagen">
            </div>
        </div>
    </div>
</div>

    <h1 class="text-left" style="color: orange;">Interacción Social</h1>

    <div class="image-container">
        <img src="../images/Quienes somos/image59.png" alt="Programa 'Sembrando semillas de paz'">
        <div class="caption">Programa "Sembrando semillas de paz"</div>
    </div>


    <div class="container">
        <div class="row">
        <div class="col-md-6 image-container">
                    <img src="../images/Quienes somos/capilla.png" alt="Imagen">
                </div>
                <div class="col-md-6 mission-container">
            <h2>Obras Sociales con la Iglesia</h2>
            
        </div>
        </div>
    </div>
    <div class="container">
      <div class="row">

          <div class="col-md-6 image-container">
              <img src="../images/Quienes somos/image57.png" alt="Imagen">
          </div>
          <div class="col-md-6 image-container">
          <img src="../images/Quienes somos/image 56.png" alt="Imagen">>
          </div>
      </div>

  </div>

  <div class="container">
  <div class="row">
    <div class="col-md-12 text-center">
      <div class="mission-container">
        <h2>Obras Sociales con la Iglesia </h2>
      </div>
    </div>
  </div>
</div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <div class="main-content">
    <!-- Todo el contenido principal de tu página -->
    <div class="container mt-4">
      <!-- Resto del contenido -->
    </div>
  </div>
</body>

</html>