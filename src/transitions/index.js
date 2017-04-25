import Vue from 'vue'

// modules / plugins
import gsap from 'gsap'

export default Vue.component('fade', {
    functional: true,
    render (createElement, { children }) {
        const data = {
            props: {
                appear: true,
                css: false
            },
            on: {
                created () {
                    TweenLite.ticker.fps(60)
                },
                beforeEnter (el) {
                    const timeline = new TimelineLite()
                    timeline.fromTo(el, 0.3, { opacity: 0 }, { opacity: 1 })
                },
                beforeLeave (el) {
                    const timeline = new TimelineLite()
                    timeline.fromTo(el, 0.3, { opacity: 1, display: 'block' }, { opacity: 0, display: 'none' })
                }
            }
        }
        return createElement('transition', data, children)
    }
})
