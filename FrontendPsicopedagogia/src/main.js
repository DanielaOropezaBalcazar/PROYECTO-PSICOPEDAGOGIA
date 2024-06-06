import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Importa createRouter y createWebHistory
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import ContactosComponente from './components/ContactosComponente.vue';
import ContinuaComponente from './components/ContinuaComponente.vue';
import EgresadosComponente from './components/EgresadosComponente.vue';
//import AbmActividades from "./components/AbmActividades.vue";
import HomeComponente from './components/HomeComponente.vue';
import MallaCurricular from "./components/screens/malla_curricular.vue"

import InpsicopediaComponente from './components/InpsicopediaComponente.vue';
import integraComponente from './components/integraComponente.vue';
import LogInComponente from './components/LogInComponente.vue';
import DashboardAdmin from "./components/DashboardAdmin.vue";

import postgradoComponente from './components/postgradoComponente.vue';
import PregradoComponente from './components/PregradoComponente.vue';
import QuienesComponente from './components/QuienesComponente.vue';
import redPsicopedagogiaComponent from './components/redPsicopedagogiaComponent.vue';

import SemillasComponente from './components/SemillasComponente.vue';
import ZonaComponente from './components/ZonaComponente.vue';

import ReadDocente from "./components/ABM_PlantelDocente/ReadDocente.vue";
import ReadAutoridad from "./components/ABM_Autoridades/ReadAutoridad.vue";
import ReadAlianza from "./components/ABM_Alianzas/ReadAlianza.vue";
import ReadActividadCur from "./components/ABM_ActividadesCurriculares/ReadActividadCur.vue";
import ReadActividad from './components/ABM_Actividades/ReadActividad.vue';


const routes = [
    //Sección Home
    { path: '/home', component: HomeComponente },
    { path: '/programa-integra-psicopedagogia', component: integraComponente },
    { path: '/red-psicopedagogia', component: redPsicopedagogiaComponent },

    //Sección Formación
    { path: '/formacion-pregrado', component: PregradoComponente },
    { path: '/mallacomponente_screen', component: MallaCurricular},
    { path: '/formacion-postgrado', component: postgradoComponente },
    { path: '/formacion-continua', component: ContinuaComponente },
    
    //Investigacion
    { path: '/zona-de-aprendizaje', component: ZonaComponente },
    { path: '/inpsicopedia', component: InpsicopediaComponente },

    //Quienes somos
    { path: '/quienes-somos', component: QuienesComponente },
    { path: '/programa-sembrando-semillas-de-paz', component: SemillasComponente },

    //Contactos
    { path: '/contactos', component: ContactosComponente },

    //Login
    { path: '/login', component: LogInComponente },
    { path: '/pesta&ntildea-editar', component: DashboardAdmin },
    { path: '/pesta&a-editar-egresados', component: EgresadosComponente },

    { path: '/actividades', component: ReadActividad },
    { path: '/plantelDocente', component: ReadDocente },
    { path: '/autoridad', component: ReadAutoridad },
    { path: '/alianza', component: ReadAlianza },
    { path: '/actividad-curricular', component: ReadActividadCur },
];


const router = createRouter({
    history: createWebHistory(), // Usa createWebHistory para el modo de historial
    routes
});

const app = createApp(App);
app.use(router); // Usa el enrutador en la aplicación
app.mount('#app');