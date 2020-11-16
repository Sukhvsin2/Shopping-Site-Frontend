import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home"
import PageNotFound from "@/views/PageNotFound"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '*',
        name: 'PageNotFound',
        component: PageNotFound
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router;