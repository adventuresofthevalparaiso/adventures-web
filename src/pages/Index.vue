<template>
    <section class="page index">
        <Splash></Splash>
    </section>
</template>

<script>
    import Splash from 'components/Splash'
    export default {
        components: { Splash },
        name: 'index'
    }
</script>

<style lang="scss">
    .index {
        height: 2000px;
    }
</style>
