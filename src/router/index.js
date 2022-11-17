import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from '../views/Catalog.vue'
import Delivery from '../views/Delivery.vue'
import Contacts from '../views/Contacts.vue'
import About from '../views/About.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/catalog/:page',
            name: 'Catalog',
            component: Catalog
        },
        {
            path: '/delivery',
            name: 'Delivery',
            component: Delivery
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts
        },
    ]
})

export default router
