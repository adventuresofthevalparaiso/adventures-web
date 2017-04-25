<template>
    <section class="block highlightblock">
        <figure>
            <img :src="image" alt="">
        </figure>
        <article class="info">
            <strong v-html="title"></strong>
            <p v-html="body"></p>
        </article>
    </section>
</template>

<script>
    // stylesheet
    import css from './highlightBlock.css'

    export default {
        props: {
            body: String,
            image: String,
            title: String
        }
    }
</script>
