import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Initial state
const state = {
    language: localStorage.getItem('language') || 'en',
    search: {
        query: ''
    },
    modal: {
        data: '',
        open: false,
        type: ''
    },
    nav: {
        open: false
    },
    blog: null
}

// Actions
const actions = {
    POPULATE_BLOG: ({ commit }, { data }) => {
        return new Promise((resolve, reject) => {
            commit('POPULATE_BLOG', { data })
            resolve()
        })
    },

    SEARCH: ({ commit }, { query }) => {
        commit('UPDATE_SEARCH_QUERY', { query })
    },

    OPEN_MODAL: ({ commit }) => {
        commit('OPEN_MODAL')
    },
    CLOSE_MODAL: ({ commit }) => {
        return new Promise((resolve, reject) => {
            commit('CLOSE_MODAL')
            resolve()
        })
    },
    UPDATE_MODAL: ({ commit }, { type, data }) => {
        return new Promise((resolve, reject) => {
            commit('UPDATE_MODAL', { type, data })
            resolve()
        })
    },

    OPEN_NAV: ({ commit }) => {
        commit('OPEN_NAV')
    },
    CLOSE_NAV: ({ commit }) => {
        commit('CLOSE_NAV')
    }
}

// Mutations
const mutations = {
    POPULATE_BLOG: (state, { data }) => {
        state.blog = data
    },

    UPDATE_SEARCH_QUERY: (state, { query }) => {
        state.search.query = query
    },

    OPEN_MODAL: (state) => {
        state.modal.open = true
    },
    CLOSE_MODAL: (state) => {
        state.modal.open = false
    },
    UPDATE_MODAL: (state, { type, data }) => {
        state.modal.type = type
        state.modal.data = data
    },

    OPEN_NAV: (state) => {
        state.nav.open = true
    },
    CLOSE_NAV: (state) => {
        state.nav.open = false
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store
