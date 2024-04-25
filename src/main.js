import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import home from '../src/components/home.vue'
import Integra from '../src/components/Integra.vue'
import redPsicopedagogia from '../src/components/redPsicopedagogia.vue'
import pregrado from '../src/components/pregrado.vue'
import malla from '../src/components/malla.vue'
import postgrado from '../src/components/postgrado.vue'
import continua from '../src/components/continua.vue'
import aprendizaje from '../src/components/aprendizaje.vue'
import inpsicopedia from '../src/components/inpsicopedia.vue'
import quienes from '../src/components/quienes.vue'
import semillas from '../src/components/semillas.vue'
import obras from '../src/components/obras.vue'
import centroest from '../src/components/centroest.vue'
import gamesucb from '../src/components/gamesucb.vue'
import intercarreras from '../src/components/intercarreras.vue'
import obrasIglesia from '../src/components/obrasIglesia.vue'
import contactos from '../src/components/contactos.vue'
import login from '../src/components/login.vue'
import menuABM from '../src/components/menuABM.vue'
import ABM from '../src/components/ABM.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', component: home},
        {path: '/Integra', component: Integra},
        {path: '/redPsicopedagogia', component: redPsicopedagogia},
        {path: '/pregrado', component: pregrado},
        {path: '/malla', component: malla},
        {path: '/postgrado', component: postgrado},
        {path: '/continua', component: continua},
        {path: '/aprendizaje', component: aprendizaje},
        {path: '/inpsicopedia', component: inpsicopedia},
        {path: '/quienes', component: quienes},
        {path: '/semillas', component: semillas},
        {path: '/obras', component: obras},
        {path: '/centroest', component: centroest},
        {path: '/gamesucb', component: gamesucb},
        {path: '/intercarreras', component: intercarreras},
        {path: '/obrasIglesia', component: obrasIglesia},
        {path: '/contactos', component: contactos},
        {path: '/login', component: login},
        {path: '/menuABM', component: menuABM},
        {path: '/ABM', component: ABM},

    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
