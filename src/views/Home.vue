<script setup>
import bannerImage from '@/assets/banner.jpg'
</script>

<template>
    <div class="home">
        <div class="banner">
            <div class="container">
                <div class="banner-slide" :style="{ backgroundImage: `url(${bannerImage})` }">
                    <p>Запчасти в Москве по лучшим ценам</p>
                </div>
            </div>
        </div>

        <div class="categories">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-3">
                        <a href="#">
                            <img src="@/assets/noimg_100.png" alt="">
                            <h5>Без категории</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="products">
            <div class="container">
                <div v-if="!views.loading" class="catalog-page-products">
                    <div class="row">
                        <div v-for="product in products" class="col-12 col-lg-3">
                            <a href="#" class="catalog-page-products-item">
                                <img src="@/assets/noimg_500.png" alt="">
                                <span>{{ product.price }} руб.</span>

                                <p v-if="product.name.length > 40">
                                    {{ product.name.substring(0,40) + '...' }}
                                </p>
                                <p v-else>{{ product.name }}</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],

            views: {
                loading: true,
            }
        }
    },
    created() {
        this.loadProducts()
    },
    methods: {
        loadProducts() {
            axios.get(`http://127.0.0.1:8000/api/mag/${window.location.hostname}/products?page=1`)
            .then(response => {
                this.products = response.data.data.slice(0,12)
                
                this.views.loading = false
            })
        },
    },
}
</script>