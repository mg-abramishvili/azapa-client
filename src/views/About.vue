<template>
    <div class="about-page">
        <div class="container">
            <h1>О компании</h1>

            <div v-html="shop.about_text"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['shop'],
    data() {
        return {
            //
        }
    },
}
</script>