<template>
    <div :id="container"></div>
</template>

<script>
    import YouTubeIframeLoader from 'youtube-iframe'
    export default {
        data: () => ({
            container: '',
            player: null
        }),
        props: {
            type: String,
            id: String,
            height: {
                type: Number,
                default: window.innerHeight
            },
            width: {
                type: Number,
                default: window.innerWidth
            },
            config: Object
        },
        methods: {
            onPlayerReady () {
                if (this.config.muted) {
                    this.player.mute()
                }
            }
        },
        mounted () {
            this.container = `video-${this.id}-${Math.random(9999)}`
            if (this.type === 'youtube') {
                YouTubeIframeLoader.load((YT) => {
                    this.player = new YT.Player(this.container, {
                        height: this.height,
                        width: this.width,
                        videoId: this.id,
                        playerVars: this.config,
                        events: {
                            'onReady': this.onPlayerReady
                        }
                    })
                })
            }
        }
    }
</script>

<style lang="scss">

</style>
