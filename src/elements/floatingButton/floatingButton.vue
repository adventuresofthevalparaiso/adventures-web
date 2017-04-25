<template>
    <button type="button" class="floatingButton" :class="color" @click="onClick">{{ text }}</button>
</template>

<script>
    import css from './floatingButton.css'

    export default {
        props: {
            callback: Function,
            color: String,
            text: String,
            url: String
        },
        methods: {
            onClick () {
                if (this.callback) {
                    this.callback()
                } else {
                    window.open(this.url)
                }
            }
        }
    }
</script>
