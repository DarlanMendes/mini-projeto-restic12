import { App } from "vue";
import Menubar from "primevue/menubar";
import Card from "primevue/card";
import Rating from "primevue/rating"
export default function setPrimeVue(app:App){
    app.component('menu-bar', Menubar)
    app.component('card-prime', Card)
    app.component('rating-prime', Rating)
}