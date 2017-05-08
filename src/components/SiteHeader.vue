<template>
    <header :class="(scrollTop === 0) ? 'faded' : ''">
        <div>
            <SiteMenu></SiteMenu>
        </div>
        <h1>Adventures of the Valparaiso</h1>
        <div>
            <Calendar></Calendar>
        </div>
    </header>
</template>

<script>
    import SiteMenu from './SiteMenu.vue'
    import Calendar from './Calendar.vue'
    export default {
        components: { SiteMenu, Calendar },
        name: 'header',
        data: () => ({
            scrollTop: 0
        }),
        methods: {
            onScroll (event) {
                this.scrollTop = window.pageYOffset || document.documentElement.scrollTop
            }
        },
        mounted () {
            window.addEventListener('scroll', event => {
                this.onScroll(event)
            })
        }
    }
</script>

<style lang="scss">
    @import '../style/constants.scss';
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: $color-offwhite;
        height: 70px;
        line-height: 65px;
        transition: opacity 1s;
        h1 {
            font-weight: 200;
        }
        &.faded {
            opacity: 0.7;
        }
    }
</style>
