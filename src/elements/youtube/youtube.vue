<template>
    <div :id="video"></div>
</template>

<script>
    import css from './youtube.css'

    export default {
        data () {
            return {
                player: null
            }
        },
        mounted () {
            setTimeout(() => {
                this.player = new YT.Player(this.video, {
                    width: 600,
                    height: 400,
                    videoId: this.video,
                    playerVars: {
                        color: 'white',
                        autoplay: true
                    },
                    events: {
                        onReady: setTimeout(() => { this.ready() }, 100)
                    }
                })
            }, 250)
        },
        props: {
            ready: Function,
            video: String
        }
    }
</script>
