import { App } from "vue";
import Menubar from "primevue/menubar";
export default function setPrimeVue(app:App){
    app.component('menu-bar', Menubar)
}