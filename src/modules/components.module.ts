import { App } from "vue";
import navBar from "@/components/nav-bar.vue";
import cardItem from "@/components/card-item.vue";

export default function setComponent(app:App){
    app.component('nav-bar', navBar)
    app.component('card-item', cardItem)
}