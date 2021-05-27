import Vue from 'vue'
import App from './App.vue'

// we need to import our router to the vue-cli project. 
// means: I will use a router and it is in ./router directory. 
// Also I need to create my vue instance with this router. look at here : ROUTER SEND
import { router } from "./router"
import { store } from "./store/store"

import VueResource from "vue-resource"

Vue.use(VueResource);

// changes the format of the value to given units. 
// usage : {value | currency} You can have a look to the footer vue to see how it is implemented. 
Vue.filter("currency", (value) => {
    return parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2 }) + "€"
})

new Vue({
    el: '#app',
    render: h => h(App),
    router, // ROUTER SEND
    store
})