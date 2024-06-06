<template>
  <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Psicopedagogía - Pregrado</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <main>
        <section class="contenedor">
          <div class="titulo1">
            <h1
              style="
                font-size: 70px;
                font-family: 'Roboto Condensed', 'sans-serif';
                font-weight: 700;
              "
            >
              Pregrado
            </h1>
          </div>
          <br />
          <div class="flex-container">
            <div class="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/OUd-tTZWBNw"
                frameborder="0"
                allowfullscreen
                class="video-iframe"
              ></iframe>
            </div>
          </div>
        </section>

        <section class="Botones">
          <center>
            <div class="boton-container">
              <button class="ins">¡Inscríbete Ahora!</button><br />
              <button class="asig">Asignaturas Particulares</button>
              <button class="malla">Malla Curricular</button>
            </div>

            <div class="boton-container">
              <button class="prog">Programa ÁGORA</button>
              <button class="opor">Oportunidades de Becas</button>
              <button class="tari">Tarifario</button>
            </div>
          </center>
        </section>

        <section class="trabajo-section">
          <div class="contenido-texto">
            <h1 class="titulo-trabajo">¿Dónde puedes trabajar?</h1>
            <ul>
              <li>
                En sector educativo: educación inicial, primaria, secundaria,
                universitaria, técnica tecnológica que desarrollan procesos
                formativos en instituciones públicas, privadas y de convenio.
              </li>
              <li>
                En proyectos y programas educativos que mejoran la calidad de
                vida de diferentes poblaciones desde ministerios, municipios,
                fundaciones y ONGs.
              </li>
              <li>
                En empresas públicas y privadas que desarrollan gestión del
                conocimiento desde sus departamentos de Recursos Humanos y sus
                unidades de capacitación.
              </li>
              <li>
                Desarrollando su propio emprendimiento Centros psicopedagógicos
                y Centros de Educación integral que trabajan con niñez,
                adolescencia, juventud y adultos que presenten dificultades del
                aprendizaje y necesidades educativas especiales.
              </li>
              <li>
                Consultoría en áreas de investigación en necesidades de
                formación, desarrollo de programas educativos presenciales y
                virtuales, educación off line y on line, entre otras.
              </li>
            </ul>
          </div>
          <div class="imagen-trabajo">
            <img
              src="../assets/images/Pregrado/grupo.png"
              alt="Psicopedagogia"
            />
          </div>
        </section>

        <br /><br />
        <!-- Sección de Áreas de estudio -->
        <section class="section1">
          <div class="container2">
            <div class="contenedor1">
              <div class="areasDiv">
                <br />
                <br />
                <h2 class="areas">Áreas de estudio</h2>
                <br />
                <ul class="ramas">
                  <li>
                    Psicopedagog&iacute;a de la Educaci&oacute;n <br />Formal y
                    no Formal
                  </li>
                  <li>Psicopedagog&iacute;a Cl&iacute;nica</li>
                  <li>Psicopedagog&iacute;a Social</li>
                  <li>Psicopedagog&iacute;a Laboral</li>
                  <br />
                  <br />
                </ul>
              </div>
              <br />
              <div class="px-4">
                <img
                  src="../assets/images/Pregrado/pastel.png"
                  class="pastel"
                />
              </div>
            </div>
          </div>
        </section>

        <br /><br />

        <!-- Sección de Intercambios Estudiantiles -->
        <!--REVISAR-->
        <section class="py-8">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap">
              <div class="w-full px-4 mb-4">
                <br />
                <h1 class="inter-texto">Programa Movilidad Estudiantil</h1>
                <img
                  src="https://internacional.ucb.edu.bo/wp-content/uploads/2023/09/universidades-extranjeras-SIN-FECHA-39.jpg"
                  alt="Intercambios Estudiantiles"
                  class="w-full rounded shadow-lg mb-4"
                />
                <div class="text-center">
                  <h2 class="descr-inter">
                    ¡El Programa de Movilidad Estudiantil UCB por el Mundo abre
                    la convocatoria para el semestre 2-2024!
                  </h2>
                  <p class="text-gray-700">
                    Información sobre los programas de intercambio, cómo los
                    estudiantes pueden aplicar, los beneficios de participar y
                    las universidades asociadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <br /><br />

        <!-- CARRUSEL section>
        <div class="container mx-auto px-4">
            <h2 class="perfiles">Perfiles de Graduados</h2>
            <div class="carousel-container">
                <div class="carousel">
                    <div v-for="(image, index) in visibleImages" :key="index" class="carousel-item">
                        <img :src="image.src" :alt="image.alt" class="flex-none w-1/3">
                    </div>
                </div>
                <button @click="moveCarousel(-1)" class="boton1">
                    <span style="font-size: 2rem;">&lt;</span>
                </button>
                <button @click="moveCarousel(1)" class="boton2">
                    <span style="font-size: 2rem;">&gt;</span>
                </button>
            </div>
            <center>
                <h1>Testimonio</h1>
                <p>
                    La Psicopedagogía te brinda un sinfín de oportunidades para innovar los programas educativos vigentes, los métodos de enseñanza y la manera en que el sector educativo desarrolla, a su vez, oportunidades para las personas en etapa formativa.
                </p>
            </center>
        </div>
    </section-->

        <!-- Sección de Actividades -->
        <section class="actividades">
          <div class="Fondo">
            <h2 class="activity-title">Actividades</h2>
            <div
              class="actividad"
              v-for="(actividad, index) in actividades"
              :key="actividad.id_actividad"
            >
              <div
                :class="[
                  'imagen-actividad',
                  index % 2 === 0 ? 'izquierda' : 'derecha',
                ]"
              >
                <img
                  :src="actividad.columna_foto"
                  :alt="'Imagen de la ' + actividad.nombre_actividad"
                  class="rounded shadow-lg"
                />
              </div>
              <div
                :class="[
                  'texto-actividad',
                  index % 2 === 0 ? 'derecha' : 'izquierda',
                ]"
              >
                <h3 class="titleH3">{{ actividad.nombre_actividad }}</h3>
                <p>{{ actividad.descripcion }}</p>
                <p class="card-date">Fecha: {{ actividad.fecha }}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  </html>
</template>

<script>
export default {
  name: "ContinuaComponente",
  data() {
    return {
      actividades: [],
    };
  },
  mounted() {
    this.cargarActividades();
  },
  methods: {
    async cargarActividades() {
      try {
        const response = await fetch(
          "http://localhost:3000/actividades/curriculares"
        );
        if (!response.ok) {
          console.log(response);
          throw new Error("Error al obtener las actividades");
        }
        this.actividades = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style src="../assets/css/stylespre.css"></style>
