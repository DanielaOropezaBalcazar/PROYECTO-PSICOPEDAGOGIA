import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Importa createRouter y createWebHistory
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import CentroEstComponente from './components/screens/CentroEstComponente.vue';
import ContactosComponente from './components/ContactosComponente.vue';
import ContinuaComponente from './components/ContinuaComponente.vue';
import EgresadosComponente from './components/EgresadosComponente.vue';
import ReadActividad from "./components/ABM_Actividades/ReadActividad.vue";
import HomeComponente from './components/HomeComponente.vue';
import MallaCurricular from "./components/screens/malla_curricular.vue"

import InpsicopediaComponente from './components/InpsicopediaComponente.vue';
import integraComponente from './components/integraComponente.vue';
import IntercarrerasComponente from './components/IntercarrerasComponente.vue';
import LogInComponente from './components/LogInComponente.vue';
import DashboardAdmin from "./components/DashboardAdmin.vue";

import ObrasComponente from './components/ObrasComponente.vue';
import obrasIglesiaComponente from './components/obrasIglesiaComponente.vue';
import postgradoComponente from './components/postgradoComponente.vue';
import PregradoComponente from './components/PregradoComponente.vue';
import QuienesComponente from './components/QuienesComponente.vue';
import redPsicopedagogiaComponent from './components/redPsicopedagogiaComponent.vue';

import SemillasComponente from './components/SemillasComponente.vue';
import UCBGamesComponente from './components/UCBGamesComponente.vue';
import ZonaComponente from './components/ZonaComponente.vue';

import PruebaComponente from './components/PruebaComponente.vue';
import ReadDocente from "./components/ABM_PlantelDocente/ReadDocente.vue";
import ReadAutoridad from "./components/ABM_Autoridades/ReadAutoridad.vue";
import ReadAlianza from "./components/ABM_Alianzas/ReadAlianza.vue";


const routes = [

    { path: '/pesta&ntildea-home', component: HomeComponente },
    { path: '/pesta&ntilde;a-programa-integra-psicopedagogia', component: integraComponente },
    { path: '/pesta&ntilde;a-red-psicopedagogia', component: redPsicopedagogiaComponent },
    { path: '/pesta&ntildea-pregrado', component: PregradoComponente },
    { path: '/pesta&ntilde;a-postgrado', component: postgradoComponente },
    
    { path: '/pesta&ntildea-formacion-continua', component: ContinuaComponente },
    { path: '/pesta&ntilde;a-zona-de-aprendizaje', component: ZonaComponente },
    { path: '/pesta&ntilde;a-sociedad-cient&iacute;fica-Inpsicopedia', component: InpsicopediaComponente },
    { path: '/pesta&ntildea-quienes-somos', component: QuienesComponente },
    { path: '/pesta&ntilde;a-programa-semillas', component: SemillasComponente },
    { path: '/pesta&ntildea-obras-sociales', component: ObrasComponente },
    { path: '/pesta&ntilde;a-centro-estudiantes-componente', component: CentroEstComponente },
    { path: '/pesta&ntilde;a-UCB-games', component: UCBGamesComponente },
    { path: '/pesta&ntilde;a-torneo-intercarreras', component: IntercarrerasComponente },
    { path: '/pesta&ntilde;a-obras-sociales-con-iglesia', component: obrasIglesiaComponente },
    { path: '/pesta&ntildea-contactos', component: ContactosComponente },
    { path: '/pesta&ntildea-login', component: LogInComponente },
    { path: '/pesta&ntildea-editar', component: DashboardAdmin },
    { path: '/pesta&a-editar-egresados', component: EgresadosComponente },
    { path: '/actividades', component: ReadActividad },
    { path: '/plantelDocente', component: ReadDocente },
    { path: '/autoridad', component: ReadAutoridad },
    { path: '/alianza', component: ReadAlianza },

    { path: '/mallacomponente_screen', component: MallaCurricular},

    { path: '/Prueba-Componente', component: PruebaComponente }
];



const router = createRouter({
    history: createWebHistory(), // Usa createWebHistory para el modo de historial
    routes
});

const app = createApp(App);
app.use(router); // Usa el enrutador en la aplicación
app.mount('#app');