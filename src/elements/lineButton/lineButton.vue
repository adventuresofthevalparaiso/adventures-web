<template>
    <router-link :to="url">
        <button type="button" class="lineButton" :class="color" @click="onClick">{{ text }}</button>
    </router-link>
</template>

<script>
    import css from './lineButton.css'

    export default {
        props: {
            callback: Function,
            color: String,
            text: String,
            url: String
        },
        methods: {
            onClick () {
                if (this.callback) this.callback()
            }
        }
    }
</script>
