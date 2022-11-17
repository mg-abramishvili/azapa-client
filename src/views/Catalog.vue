<template>
    <div class="catalog-page">        
        <div class="container">
            <h1>Каталог</h1>

            <p v-if="views.loading">Загрузка...</p>

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

                <div class="text-center">
                    <div class="btn-group me-2" role="group">
                        <button @click="goToPrevPage()" type="button" class="btn btn-outline-secondary">Назад</button>
                        <button @click="goToNextPage()" type="button" class="btn btn-outline-secondary">Далее</button>
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

            prev_page: null,
            next_page: null,

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
            this.views.loading = true

            axios.get(`http://azapa.ru/api/mag/${window.location.hostname}/products` + '?page=' + this.$route.params.page)
            .then(response => {
                this.products = response.data.data

                if(response.data.prev_page_url) {
                    this.prev_page = parseInt(this.$route.params.page) - 1
                }

                if(response.data.next_page_url) {
                    this.next_page = parseInt(this.$route.params.page) + 1
                }

                this.views.loading = false

                window.scrollTo(0,0)
            })
        },
        goToPrevPage() {
            if(this.prev_page) {
                this.$router.push({name: 'Catalog', params: {page: this.prev_page} })

                this.loadProducts()
            }
        },
        goToNextPage() {
            if(this.next_page) {
                this.$router.push({name: 'Catalog', params: {page: this.next_page} })

                this.loadProducts()
            }
        }
    },
}
</script>