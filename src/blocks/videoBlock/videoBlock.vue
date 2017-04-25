<template>
    <section class="block videoblock" :style="style">
        <floatingButton class="playBtn" :callback="play" :color="'grey'" :text="text" :url="''"></floatingButton>
    </section>
</template>

<script>
    // stylesheet
    import css from './videoBlock.css'

    // elements
    import floatingButton from '../../elements/floatingButton/floatingButton'

    export default {
        components: {
            floatingButton
        },
        props: {
            text: String,
            video: String
        },
        data () {
            return {
               style: {
                    backgroundImage: `url(http://img.youtube.com/vi/${this.video}/maxresdefault.jpg)`
                }
            }
        },
        methods: {
            play () {
                this.$store.dispatch('UPDATE_MODAL', {type: 'video', data: this.video}).then(() => {
                    this.$store.dispatch('OPEN_MODAL')
                })
            }
        }
    }
</script>
