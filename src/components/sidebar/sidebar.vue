<template>
    <aside class="sidebar" :style="{ height: height + 'px' }">
        <router-link to="/">
            <img :src="logo.src" :alt="logo.alt" class="logo">
        </router-link>
        <button class="hamburger" @click="$store.dispatch('OPEN_NAV')">
            <span>menu</span>
        </button>

        <searchField></searchField>

        <languageSwitch></languageSwitch>

        <section class="mainnav" :class="{ 'nav_open': $store.state.nav.open }">
            <floatingButton class="closeBtn closeNav" :color="'white'" :text="''" :url="''" :callback="closeNav"></floatingButton>
            <navList :list="list" v-for="(list, index) in navigation" :key="index"></navList>
            <floatingButton class="shopbutton shopbutton_mobile" :color="button.color" :text="button.text" :url="button.url"></floatingButton>
        </section>

        <floatingButton class="shopbutton" :color="button.color" :text="button.text" :url="button.url" v-if="button.visible"></floatingButton>
        <p class="align-center terms">
            <small><a href="downloads/leveringsvoorwaarden.doc" class="underline" download>{{ terms }}</a></small>
        </p>
    </aside>
</template>

<script>
    import data from '../../data'

    // stylesheet
    import css from './sidebar.css'

    // elements
    import floatingButton from '../../elements/floatingButton/floatingButton'
    import navList from '../../elements/navList/navList'
    import searchField from '../../elements/searchField/searchField'
    import languageSwitch from '../../elements/languageSwitch/languageSwitch'

    // data
    const navigation = data.navigation.items
    const button = data.sidebar.data.button
    const logo = data.sidebar.data.logo
    const terms = data.misc.data.terms

    export default {
        components: {
            languageSwitch, searchField, navList, floatingButton
        },
        mounted () {
            this.setHeight()
        },
        watch: {
            '$route': function(newVal, oldVal) {
                this.setHeight()
            }
        },
        data () {
            return {
                button,
                logo,
                navigation,
                terms,
                height: document.body.getBoundingClientRect().bottom
            }
        },
        methods: {
            setHeight () {
                setTimeout(() => {
                    const body = document.body
                    const html = document.documentElement

                    this.height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight )
                }, 10)
            },
            closeNav () {
                this.$store.dispatch('CLOSE_NAV')
            }
        }
    }
</script>
