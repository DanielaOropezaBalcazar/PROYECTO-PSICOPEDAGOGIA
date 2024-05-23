<template>
    <html lang="es">
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Allerta&display=swap" rel="stylesheet">
    
        <title>Psicopedagogia: Programa Integra</title>
    </head>
    <body>
        <h1 style="color: #FFE900" class="zona-tit">Programa Integra</h1>
        <br>
        <h1 style="color: #FFE900; text-align: right; padding-right: 100px" class="zona-tit">¿Qui&eacute;nes somos?</h1>

    <div class="container">
        <table>
        <tr>
            <td>
            <img style="width: 700px; height: auto;" src="../assets/images/Integra/birrete.jpeg" id="img-vision" alt="vision">
            </td>
            <td id="quienes somos">
            <center>
                <p class="descrition">
                    Descripción del programa, fecha de creación <br>
                    y objetivo de programa. <br>
                    Quienes lo conforman, junto con algunos <br>
                    requisitos que se pueda necesitar.
                </p>
            </center>
            </td>
        </tr>
        </table>

    <h1 style="color: #BDB600; text-align: left; padding-right: 100px" class="zona-tit">Graduados</h1>
    <br>  <br>

    <h1 style="color: #FFE900; text-align: right; padding-right: 100px" class="zona-tit">Autoridades</h1>
    </div>
            <section class="autoridades">
                <table>
                <tr>
                    <td class="center">
                        <img style="width: 600px; height: auto;" src="../assets/images/Integra/icono_amarillo.png" id="img-vision" alt="vision">
                    </td>
                    <td >
                        <img style="width: 600px; height: auto;" src="../assets/images/Integra/icono_amarillo.png" id="img-vision" alt="vision">
                    </td>
                </tr>
                <tr>
                    <td>
                        <center>
                        <p class="descrition">
                            Lic. Andrea Pastén <br> <br>
                            Descripción detallada sobre autoridad
                        </p>
                        </center>
                    </td>
                    <td>
                    <center>
                        <p class="descrition">
                            Lic. Andrea Burke <br> <br>
                            Descripción detallada sobre autoridad
                        </p>
                    </center>
                    </td>
                </tr>
                <tr>
                    <td class="center">
                        <img style="width: 600px; height: auto;" src="../assets/images/Integra/icono_amarillo.png" id="img-vision" alt="vision">
                    </td>
                    <td >
                        <img style="width: 600px; height: auto;" src="../assets/images/Integra/icono_amarillo.png" id="img-vision" alt="vision">
                    </td>
                </tr>
                <tr>
                    <td>
                        <center>
                        <p class="descrition">
                            Lic. Nicole Stohmann <br> <br>
                            Descripción detallada sobre autoridad
                        </p>
                        </center>
                    </td>
                    <td>
                    <center>
                        <p class="descrition">
                            Lic. Brian Argandoña <br> <br>
                            Descripción detallada sobre autoridad
                        </p>
                    </center>
                    </td>
                </tr>
                </table>
            </section>

        <center>
            <section class="bolsa">
                <h1 style="color: #E0E342; text-align: left; padding-right: 100px" class="zona-tit">Bolsa de empleo</h1>
                    <table style="background-color: #FDFF84">
                        <tbody>                
                            <tr style="font-weight: bold">
                                <td>Nivel Requerido</td>
                                <td>Empresa</td>
                                <td>Puesto</td>
                                <td>Ver Detalles</td>
                            </tr>
                        </tbody>
                        <tbody>                
                            <tr>
                                <td>8vo Semestre</td>
                                <td>Huawei</td>
                                <td>RRHH</td>
                                <td><button style="color:black; background-color: #FFE900; border-radius: 15px">Detalles</button></td>
                            </tr>
                        </tbody>
                        <tbody>                
                            <tr>
                                <td>6to Semestre</td>
                                <td>Colegio Alemán</td>
                                <td>Maestro Sec</td>
                                <td><button style="color:black; background-color: #FFE900; border-radius: 15px">Detalles</button></td>
                            </tr>
                        </tbody>
                        <tbody>                
                            <tr>
                                <td>9no Semestre</td>
                                <td>CBN</td>
                                <td>Encargardo</td>
                                <td><button style="color:black; background-color: #FFE900; border-radius: 15px">Detalles</button></td>
                            </tr>
                        </tbody>
                        <tbody>                
                            <tr>
                                <td>5to Semestre</td>
                                <td>Min. de Educación</td>
                                <td>RRHH</td>
                                <td><button style="color:black; background-color: #FFE900; border-radius: 15px">Detalles</button></td>
                            </tr>
                        </tbody>
                    </table>
            </section>
        </center>
    
        <h1 style="color: #FFE900; text-align: center" class="zona-tit">Trabajos Realizados</h1>
        <br>  <br>

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
        name: "PregradoComponente",
    };
    </script>
    
    <style src="../assets/css/investigacion.css"></style>
