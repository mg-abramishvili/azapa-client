<template>
    <div class="contacts-page">
        <h1>Контакты</h1>

        <div v-html="shop.contacts_text"></div>
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