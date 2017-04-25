<template>
    <aside role="search" class="search">
        <floatingButton class="closeBtn" :callback="closeSearch" :color="'white'" :text="'X'" :url="''"></floatingButton>
        <h3>{{ results_for }} '<strong>{{ query }}</strong>'</h3>
        <transition-group tag="ul" name="search-transition" class="results" v-if="results.length">
            <li v-for="(result, index) in results" v-if="pages[result] && result != 'home'" :key="index">
                <router-link :to="result" @click.native="closeSearch">{{ pages[result].title }}</router-link>
            </li>
        </transition-group>
        <p v-else>
            <br>{{ no_results }}
        </p>
    </aside>
</template>

<script>
    import data from '../../data'

    // stylesheet
    import css from './search.css'

    // data
    const pages = data.pages.data
    const results_for = data.search.data.results_for
    const no_results = data.search.data.no_results

    // elements
    import floatingButton from '../../elements/floatingButton/floatingButton'

    export default {
        components: {
            floatingButton
        },
        computed: {
            query: {
                get () {
                    return this.$store.state.search.query
                }
            }
        },
        data () {
            return {
                pages,
                results: [],
                no_results,
                results_for
            }
        },
        watch: {
            query (query) {
                query = query.toLowerCase()

                let results = []
                for (let page in pages) {
                    let score = 0
                    let slug = page

                    // check title first
                    let title = pages[page].title
                    if (title.toLowerCase().indexOf(query) != -1) {
                        score++
                    }

                    // then blocks - refactor later ._.
                    let blocks = pages[page].blocks
                    for (let row of blocks) {
                        for (let block of row) {
                            for (let item in block) {
                                if (typeof block[item] === 'string' && block[item].toLowerCase().indexOf(query) != -1) {
                                    score++
                                } else if (block[item].title) {
                                    if (block[item].title.toLowerCase().indexOf(query) != -1) {
                                        score++
                                    }
                                    for (let item of block[item].items) {
                                        if (item.toLowerCase().indexOf(query) != -1) {
                                            score++
                                        }
                                    }
                                }
                            }
                        }
                    }
                    results.push(`${score}${slug}`)
                }
                results = results.sort().reverse().filter(entry => {
                    return entry.indexOf('0') === -1
                }).map(entry => {
                    return entry.substring(1)
                })
                this.results = results
            }
        },
        methods: {
            closeSearch (event) {
                this.$store.dispatch('SEARCH', {query: ''})
            }
        }
    }
</script>
