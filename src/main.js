import Vue from 'vue'
import App from './App.vue'

// we need to import our router to the vue-cli project. 
import { router } from "./router"

new Vue({
    el: '#app',
    render: h => h(App),
    router
})