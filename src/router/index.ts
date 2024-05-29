import { createWebHistory, createRouter} from "vue-router";
import { Views } from "@/views";
const routes = [
    {path:'/', component: Views.Home },
    {path:'/series', component: Views.Serie},
    {path:'/movies', component: Views.Movie}
]

export const router = createRouter({
    history:createWebHistory(),
    routes
})