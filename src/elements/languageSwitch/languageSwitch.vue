<template>
    <ul class="languageswitch">
        <li v-for="(language, index) in languages" :class="{ 'active': active === language.code }" @click="setLanguage(language.code)">
            <img :src="language.icon" :title="language.name">
        </li>
    </ul>
</template>

<script>
    import data from '../../data'

    // stylesheet
    import css from './languageSwitch.css'

    export default {
        data () {
            return {
                active: localStorage.getItem('language') || (navigator.language || navigator.userLanguage).substring(0,2).toLowerCase(),
                languages: [
                    {
                        name: 'Nederlands',
                        icon: require('../../images/flag-nl.png'),
                        code: 'nl'
                    },
                    {
                        name: 'English',
                        icon: require('../../images/flag-uk.png'),
                        code: 'en'
                    },
                    {
                        name: 'Deutsche',
                        icon: require('../../images/flag-de.png'),
                        code: 'de'
                    },
                    {
                        name: 'Italiano',
                        icon: require('../../images/flag-it.png'),
                        code: 'it'
                    },
                    {
                        name: 'Français',
                        icon: require('../../images/flag-fr.png'),
                        code: 'fr'
                    }
                ]
            }
        },
        methods: {
            setLanguage (language) {
                localStorage.setItem('language', language)
                window.location.reload()
            }
        }
    }
</script>
