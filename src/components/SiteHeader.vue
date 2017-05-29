<template>
    <header :class="(scrollTop === 0) ? 'faded' : ''">
        <div>
            <SiteMenu></SiteMenu>
        </div>
        <h1>{{ $config.Site.title }}</h1>
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
            scrollTop: 1,
            timeout: 2000
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
            this.$el.addEventListener('mouseover', event => {
                this.scrollTop = 1
            })
            this.$el.addEventListener('mouseout', event => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop
                if (scrollTop === 0) {
                    this.scrollTop = 0
                }
            })
            setTimeout(() => {
                this.scrollTop = 0
            }, this.timeout)
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
        transition: opacity 4s;
        h1 {
            font-weight: 200;
        }
        &.faded {
            opacity: 0;
        }
    }
</style>
