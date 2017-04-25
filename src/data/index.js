import store from '../store'

const languages = ['nl', 'en', 'de', 'it', 'fr']
let language = localStorage.getItem('language') || (navigator.language || navigator.userLanguage).substring(0,2).toLowerCase()

if (languages.indexOf(language) === -1) {
    language = 'en'
}

const banner = require(`./${language}/banner.js`)
const downloads = require(`./${language}/downloads.js`)
const navigation = require(`./${language}/navigation.js`)
const pages = require(`./${language}/pages.js`)
const search = require(`./${language}/search.js`)
const sidebar = require(`./${language}/sidebar.js`)
const splash = require(`./${language}/splash.js`)
const misc = require(`./${language}/misc.js`)

const data = {
    banner, downloads, navigation, pages, search, sidebar, splash, misc
}

export default data
