<template>
    <h1>¿QUI&Eacute;NES SOMOS?</h1>
    <div id="quienes">
      <nav>
        <ul>
          <li><router-link to="/semillas">Programa Sembrando Semillas de Paz</router-link></li>
          <li><router-link to="/obras">Obras Sociales</router-link></li>
          <li><router-link to="/centroEstudaintes">Centros de Estudiantes</router-link></li>
          <li><router-link to="/gamesUCB">UCB Games</router-link></li>
          <li><router-link to="/intercarreras">Torneo Intercarreras</router-link></li>
          <li><router-link to="/obrasIglesia">Obras Sociales</router-link></li>
        </ul>
      </nav>
    </div>
    <router-view></router-view>
</template>