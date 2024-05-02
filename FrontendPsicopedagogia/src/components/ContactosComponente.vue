<template>
  <br>
<section>
  <div class="text-center">
  <h1>Autoridades</h1>
</div>
    <div class="row">
      <div class="col-md-6">
        <div class="d-flex flex-column align-items-center mb-4">
          <img src="../assets/images/Contactos/icono_morado 2.png" alt="Usuario 1" class="img-fluid mb-2" />
          <span class="text-center">Dra. Alejandra Martínez Barrientos</span>
          <span class="seccion-morada">Directora de Carrera</span>
          <span class="text-center text-secondary">mmartinez@ucb.edu.bo</span>
        </div>
      </div>
      <div class="col-md-6">
        <div class="d-flex flex-column align-items-center mb-4">
          <img src="../assets/images/Contactos/icono_morado 2.png" alt="Usuario 2" class="img-fluid mb-2" />
          <span class="text-center">MSc. Karina García Riveros</span>
          <span class="seccion-morada">Docente Tiempo Completo</span>
          <span class="text-center text-secondary">rgarcia@ucb.edu.bo</span>
        </div>
      </div>
    </div>
  </section>
<br>
  <section>
    <div class="text-center">
      <h1>Plantel Docente</h1>
    </div>
    <div class="row">
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item nombre">Yolanda Ferreira Arza</li>
          
        </ul>
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item correo">yferreira@ucb.edu.bo</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item nombre">Victor Peña Silva</li>
          
        </ul>
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item correo">vicotr.peña@ucb.edu.bo</li>
        </ul>
      </div>
    </div>
  </section>
  <br><br><br>
    <div class="text-center">
      <h1>Dirección</h1>
      <p>
        Av. 14 de Septiembre y Calle 2 de Obrajes Bloque N – Jardín posterior
        <br />
        <span class="seccion-morada">Departamento de Psicopedagogía</span>
      </p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.068280227043!2d-68.11456612398523!3d-16.52265018422452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20ee187a3103%3A0x2f2bb2b7df32a24d!2sUniversidad%20Cat%C3%B3lica%20Boliviana%20%22San%20Pablo%22!5e0!3m2!1ses-419!2sbo!4v1713403932709!5m2!1ses-419!2sbo" width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="text-center">
      <h1>Horarios de consulta</h1>
      <p>
        De lunes a viernes de 08:30 a 16:30
        <br />
        <span class="seccion-morada">Contacto: </span> 2782222 <span class="seccion-morada">Int.: </span> 2872
        <br />
        <span class="seccion-morada">WhatsApp: </span> 73231313 – 77294940
      </p>
    </div>

  
  <div class="pulpo-container">
    
    <img src="../assets/images/home/pulpo.png" alt="Pulpo Mascota" class="pulpo" :class="{ 'pulpo-animate': animate }"/>
  
</div>
  
</template>
<script>
export default {
  name: "ContactosComponente",
  data() {
    return {
      animate: false, 
    };
  },
  created() {
    this.setRandomInterval(); 
  },
  methods: {
    setRandomInterval() {
      const minSeconds = 10; 
      const maxSeconds = 200; 
      const randomInterval = Math.random() * (maxSeconds - minSeconds) + minSeconds;

      setTimeout(() => {
        this.animate = !this.animate;
        this.setRandomInterval();
      }, randomInterval * 1000); 
    },
  },
};
</script>