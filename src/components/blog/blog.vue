<template>
    <section>
        <section class="block newsblock blogitem" v-for="(item, index) in blog">
            <figure @click="open(item.featured_image.source)" v-if="item.featured_image">
                <img :src="item.featured_image.source" alt="">
            </figure>
            <article class="newsitem">
                <strong v-html="item.title"></strong>
                <p v-html="trim(item.excerpt)"></p>
                <p>
                    <br><a :href="item.link" target="_blank">Read more »</a>
                </p>
            </article>
        </section>
    </section>
</template>

<script>
    // stylesheet
    import css from './../../blocks/newsBlock/newsBlock.css'

    // utils
    import { shuffle } from './../../services/utils'

    export default {
        computed: {
            blog: {
                get () {
                    return this.$store.state.blog
                }
            }
        },
        props: {
            amount: Number,
            url: String
        },
        created () {
            if (!this.blog) {
                fetch(`${this.url}?filter[posts_per_page]=${this.amount}`).then(response => {
                    return response.json()
                }).then(json => {
                    this.$store.dispatch('POPULATE_BLOG', {data: json}).then(() => {
                        this.display()
                    })
                })
            }
        },
        methods: {
            display () {
                const timeline = new TimelineLite()

                setTimeout(() => {
                    let blocks = document.querySelectorAll('.blogitem')
                    blocks = shuffle(Array.prototype.slice.call(blocks))

                    for (let i = 0; i < blocks.length; ++i) {
                        timeline.fromTo(blocks[i], 0.3, { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, delay: -(i / 10) })
                    }
                }, 100)
            },
            trim (excerpt) {
                let trimmed = excerpt.substr(0, 230)
                return trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(' '))) + '...'
            },
            open (image) {
                this.$store.dispatch('UPDATE_MODAL', {type: 'image', data: image}).then(() => {
                    this.$store.dispatch('OPEN_MODAL')
                })
            }
        }
    }
</script>
