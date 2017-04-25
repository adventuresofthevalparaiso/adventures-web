<template>
    <div class="splash">
        <div class="loader">
            <div class="text" v-html="slogan"></div>
            <div class="bar">
                <span class="inner"></span>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../../data'

    // stylesheet
    import css from './splash.css'

    // modules / plugins
    import gsap from 'gsap'
    import mojs from 'mo-js'

    export default {
        data () {
            return {
                bar: null,
                inner: null,
                loader: null,
                splash: null,
                text: null,
                timeline: null,
                slogan: data.splash.data.slogan
            }
        },
        mounted () {
            this.bar = document.querySelector('.bar')
            this.inner = document.querySelector('.inner')
            this.loader = document.querySelector('.loader')
            this.splash = document.querySelector('.splash')
            this.text = document.querySelector('.text')

            this.moTimeline = new mojs.Timeline()
            this.play()
        },
        methods: {
            play () {
                TweenLite.ticker.fps(60)

                const time1 = Math.random(15) * 1
                const time2 = Math.random(10) * 2
                const timeline = new TimelineLite()

                timeline.fromTo(this.text, 1, { y: 80 }, { y: 0, ease: Expo.easeOut })
                        .to(this.bar, time1, { width: '100%', delay: -0.5, ease: Expo.easeOut })
                        .to(this.inner, time2, { width: '100%', delay: -time1 * 0.5, onComplete: () => {
                            this.burst()
                        }})
                        .to(this.bar, 0.3, { width: '0%', delay: 1 })
                        .to(this.splash, 0.7, { y: 35, delay: -0.3 })
                        .to(this.splash, 0.5, { opacity: 0, display: 'none', delay: -0.7, ease: Power2.easeOut })
            },
            burst () {
                let loader = this.loader
                loader.style.overflow = 'visible'

                this.moTimeline.add(new mojs.Shape({
                    parent: loader,
                    duration: 750,
                    type: 'circle',
                    radius: {0: 40},
                    fill: 'transparent',
                    stroke: '#51a025',
                    strokeWidth: {35: 0},
                    opacity: 0.2,
                    top: '45%',
                    easing: mojs.easing.bezier(0, 1, 0.5, 1)
                }))
                this.moTimeline.add(new mojs.Shape({
                    parent: loader,
                    duration: 500,
                    delay: 100,
                    type: 'circle',
                    radius: {0: 20},
                    fill: 'transparent',
                    stroke: '#51a025',
                    strokeWidth: {5: 0},
                    opacity: 0.2,
                    x : 40,
                    y : -60,
                    easing: mojs.easing.sin.out
                }))
                this.moTimeline.add(new mojs.Shape({
                    parent: loader,
                    duration: 500,
                    delay: 180,
                    type: 'circle',
                    radius: {0: 10},
                    fill: 'transparent',
                    stroke: '#51a025',
                    strokeWidth: {5: 0},
                    opacity: 0.5,
                    x: -10,
                    y: -80,
                    isRunLess: true,
                    easing: mojs.easing.sin.out
                }))
                this.moTimeline.add(new mojs.Shape({
                    parent: loader,
                    duration: 800,
                    delay: 240,
                    type: 'circle',
                    radius: {0: 20},
                    fill: 'transparent',
                    stroke: '#51a025',
                    strokeWidth: {5: 0},
                    opacity: 0.3,
                    x: -70,
                    y: -10,
                    easing: mojs.easing.sin.out
                }))
                this.moTimeline.add(new mojs.Shape({
                    parent: loader,
                    duration: 800,
                    delay: 240,
                    type: 'circle',
                    radius: {0: 20},
                    fill: 'transparent',
                    stroke: '#51a025',
                    strokeWidth: {5: 0},
                    opacity: 0.4,
                    x: 80,
                    y: -50,
                    easing: mojs.easing.sin.out
                }))
                this.moTimeline.add(new mojs.Shape({
                    parent: loader,
                    duration: 1000,
                    delay: 300,
                    type: 'circle',
                    radius: {0: 15},
                    fill: 'transparent',
                    stroke: '#51a025',
                    strokeWidth: {5: 0},
                    opacity: 0.2,
                    x: 20,
                    y: -100,
                    easing: mojs.easing.sin.out
                }))
                this.moTimeline.add(new mojs.Shape({
                    parent: loader,
                    duration: 600,
                    delay: 330,
                    type: 'circle',
                    radius: {0: 25},
                    fill: 'transparent',
                    stroke: '#51a025',
                    strokeWidth: {5: 0},
                    opacity: 0.4,
                    x: -40,
                    y: -90,
                    easing: mojs.easing.sin.out
                }))

                this.moTimeline.replay()
            }
        }
    }
</script>
