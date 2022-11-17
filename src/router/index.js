import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/catalog',
            name: 'Catalog',
            component: () => import('../views/Catalog.vue')
        },
        {
            path: '/delivery',
            name: 'Delivery',
            component: () => import('../views/Delivery.vue')
        },
        {
            path: '/about',
            name: 'About',
            component: () => import('../views/About.vue')
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: () => import('../views/Contacts.vue')
        },
    ]
})

export default router
