<template>
    <section class="block popupblock">
        <figure @click="open(image)">
            <img :src="image" alt="">
            <figcaption v-html="title"></figcaption>
        </figure>
    </section>
</template>

<script>
    // stylesheet
    import css from './popupBlock.css'

    export default {
        props: {
            body: String,
            image: String,
            title: String
        },
        methods: {
            open (image) {
                this.$store.dispatch('UPDATE_MODAL', {type: 'text', data: this.body}).then(() => {
                    this.$store.dispatch('OPEN_MODAL')
                })
            }
        }
    }
</script>
