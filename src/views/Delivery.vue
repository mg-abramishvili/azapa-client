<template>
    <div class="delivery-page">
        <h1>Доставка и оплата</h1>

        <div v-html="shop.payment_delivery_text"></div>
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