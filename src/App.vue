<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
</script>

<template>
    <Header :shop="shop" />

    <RouterView />

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
            axios.get('http://127.0.0.1:8000/api/mag/5rhwPL2y2vxv5aUz/info')
            .then(response => {
                this.shop = response.data

                this.views.loading = false
            })
        },
    },
}
</script>