import Vue from 'vue'
import App from './App.vue'

// we need to import our router to the vue-cli project. 
// means: I will use a router and it is in ./router directory. 
// Also I need to create my vue instance with this router. look at here : ROUTER SEND
import { router } from "./router"
import { store } from "./store/store"

new Vue({
    el: '#app',
    render: h => h(App),
    router, // ROUTER SEND
    store
})