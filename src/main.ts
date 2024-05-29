import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/main.css'


import "primevue/resources/themes/mira/theme.css"

import {router} from "@/router/index"
import setPrimeVue from './modules/prime.module'
import PrimeVue from 'primevue/config'
import setComponent from './modules/components.module'
const app = createApp(App)
app.use(router)
app.use(PrimeVue)
setPrimeVue(app)
setComponent(app)
app.mount('#app')
