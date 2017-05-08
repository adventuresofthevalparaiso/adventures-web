<template>
    <div id="app">
        <SiteHeader></SiteHeader>
        <router-view></router-view>
        <SiteFooter></SiteFooter>
    </div>
</template>

<script>
import SiteHeader from 'components/SiteHeader.vue'
import SiteFooter from 'components/SiteFooter.vue'
export default {
    components: { SiteHeader, SiteFooter },
    name: 'app'
}
</script>

<style lang="scss">
@import 'style/main.scss';
</style>
