<template>
    
<html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Psicopedagogía - Pregrado</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

    </head>
    <body>
        <main>
            <section class="contenedor">
                <div class="titulo1">
                    <h1>Pregrado</h1>
                </div>
                <br>
                <div class="flex-container">
                    <div class="video-wrapper">
                        <iframe src="https://www.youtube.com/embed/OUd-tTZWBNw" frameborder="0" allowfullscreen class="video-iframe"></iframe>
                    </div>            
                </div>
            </section>

    
            <section class="Botones">
            <center>
            <div class="boton-container">
                <button class="ins">¡Inscríbete Ahora!</button><br>
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
                        <li>En sector educativo: educación inicial, primaria, secundaria,
                            universitaria, técnica tecnológica que desarrollan procesos
                            formativos en instituciones públicas, privadas y de convenio.</li>
                        <li>En proyectos y programas educativos que mejoran la calidad de
                            vida de diferentes poblaciones desde ministerios, municipios,
                            fundaciones y ONGs.</li>
                        <li>En empresas públicas y privadas que desarrollan gestión del
                            conocimiento desde sus departamentos de Recursos Humanos y sus
                            unidades de capacitación.</li>
                        <li>Desarrollando su propio emprendimiento Centros psicopedagógicos
                            y Centros de Educación integral que trabajan con niñez, adolescencia,
                            juventud y adultos que presenten dificultades del aprendizaje y
                            necesidades educativas especiales.</li>
                        <li>Consultoría en áreas de investigación en necesidades de
                            formación, desarrollo de programas educativos presenciales y virtuales,
                            educación off line y on line, entre otras.</li>
                    </ul>
                </div>
                <div class="imagen-trabajo">
                    <img src="../assets/images/Pregrado/grupo.png" alt="Psicopedagogia">
                </div>
            </section>
            
            <br><br>
    <!-- Sección de Áreas de estudio -->
    <section class="section1">
        <div class="container2">
            <div class="contenedor1">
                <div class="areasDiv">
                    <br>
                    <br>
                    <h2 class="areas">Áreas de estudio</h2>
                    <br>
                    <ul class="ramas">
                        <li>Psicopedagog&iacute;a de la Educaci&oacute;n <br>Formal y no Formal</li>
                        <li>Psicopedagog&iacute;a Cl&iacute;nica</li>
                        <li>Psicopedagog&iacute;a Social</li>
                        <li>Psicopedagog&iacute;a Laboral</li>
                        <br>
                        <br>
                    </ul>
                </div>
                <br>
                <div class="px-4">
                    <img src="../assets/images/Pregrado/pastel.png" class="pastel">
                </div>
            </div>
        </div>
    </section>
    
    <br><br>

    
    <!-- Sección de Intercambios Estudiantiles -->
    <!--REVISAR-->
    <section class="py-8">
        
        <div class="container mx-auto px-4">
            <div class="flex flex-wrap">
                <div class="w-full px-4 mb-4">
                    <br>
                    <h1 class="inter-texto">Programa Movilidad Estudiantil</h1>
                    <img src="https://internacional.ucb.edu.bo/wp-content/uploads/2023/09/universidades-extranjeras-SIN-FECHA-39.jpg" alt="Intercambios Estudiantiles" class="w-full rounded shadow-lg mb-4">
                    <div class="text-center">
                        <h2 class="descr-inter">¡El Programa de Movilidad Estudiantil UCB por el Mundo abre la convocatoria para el semestre 2-2024!</h2>
                        <p class="text-gray-700">
                            Información sobre los programas de intercambio, cómo los estudiantes pueden aplicar, los beneficios de participar y las universidades asociadas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    <br><br>
    

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
        <!-- Actividad 1 - Imagen a la izquierda, Texto a la derecha -->
        <div class="actividad">
            <div class="imagen-actividad izquierda">
                <img src="../assets/images/Pregrado/act1.jpeg" alt="Actividad 1" class="rounded shadow-lg">
            </div>
            <div class="texto-actividad derecha">
                <h3>Actividad 1</h3>
                <p>
                    En esta actividad, los niños participarán en una serie de juegos y ejercicios diseñados para explorar y
                    expresar sus emociones. A través de actividades creativas como dibujar, actuar, o jugar roles, los
                    niños tendrán la oportunidad de hablar sobre cómo se sienten, qué les hace sentir así, y cómo
                    pueden manejar esas emociones de manera saludable.
                </p>
            </div>
        </div>
    
        <!-- Actividad 2 - Imagen a la derecha, Texto a la izquierda -->
        <div class="actividad">
            <div class="texto-actividad izquierda">
                <h3>Actividad 2</h3>
                <p>
                    En esta actividad de cocina, los niños tendrán la oportunidad de explorar el mundo de la cocina de una manera divertida y educativa. Cocinar no solo implica la preparación de alimentos, sino que también proporciona una valiosa oportunidad para el desarrollo de habilidades psicomotoras, cognitivas y sociales.

                    Durante la actividad, los niños trabajarán en equipo bajo la supervisión de un adulto. Se les animará a participar activamente en todas las etapas del proceso de cocina, desde la selección de ingredientes hasta la preparación y presentación final de los platos.
                                  
                </p>
            </div>
            <div class="imagen-actividad derecha">
                <img src="../assets/images/Pregrado/cocina.jpeg" alt="Actividad 2" class="rounded shadow-lg">
            </div>
        </div>
    
        <!-- Actividad 3 - Imagen a la izquierda, Texto a la derecha -->
        <div class="actividad">
            <div class="imagen-actividad izquierda">
                <img src="../assets/images/Pregrado/conferencia.jpeg" alt="Actividad 3" class="rounded shadow-lg">
            </div>
            <div class="texto-actividad derecha">
                <h3>Actividad 3</h3>
                <p>
                    Únete a nuestra conferencia de psicopedagogía, donde exploraremos las intersecciones entre la psicología y la pedagogía para comprender mejor el proceso de aprendizaje humano. Descubre cómo los enfoques psicológicos pueden informar y mejorar las prácticas educativas, desde la identificación temprana de necesidades de aprendizaje hasta la creación de entornos de enseñanza inclusivos. Acompáñanos mientras exploramos estrategias efectivas para apoyar el desarrollo cognitivo, emocional y social de los estudiantes, así como para fomentar el éxito académico y el bienestar integral en entornos educativos diversos.
              
                </p>
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

}
</script>
