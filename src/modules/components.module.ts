import { App } from "vue";
import navBar from "@/components/nav-bar.vue";

export default function setComponent(app:App){
    app.component('nav-bar', navBar)
}