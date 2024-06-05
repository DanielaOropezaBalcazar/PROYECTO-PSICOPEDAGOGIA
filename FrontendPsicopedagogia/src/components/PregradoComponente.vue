<template>
  <html lang="es">
    <head>
      <!--Fuentes-->
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Allerta&display=swap"
        rel="stylesheet"
      />

      <title>Psicopedagogia: Zona de Aprendizaje</title>
    </head>
    <body>
      <main>
        <section class="learning-zone">
          <h1 class="zona-tit">Zona de Aprendizaje</h1>
          <center>
            <div class="content-wrapper">
              <img
                src="../assets/images/Investigacion/zona1.jpg"
                alt="Foto 1"
                class="foto1"
              />
              <div class="member-list">
                <h2 class="int-tit">Integrantes:</h2>
                <ul class="intInv">
                  <li>Mariana Casta&ntilde;eda Velasquez</li>
                  <li>Francisco Torrez Santander</li>
                  <li>Fernanda Manzaneda Quiroga</li>
                  <li>Patricia Perez Gonzales</li>
                  <li>Roberto Delgado Mellark</li>
                  <li>Maria José Agudo Vivaldo</li>
                  <li>Juan Pablo Oropeza Carrera</li>
                  <li>Maria Viviana Murillo Fuentes</li>
                  <!-- Repetir para todos los integrantes -->
                </ul>
              </div>
            </div>
          </center>
        </section>
        <section class="join">
          <br />
          <h2 class="req-uni">¿Cómo puedo unirme?</h2>
          <h3 class="req">Requisitos:</h3>
          <ul class="req-p">
            <li>
              Estar inscrito en la Universidad y ser alumno regular de la
              carrera correspondiente.
            </li>
            <li>Llenar el formulario de inscripción.</li>
            <li>
              Adjuntar la siguiente documentación: fotocopias del carnet de
              identidad, de la matricula universitaria y de la programación de
              materias.
            </li>
            <li>Tener un promedio mayor a 80/100 puntos</li>
            <li>
              Presentar una carta de recomendaci&oacute;n de alg&uacute;n
              docente de la carrera
            </li>
          </ul>
        </section>

        <section class="recent-publication">
          <br />
          <h2 class="pub-rec">Publicación más reciente</h2>

          <a href="">
            <img
              src="../assets/images/Investigacion/manos.jpg"
              alt="Publicación Reciente"
            />
          </a>
          <p class="desc-pub-rec">
            ¡Descubre los distintos tipos de aprendizaje! Desde el visual,
            auditivo y kinestésico<br />
            hasta el colaborativo y el autodidacta. 💡📚 ¿Cuál es tu estilo de
            aprendizaje favorito?<br />
            Comparte en los comentarios.
          </p>
        </section>

        <section class="previous-publications">
          <h2 class="pub-ant-tit">Publicaciones Anteriores</h2>
          <div class="gallery">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="../assets/images/Investigacion/salud.jpg"
                    alt="Publicación Anterior 1"
                  />
                </div>
                <div class="flip-card-back">
                  <p>
                    Dia de la salud mental. ¿Porque debemos preocuparnos por
                    nosotros mismos?
                  </p>
                </div>
              </div>
            </div>

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="../assets/images/Investigacion/down.jpg"
                    alt="Publicación Anterior 1"
                  />
                </div>
                <div class="flip-card-back">
                  <p>Descripción de la publicación sobre salud.</p>
                </div>
              </div>
            </div>

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="../assets/images/Investigacion/dia.jpg"
                    alt="Publicación Anterior 1"
                  />
                </div>
                <div class="flip-card-back">
                  <p>Descripción de la publicación sobre salud.</p>
                </div>
              </div>
            </div>

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="../assets/images/Investigacion/maestro.jpg"
                    alt="Publicación Anterior 1"
                  />
                </div>
                <div class="flip-card-back">
                  <p>Descripción de la publicación sobre salud.</p>
                </div>
              </div>
            </div>

            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    src="../assets/images/Investigacion/tdah.jpg"
                    alt="Publicación Anterior 1"
                  />
                </div>
                <div class="flip-card-back">
                  <p>Descripción de la publicación sobre salud.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="activity-section">
          <h2 class="activity-title">Actividades</h2>
          <div class="activity-cards">
            <div
              class="flip-card"
              v-for="actividad in actividades"
              :key="actividad.id_actividad"
            >
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <img
                    class="card-img"
                    :src="actividad.columna_foto"
                    alt="Imagen de la actividad"
                  />
                </div>
                <div class="flip-card-back">
                  <div class="card-info">
                    <h5 class="card-title">{{ actividad.nombre_actividad }}</h5>
                    <p class="card-text">{{ actividad.descripcion }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <center>
        <section class="contact">
          <h2 class="cont-tit">Contactos</h2>
          <table>
            <thead>
              <tr>
                <th>Lic. Javier del Castillo Vera</th>
                <th>Presidente</th>
                <th>javier.castillo132@gmail.com</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mgtr. Mariana Escamilla Figueroa</td>
                <td>Vicepresidente</td>
                <td>m.escamilla.figueroa@gmail.com</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Lic. Marco Soliz Alvarez</th>
                <th>Tesorero</th>
                <th>m.soliz.alvarez56@gmail.com</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mgtr. Estevan Rocha Salazar</td>
                <td>Secretario</td>
                <td>estevanrocha234@gmail.com</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Dra. Consuelo La Torre Peinado</th>
                <th>Asesora</th>
                <th>consuelo.ltp@gmail.com</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dr. Lorenzo La Torre Peinado</td>
                <td>Asesor</td>
                <td>lorenzo.latorre@gmail.com</td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th>Dra. Valentina Urrutia Rodriguez</th>
                <th>Asesora</th>
                <th>valentina.ur345@gmail.com</th>
              </tr>
            </thead>
          </table>
        </section>
      </center>
    </body>
  </html>
</template>

<script>
export default {
  name: "PregradoComponente",
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

<style>
.container {
  margin-top: 0px;
  font-family: "Helvetica Neue", Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.activity-section {
  padding: 20px;
}

.activity-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2944f8;
  font-family: "Arial", sans-serif;
}

.activity-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.flip-card {
  background-color: transparent;
  width: 350px;
  height: 250px;
  perspective: 1000px;
  margin: 15px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
}

.flip-card-front {
  background-color: #ffffff;
  color: black;
}

.flip-card-back {
  background-color: #abb7ff;
  color: white;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.card-info {
  padding: 20px;
}

.card-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
}

.card-text {
  font-size: 1rem;
  color: #fff;
}
</style>
