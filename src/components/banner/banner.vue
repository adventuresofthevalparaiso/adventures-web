<template>
    <header class="banner" role="banner">
        <figure>
            <img :src="`${active.src}`" :alt="active.text">
            <figcaption>
                <span class="quote" v-if="active.quote && active.text">"</span>
                    {{ active.text }}
                <span class="quote" v-if="active.quote && active.text">"</span>
                <span class="credit">{{ active.credit }}</span>
            </figcaption>
        </figure>
    </header>
</template>

<script>
    import data from '../../data'

    // stylesheet
    import css from './banner.css'

    // modules / plugins
    import gsap from 'gsap'

    // data
    const images = data.banner.images

    export default {
        data () {
            return {
                active: null,
                caption: null,
                image: null,
                images,
                iteration: 0,
            }
        },
        beforeMount () {
            this.active = this.images[this.iteration]
        },
        mounted () {
            // get the dom nodes
            this.caption = document.querySelector('.banner figure figcaption')
            this.image = document.querySelector('.banner figure img')

            // play first iteration
            this.play()
        },
        methods: {
            play () {
                TweenLite.ticker.fps(60)

                const duration = 20
                const timeline = new TimelineLite()

                timeline.fromTo(this.image, duration, { scale: 1 }, { scale: 0.7 })
                .fromTo([this.image, this.caption], 0.6, { opacity: 1 }, { opacity: 0, onComplete: () => {
                    this.iteration = (this.iteration === this.images.length - 1) ? 0 : this.iteration + 1
                    this.active = this.images[this.iteration]

                    timeline.set(this.image, { scale: 1 })
                        .fromTo([this.image, this.caption], 2, { opacity: 0 }, { opacity: 1, onComplete: () => {
                            timeline.restart()
                        }})
                }})
            }
        }
    }
</script>
