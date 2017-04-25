<template>
    <section class="block textblock">
        <figure>
            <img :src="image" alt="">
            <figcaption v-html="body"></figcaption>
        </figure>
    </section>
</template>

<script>
    // stylesheet
    import css from './textBlock.css'

    export default {
        props: {
            body: String,
            image: String
        }
    }
</script>
