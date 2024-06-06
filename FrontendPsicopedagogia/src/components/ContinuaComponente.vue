<template>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <h1 class="titFC">Formación Continua</h1>
    <table>
      <tr>
        <td>
          <div class="DivPrin">
            <img src="../assets/images/FC/minors.png" alt="minors" />
            <h2 class="titMinors">Minors</h2>
            <p class="pMinors">
              Los Minors son programas que promueven la interdisciplinariedad
              que enriquece, perfecciona y complementa en sus participantes la
              formación profesional, con miras a una mejor inserción laboral,
              los mismos son ofrecidos desde una carrera a otras.
            </p>
          </div>
        </td>
        <td>
          <div class="DivPrin">
            <img src="../assets/images/FC/cursos.png" alt="cursos y talleres" />
            <h2 class="titMinors">Cursos y Talleres</h2>
            <p class="pMinors">
              La U.C.B. brinda una formación continua y complementaria a sus
              estudiantes mediante cursos y talleres que ofrecen nuestras
              diferentes carreras con temas de actualidad y necesidad en el
              campo laboral.
            </p>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="DivPrin">
            <img src="../assets/images/FC/UCBX.png" alt="cursos y talleres" />
            <h2 class="titMinors">UCB X</h2>
            <p class="pMinors">
              UCBx - Educación virtual es líder en el uso de tecnologías de
              información enfocadas a la Educación, es pionera en ofrecer cursos
              virtuales.
            </p>
          </div>
        </td>
      </tr>
    </table>
  </body>
</template>

<script>
export default {
  name: "ContinuaComponente",
};
</script>

<style src="../assets/css/stylesFC.css"></style>
