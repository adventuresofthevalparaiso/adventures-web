<template>
    <section class="splash">
        <VideoElement type="youtube" id="5QjVeH2Z57E" :config="videoConfig"></VideoElement>
    </section>
</template>

<script>
    import VideoElement from 'components/VideoElement'
    export default {
        components: { VideoElement },
        name: 'splash',
        data: () => ({
            videoConfig: {
                autoplay: 1,
                loop: 1,
                controls: 0,
                showinfo: 0,
                autohide: 1,
                modestbranding: 1,
                rel: 0
            }
        })
    }
</script>

<style lang="scss">

</style>
