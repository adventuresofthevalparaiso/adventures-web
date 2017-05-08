import Vue from 'vue'
import Router from 'vue-router'

import Index from 'components/Index'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: __dirname,
    transitionOnLoad: true,
    linkActiveClass: 'active',
    routes: [{
        path: '/',
        name: 'index',
        component: Index
    }]
})

router.beforeEach((route, redirect, next) => {
    next()
})

router.afterEach((to, from) => {
})

export default router
