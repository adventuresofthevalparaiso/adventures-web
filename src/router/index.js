import data from '../data'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Main content
import Main from '../views/Main.vue'

// navigation data
const navigation = data.navigation

// utils
import { shuffle } from '../services/utils'

// routes
const routes = []
navigation.items.map(list => {
    list.items.map(item => {
        routes.push({
            name: item.slug,
            path: `/${item.slug}`,
            component: Main
        })
    })
})

// Index
routes.push({
    name: 'home',
    path: '/',
    component: Main
})

// Not found
routes.push({
    path: '*',
    redirect: '/'
})

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    transitionOnLoad: true,
    linkActiveClass: 'active',
    routes
})

// Animated transitions, set opacity to 0 on .block style!
router.beforeEach((route, redirect, next) => {
    const timeline = new TimelineLite()
    let blocks = document.querySelectorAll('.block')

    if (blocks.length) {
        blocks = shuffle(Array.prototype.slice.call(blocks))
        for (let i = 0; i < blocks.length; ++i) {
            timeline.fromTo(blocks[i], 0.2, { scale: 1, opacity: 1 }, { scale: 0.96, opacity: 0, delay: -(i / 10) })
        }
        let delay = (blocks.length > 2) ? blocks.length * 80 : 300
        setTimeout(() => {
            next()
        }, delay)
    } else {
        next()
    }
})

router.afterEach((route, redirect) => {
    const timeline = new TimelineLite()

    setTimeout(() => {
        let blocks = document.querySelectorAll('.block')
        blocks = shuffle(Array.prototype.slice.call(blocks))

        for (let i = 0; i < blocks.length; ++i) {
            timeline.fromTo(blocks[i], 0.2, { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, delay: -(i / 10) })
        }
    }, 100)
})

export default router



        // const infoblock = document.querySelector('.infoblock')
        // const loader1 = document.querySelector('.infoblock_loader1')
        // const loader2 = document.querySelector('.infoblock_loader2')

        // if (loader1 && loader2) {
        //     infoblock.style = loader1.style = loader2.style = ''
        //     setTimeout(() => {
        //         timeline.fromTo(loader2, 0.5, { width: '0%' }, { width: '100%' })
        //                 .fromTo(loader1, 0.3, { x: 0 }, { x: '100%', delay: -0.1 })
        //                 .fromTo(loader2, 0.3, { x: 0 }, { x: '100%', delay: -0.1 })
        //                 .set(infoblock, { borderLeft: '10px solid #789a6e', delay: -0.5 })
        //     }, 300)
        // }
