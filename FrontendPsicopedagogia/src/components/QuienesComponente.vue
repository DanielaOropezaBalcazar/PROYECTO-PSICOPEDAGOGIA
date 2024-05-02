<template>
  <!DOCTYPE html>
  <html lang="es">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Psicopedagog&iacute;a: ¿Qui&eacute;nes Somos?</title>
    <!--Fuentes-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Allerta&family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <!--Estilo-->
  </head>

  <body>
  <div class="container">
    <table class="table1">
      <tr>
        <td id="mis">
          <center>
            <h2 class="mision-tit">Misi&oacute;n</h2>
            <p class="mision-text">
              Formar profesionales en psicopedagogía
              <br>altamente capacitados, comprometidos<br>
              con el desarrollo integral de las personas,<br>
              con un enfoque interdisciplinario<br>
              que promueva el aprendizaje<br>
              inclusivo y la equidad educativa.<br>
              Nuestra misión es contribuir al bienestar<br>
              y al éxito académico de los individuos,<br>
              identificando y abordando las necesidades<br>
              específicas de cada uno, a través de la<br>
              investigación, la evaluación y la<br>
              intervención psicopedagógica.
            </p>
          </center>
        </td>
        <td>
          <img src="../assets/images/Quienes somos/pintura.jpg" id="img-mision" alt="mision">
        </td>
      </tr>
      <tr>
        <td>
          <img src="../assets/images/Quienes somos/cerebro.jpg" id="img-vision" alt="vision">
        </td>
        <td id="vis">
          <center>
            <h2 class="mision-tit">Visi&oacute;n</h2>
            <p class="mision-text">
              Formar profesionales en psicopedagogía
              <br>altamente capacitados, comprometidos<br>
              con el desarrollo integral de las personas,<br>
              con un enfoque interdisciplinario<br>
              que promueva el aprendizaje<br>
              inclusivo y la equidad educativa.<br>
              Nuestra misión es contribuir al bienestar<br>
              y al éxito académico de los individuos,<br>
              identificando y abordando las necesidades<br>
              específicas de cada uno, a través de la<br>
              investigación, la evaluación y la<br>
              intervención psicopedagógica.
            </p>
          </center>
        </td>
      </tr>
      <tr>
        <td id="impacto">
          <center>
            <h2 class="mision-tit">Impacto</h2>
            <p> class="mision-text"
              Formar profesionales en psicopedagogía
              <br>altamente capacitados, comprometidos<br>
              con el desarrollo integral de las personas,<br>
              con un enfoque interdisciplinario<br>
              que promueva el aprendizaje<br>
              inclusivo y la equidad educativa.<br>
              Nuestra misión es contribuir al bienestar<br>
              y al éxito académico de los individuos,<br>
              identificando y abordando las necesidades<br>
              específicas de cada uno, a través de la<br>
              investigación, la evaluación y la<br>
              intervención psicopedagógica.
            </p>
          </center>
        </td>
        <td>
          <img id="img-mision" src="../assets/images/Quienes somos/dibujos.jpg">
        </td>
      </tr>
    </table>
    <h3 class="int">Interacción Social</h3>

    <div class="image-container">
      <a href="">
        <img src="../assets/images/Quienes somos/semillas.png" alt="Programa 'Sembrando semillas de paz'">
      </a>
    </div>


    <table class="table1">
      <tr>
        <td>
          <a href="">
            <img src="../assets/images/Quienes somos/capilla.png" alt="Imagen" id="img-mision">
          </a>
        </td>
        <td>
          <a href="">
            <img src="../assets/images/Quienes somos/centro.png" alt="imagenCentro" id="img-mision">
          </a>
        </td>
      </tr>
      <tr style="border: none; padding: 0; margin: 0">
        <td>
          <a href="">
            <img src="../assets/images/Quienes somos/games.png" alt="Imagen" id="img-mision">
          </a>
        </td>
        <td>
          <a href="">
            <img src="../assets/images/Quienes somos/intercarreras.jpg" alt="Imagen" id="img-mision">
          </a>
        </td>
      </tr>
    </table>

  </div>
  <div class="container">
    <div class="row">

      <div class="col-md-11.1 image-container">
        <img src="../assets/images/Quienes somos/caridad.png" alt="Imagen" id="caridad">
      </div>
    </div>

  </div>
  </body>
  </html>
</template>

<script>
export default {
  name: "QuienesComponente",
};
</script>

<style >
.mision-tit{
  font-family: "Inria Serif", "sans-serif";
  font-weight: 700;
  font-style: normal;
  font-size: 50px;
  margin-top: -5px;
}

.mision-text {
  font-family: "Allerta", "sans-serif";
  font-weight: 400;
  font-style: normal;
}

#img-mision{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

#img-vision{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.table1 {
  font-size: 18px;
  margin: 40px auto;
  border: none;
  padding: 0;

}
#mis {
  background-color: #F96071;
  color: #ffffff;
}

#vis{
  background-color: #F97260;
  color: #ffffff;
}

#impacto{
  background-color: #F960A0;
  color: #ffffff;
}

.int{
  font-family: "Roboto Condensed", "sans-serif";
  font-size: 60px;
  text-align: center;
  color: #FC9221;
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
.mission-container {
  background-color: #ff6347;
  color: white;
  padding: 20px;
}


.image-container {
  position: relative;
  text-align: center;
}

.dosi{

}

.dosi1{

}

#caridad{
  margin-top: -50px;
  width: 99%;
  padding-left: 13px;
}

.imados1{
  margin-top: -10px;
}

.imados2{
  margin-left: -5px;
  margin-top: -10px
}


</style>