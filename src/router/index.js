import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "@/views/Home"
import Home from "@/components/Home"
import SearchProducts from "@/components/products/SearchProducts"
import PageNotFound from "@/views/PageNotFound"
import Account from "@/components/login/Account"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: HomeView,
        children: [
            {
                path: '',
                component: Home
            },
            {
                path: 'search',
                component: SearchProducts
            },
        ]
    },
    {
        path: '/account',
        name: 'Account',
        component: Account
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