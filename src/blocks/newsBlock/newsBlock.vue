<template>
    <section class="block newsblock">
        <figure @click="open(image)">
            <img :src="image" alt="">
        </figure>
        <article class="newsitem">
            <strong v-html="title"></strong>
            <p v-html="body"></p>
        </article>
    </section>
</template>

<script>
    // stylesheet
    import css from './newsBlock.css'

    export default {
        props: {
            body: String,
            image: String,
            title: String
        },
        methods: {
            open (image) {
                this.$store.dispatch('UPDATE_MODAL', {type: 'image', data: image}).then(() => {
                    this.$store.dispatch('OPEN_MODAL')
                })
            }
        }
    }
</script>
