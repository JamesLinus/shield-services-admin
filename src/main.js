import Vue from 'vue'
import VueRouter from 'vue-router'
import { configRouter } from './route-config'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'

require('es6-promise').polyfill()

// Install router
Vue.use(VueRouter)

// Create router
const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})

// Configure routes.
configRouter(router)

sync(store, router)

// Bootstrap the app.
const App = Vue.extend(require('./App.vue'))
router.start(App, '#app')

// Just for debugging.
window.router = router
