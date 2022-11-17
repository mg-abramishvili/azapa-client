<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
</script>

<template>
    <Header :shop="shop" />

    <RouterView :shop="shop" />

    <Footer :shop="shop" />
</template>

<script>
export default {
    data() {
        return {
            shop: {},

            views: {
                loading: true,
            }
        }
    },
    created() {
        this.loadShopInfo()
    },
    methods: {
        loadShopInfo() {
            axios.get(`https://azapa.ru/api/mag/${window.location.hostname}/info`, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then(response => {
                this.shop = response.data

                this.views.loading = false
            })
        },
    },
}
</script>