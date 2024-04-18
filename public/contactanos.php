<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Navbar con Bootstrap</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <style>
    body{
        font-family: Allerta;
        font-size: 24px; 
    }

    h1 {
      font-family:  Inria Serif;
      color: #8438FF; 
      font-size: 40px; 
    }
    .navbar {
      background-color: #D6ADFF; /* Morado en hexadecimal */
    }
    .navbar-nav {
      width: 100%;
    }
    .nav-item {
      width: calc(100% / 6); /* Dividir en 6 para 6 elementos */
      text-align: center;
    }
    .nav-link {
      padding: 0.5rem 1rem; /* Espacio alrededor del enlace */
    }
    /* Estilo para eliminar el borde de las celdas de la tabla */
    .list-group-item {
      border: none !important;
    }
    /* Estilo para cambiar el color de los correos electrónicos */
    .correo {
      color: #7862FF; /* Color naranja */
      text-align: center; /* Alinea el texto al centro */
    }
    /* Estilo para centrar los nombres */
    .nombre {
      text-align: center; /* Alinea el texto al centro */
    }
    /* Estilo para la sección morada */
    .seccion-morada {
      color: #9671FF; /* Color morado */
      font-size: 24px; /* Tamaño de la fuente */
    }
    footer {
  background-color: #8438FF;
  color: #333;
}

  </style>
</head>
<body>

  <nav class="navbar navbar-expand-lg navbar-light bg-#D6ADFF">
    <a class="navbar-brand" href="#">
      <img src="../images/Logos/logo_morado.png" height="60" class="d-inline-block align-top" alt="Logo">
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
          <img src="../images/Contactos/icono_morado 2.png" height="70" alt="Usuario" class="nav-link">
        </li>
      </ul>
    </div>
  </nav>

  <div class="container mt-4">
    
    <div class="row">
      <div class="col-md-6">
        <div class="d-flex flex-column align-items-center mb-4">
          <img src="../images/Contactos/icono_morado 2.png" alt="Usuario 1" class="img-fluid mb-2">
          <span class="text-center">Dra. Alejandra Martínez Barrientos</span>
          <span class="seccion-morada">Directora de Carrera</span>
          <span class="text-center text-secondary">mmartinez@ucb.edu.bo</span>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex flex-column align-items-center mb-4">
          <img src="../images/Contactos/icono_morado 2.png" alt="Usuario 2" class="img-fluid mb-2">
          <span class="text-center">MSc. Karina García Riveros</span>
          <span class="seccion-morada">Docente Tiempo Completo</span>
          <span class="text-center text-secondary">rgarcia@ucb.edu.bo</span>
        </div>
      </div>
    </div>
    <h1 class="text-center">Plantel Docente</h1>
    <div class="container mt-4">
    <div class="row">
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item nombre">Yolanda Ferreira Arza</li>
          <li class="list-group-item nombre">Daniela Davila Heitmann</li>
          <li class="list-group-item nombre">Hector Córdova Eguivar</li>
          <li class="list-group-item nombre">Cesar Linares Salazar</li>
          <li class="list-group-item nombre">Ana Aliaga Jimenez</li>
          <li class="list-group-item nombre">Liz Marco Torrez</li>
          <li class="list-group-item nombre">Magaly Mariaca Duran</li>
          <li class="list-group-item nombre">Lizeth Martínez Galarza</li>
          <li class="list-group-item nombre">Vladimir Viscarra Mamani</li>
          <li class="list-group-item nombre">Maria Nela Paniagua Gonzales</li>
          <li class="list-group-item nombre">Mario Baptista Gonzales</li>
          <li class="list-group-item nombre">Sussy Soto Portugal</li>
          <li class="list-group-item nombre">Ximena Soliz Murillo</li>
        </ul>
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item correo">yferreira@ucb.edu.bo</li>
          <li class="list-group-item correo">mdavila@ucb.edu.bo</li>
          <li class="list-group-item correo">hcordova@ucb.edu</li>
          <li class="list-group-item correo">csrlnrs@gmail.com</li>
          <li class="list-group-item correo">aaliaga@ucb.edu.bo</li>
          <li class="list-group-item correo">lmarco@ucb.edu.bo</li>
          <li class="list-group-item correo">mmariaca.d@ucb.edu.bo</li>
          <li class="list-group-item correo">lmartinez.g@ucb.edu.bo</li>
          <li class="list-group-item correo">vviscarra.m@ucb.edu.bo</li>
          <li class="list-group-item correo">marianelapaniagua1@gmail.com</li>
          <li class="list-group-item correo">mbaptista@ucb.edu.bo</li>
          <li class="list-group-item correo">s.soto@fundacionpatino.org</li>
          <li class="list-group-item correo">ximesol.soliz@gmail.com</li>
        </ul>
      </div>
    </div>

    <div class="text-center">
      <h1>Dirección</h1>
      <p>
        Av. 14 de Septiembre y Calle 2 de Obrajes Bloque N – Jardín posterior
        <br>
        <span class="seccion-morada">Departamento de Psicopedagogía</span>
      </p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.068280227043!2d-68.11456612398523!3d-16.52265018422452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20ee187a3103%3A0x2f2bb2b7df32a24d!2sUniversidad%20Cat%C3%B3lica%20Boliviana%20%22San%20Pablo%22!5e0!3m2!1ses-419!2sbo!4v1713403932709!5m2!1ses-419!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="text-center">
      <h1>Horarios de consulta</h1>
      <p>
        De lunes a viernes de 08:30 a 16:30
        <br>
        <span class="seccion-morada">Contacto: </span> 2782222 <span class="seccion-morada">Int.: </span> 2872
        <br>   
        <span class="seccion-morada">WhatsApp: </span> 73231313 – 77294940
      </p>
     
    </div>

    <footer class="text-center mt-4" style="background-color: #8438FF; color: #333;">
  <div>
  <a href="https://www.facebook.com/tucuenta" target="_blank" style="color:white">
  <img src="../images/Contactos/facebook.png" alt="Facebook" width="50" height="50">
</a>
<a href="https://twitter.com/tucuenta" target="_blank" style="color:white">
  <img src="../images/Contactos/x.png" alt="Twitter" width="50" height="50">
</a>
<a href="https://www.instagram.com/tucuenta" target="_blank" style="color:white">
  <img src="../images/Contactos/instagram.png" alt="Instagram" width="50" height="50">
</a>
  </div>
</footer>


  </div>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
