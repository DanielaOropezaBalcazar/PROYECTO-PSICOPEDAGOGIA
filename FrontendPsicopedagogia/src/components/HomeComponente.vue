<template>

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  </head>
  <body>
    <div>
      <main class="main animated-section">
        
        
          <div class="background-box">
            <div class="content-box">
              <img src="../assets/images/home/pulpo.png" alt="Pulpo Mascota" class="Pulpo">
              <center>
                <img src="../assets/images/home/PSP.png" alt="PSP Estudiante" class="PSP1"/>
              </center>
              <br><br><br><br>
              <h1 class="title">Perfil del Estudiante:</h1>
              <p>
                La psicopedagogía es una profesión de gran necesidad y altamente gratificante. Y es que, la labor del psicopedagogo se centra en 
                el estudio de “una persona en situación de aprendizaje” de cualquier edad, evaluando, 
                diagnosticando y ayudando a las que tienen más dificultades en el proceso de aprendizaje.
                La primera universidad que propone en Bolivia la Licenciatura en Psicopedagogía.
                Formación teórica y práctica basada en competencias.
                Formación sólida en diseño, desarrollo y gestión de programas educativos en educación inicial, colegial, universitaria, postgradual y técnica tecnológica desde los ámbitos educativos formales y no formales.
                Análisis y reflexión teórica y práctica de la planificación curricular, implementación didáctica, procesos evaluativos integrales, gestión emocional del aula, educación virtual/presencial, gestión educativa y procesos de intervención desde las neurociencias.
                500 Hrs de Prácticas Pre-Profesionales en empresas públicas, privadas y de convenio.
                Programa de prevención de violencias en interacción con el programa “Sembrando semillas de paz” que te permite aportar activamente a un cambio en nuestra sociedad.
                Instancias de investigación científica desde el Grupo de Investigación “Zona de Aprendizaje” y la Sociedad Científica Estudiantil INPSICOPEDIA.
                Amplia experiencia en desarrollo de programas educativos vinculados con Cooperación Internacional que ofrece oportunidades a nuestros estudiantes.
                Conocido plantel docente con especialidades y amplia experiencia en el campo laboral.
              </p>
            </div>
          </div>
        
          <div class="background-box ">
          <center><h1 class="programas-title">Programas:</h1></center>
          <br>
          <br>          
          <div class="center">
              <router-link to="/programa-integra-psicopedagogia">
                <img src="../assets/images/home/integra.png" alt="Descripción de la imagen integra">
              </router-link>
              </div>
                
            <br>
            <br>
            <br>
            <div>

              <a href="red.html">
                <div class="center">
                <router-link to="/red-psicopedagogia">
                  <img src="../assets/images/home/red.png" alt="Descripción de la imagen red">
                </router-link>
              </div>
              </a>
            </div>
          </div>
        
      </main>
    </div>
  </body>


    
</template>
<style >

</style>

<script>
export default {
    name: "HomeComponente",
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const elements = document.querySelectorAll('.animated-section');
            elements.forEach(el => {
                if (el.getBoundingClientRect().top < window.innerHeight) {
                    el.classList.add('active');
                }
            });
        }
    }
};
</script>

<style src="../assets/css/styleshome.css"></style>

