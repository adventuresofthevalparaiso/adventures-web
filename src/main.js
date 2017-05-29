// Polyfills
import 'babel-polyfill'
import Vue from 'vue'

import config from './config'
Vue.config.productionTip = config.Vue.productionTip

// Services
import { sync } from 'vuex-router-sync'
import router from './router'
import store from './store'
sync(store, router)

import App from './App'

// Vue instance as eventbus
// Event.$emit('EXAMPLE')
// Event.$on('EXAMPLE, () => {})
window.Event = new Vue()

new Vue({
    el: config.Vue.el,
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
})
