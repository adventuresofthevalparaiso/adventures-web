<template>
    <input class="searchfield" type="search" :placeholder="placeholder" v-model="query" @mouseover="focus">
</template>

<script>
    import data from '../../data'

    // stylesheet
    import css from './searchField.css'

    // data
    const placeholder = data.search.data.placeholder

    export default {
        data () {
            return {
                placeholder
            }
        },
        computed: {
            query: {
                get () {
                    return this.$store.state.search.query
                },
                set (value) {
                    this.$store.dispatch('SEARCH', {query: value})
                }
            }
        },
        methods: {
            focus (event) {
                event.target.focus()
            }
        }
    }
</script>
