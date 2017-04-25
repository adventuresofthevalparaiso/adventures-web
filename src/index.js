// Babel polyfills for older browsers (import ONLY what is required, not the whole package!)
import 'core-js/es6/promise'
import 'core-js/es6/symbol'

import Vue from 'vue'
// Enable dev tools if we're in development environment
window.devmode = (process.env.NODE_ENV === 'development')
Vue.config.debug = Vue.config.devtools = window.devmode

// Sentry.io error reporting (except if we're in dev mode)
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
if (!window.devmode) {
    Raven
        .config('https://bce0193edf284104811fec20caf6f87e@sentry.io/99584')
        .addPlugin(RavenVue, Vue)
        .install()
}

// Youtube API
import { installYT } from './services/utils'
installYT()

// Primary stylesheets
import './style/reset.css'
import './style/base.css'

// App setup
import { app } from './app'

// // Start
app.$mount('#app')
