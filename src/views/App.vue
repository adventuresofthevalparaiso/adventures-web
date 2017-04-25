<template>
    <div id="app">
        <fade>
            <modal v-if="$store.state.modal.open"></modal>
        </fade>
        <div class="wrapper" :class="{ 'blurred-overlay': $store.state.modal.open }">
            <splash></splash>
            <sidebar></sidebar>
            <div class="page">
                <fade>
                    <search v-if="searching"></search>
                </fade>
                <banner :class="{ 'grayscale-overlay': searching }"></banner>
                <keep-alive>
                    <router-view :class="{ 'grayscale-overlay': searching }"></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    // components
    import banner from '../components/banner/banner'
    import modal from '../components/modal/modal'
    import search from '../components/search/search'
    import sidebar from '../components/sidebar/sidebar'
    import splash from '../components/splash/splash'

    // transitions
    import fade from '../transitions'

    export default {
        components: {
            banner, modal, search, sidebar, splash,
            fade
        },
        computed: {
            searching: {
                get () {
                    return (this.$store.state.search.query.length > 2)
                }
            }
        }
    }
</script>
