<template>

    <!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--fuentes-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    <title>Psicopedagogía</title>
    <link href="../assets/css/styleshome.css" rel="stylesheet" />
  </head>
  <body>
    <main class="main">
      <section class="section">
        <div class="section-container">
          <div class="content-box">
            <br>
            <img src="../assets/images/home/pulpo.png" alt="Pulpo Mascota" class="Pulpo">
            <center>
              <img src="../assets/images/home/PSP.png" alt="PSP Estudiante" class="PSP1"/>
            </center>
            <h1 class="title">Perfil del Estudiante:</h1>
            <p>
              <ul>
              <li>La primera universidad que propone en Bolivia la Licenciatura en Psicopedagogía.<br></li>
              <li>Formación teórica y práctica basada en competencias.<br></li>
              <li>Formación sólida en diseño, desarrollo y gestión de programas educativos en educación inicial, colegial, universitaria,
              postgradual y técnica<br> tecnológica desde los ámbitos educativos formales y no formales.</li>
              <li>Análisis y reflexión teórica y práctica de la planificación curricular, implementación didáctica, procesos evaluativos integrales,
              gestión emocional<br> del aula, educación virtual/presencial, gestión educativa y procesos de intervención desde las neurociencias.<br></li>
              <li>500 Hrs de Prácticas Pre-Profesionales en empresas públicas, privadas y de convenio.<br></li>
              <li>Programa de prevención de violencias en interacción con el programa “Sembrando semillas de paz” que te permite aportar
              activamente a un cambio <br>en nuestra sociedad.</li>
              <li>Instancias de investigación científica desde el Grupo de Investigación “Zona de Aprendizaje” y la Sociedad Científica Estudiantil
              INPSICOPEDIA.</li>
              <li>Amplia experiencia en desarrollo de programas educativos vinculados con Cooperación Internacional que ofrece oportunidades
              a nuestros estudiantes.<br></li>
              <li>Conocido plantel docente con especialidades y amplia experiencia en el campo laboral.</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
      <section class="programs-section">
        <center><h1 class="programas-title">Programas:</h1></center>
        

        <div class="programs-container1">
          <center>
          <div class="integra">
          <!-- Programa 1 -->
            <a href="integra.html" class="integra-link">
              <img src="../assets/images/home/integra.jpeg" alt="Descripción de la imagen integra">
              <div class="rectangulo"></div>
              <div class="textoI"><h1>Programa Integra Psicopedagog&iacute;a</h1></div>
            </a>
          </div>
          </center>
          <br>
          <br>
          <!-- Programa 2 -->
          <center>
          <div class="red">
              <a href="red.html" class="red-link">
                <img src="../assets/images/home/red.jpg" alt="Descripción de la imagen red">
                <div class="textoR"><h1>Red Psicopedagog&iacute;a</h1></div>
              </a>
          </div>
        </center>
        </div>
      </section>
    </main>
    <footer class="footer">
      <div class="footer-container"></div>
    </footer>
  </body>
</html>

    
</template>
<style >
h1{

    margin-top: 200px;
    margin-left: 100px;

}
</style>
<script>
export default {
    name: "HomeComponente",
};
</script>

