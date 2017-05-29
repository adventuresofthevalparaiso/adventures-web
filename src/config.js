import Vue from 'vue'

const config = {
    Site: {
        title: 'Adventures of the Valparaiso'
    },
    Vue: {
        productionTip: false,
        el: '#app'
    }
}

Vue.mixin({
    created: function () {
        this.$config = config
    }
})

export default config
