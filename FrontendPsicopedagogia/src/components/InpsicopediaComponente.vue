<template>

    <html lang="es">
    <head>
        
    
    
        <!--Fuentes-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Allerta&display=swap" rel="stylesheet">
    
        <title>Psicopedagogia: S.C.E. Inpsicopedia</title>
    </head>
    <body>
        <main>
            <section class="learning-zone">
                <h1 class="zona-tit1">Inpsicopedia</h1>
                <center>
                    <div class="content-wrapper1">
                        <img src="../assets/images/Inpsicopedia/logoInps.png" alt="Foto 1" class="foto11">
                        <div class="member-list1">
                            <h2 class="int-tit">Integrantes:</h2>
                            <ul class="intInv">
                              <li v-for="(integrante, index) in ultimosIntegrantes" :key="index">
                                {{ integrante.nombre }} {{ integrante.apellido }}
                              </li>
                            </ul>
                        </div>
                    </div>
                </center>
            </section>
            <section class="join">
                <br>
                <h2 class="req-uni1">¿Cómo puedo unirme?</h2>
                <h3 class="req1">Requisitos:</h3>
                <ul class="req-p">
                    <li>Estar inscrito en la Universidad y ser alumno regular de la carrera correspondiente.</li>
                    <li>Llenar el formulario de inscripción.</li>
                    <li>Adjuntar la siguiente documentación: fotocopias del carnet de identidad, de la matricula universitaria y de la programación de materias. </li>
                    <li>Tener un promedio mayor a 80/100 puntos</li>
                    <li>Presentar una carta de recomendaci&oacute;n de alg&uacute;n docente de la carrera</li>
                </ul>
            </section>


          <!-- Publicación más reciente -->
          <section class="recent-publication">
            <h2 class="pub-rec">Publicación más reciente</h2>
            <div v-if="publicacionReciente">
              <a href="">
                <img :src="publicacionReciente.imagen" :alt="publicacionReciente.nombre">
              </a>
              <p class="desc-pub-rec">{{ publicacionReciente.descripcion }}</p>
            </div>
          </section>

          <!-- Publicaciones Anteriores -->
          <section class="previous-publications">
            <h2 class="pub-ant-tit">Publicaciones Anteriores</h2>
            <div class="gallery">
              <div class="flip-card" v-for="(publicacion, index) in publicacionesAnteriores" :key="index">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img :src="publicacion.imagen" :alt="publicacion.nombre">
                  </div>
                  <div class="flip-card-back">
                    <p>{{ publicacion.descripcion }}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <center>
            <section class="contact1">
                <h2 class="cont-tit1">Contactos</h2>
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
                                <th>Lic. Marco Soliz Alvarez </th>
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
document.querySelectorAll('.flip-card-inner').forEach(card => {
    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    });
});

export default {
    name: "InpsicopediaComponente",
  data() {
    return {
      integrantes: [],
      publicaciones: [],
    };
  },
  async created() {
    try {
      const response = await fetch('http://localhost:3000/int-inpsicopedia');
      if (!response.ok) {
        throw new Error('Error al recuperar los datos de integrantes.');
      }
      console.log(response)
      this.integrantes = await response.json();
    } catch (error) {
      console.error(error);
    }

    try {
      const response = await fetch('http://localhost:3000/pub-inpsicopedia');
      if (!response.ok) {
        throw new Error('Error al recuperar los datos de publicaciones.');
      }
      console.log(response)
      this.publicaciones = await response.json();
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    ultimosIntegrantes() {
      return this.integrantes.slice(-5);
    },
    publicacionReciente() {
      return this.publicaciones.length ? this.publicaciones[this.publicaciones.length - 1] : null;
    },
    publicacionesAnteriores() {
      return this.publicaciones.slice(0, -1).slice(-5);
    }
  }
};
</script>

<style src="../assets/css/inpsicopedia.css"></style>