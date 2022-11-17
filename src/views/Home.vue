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
    </div>
</template>
