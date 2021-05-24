// we need to import vue to this pure js file in order to say that I am using vue 
import Vue from "vue"
import ProductList from "./components/products/ProductList"
import ProductSell from "./components/products/ProductSell"
import ProductPurchase from "./components/products/ProductPurchase"
import VueRouter from "vue-router"

// We need to defive Vue router 
Vue.use(VueRouter);


// We are defining the routes here. path and component connection
const routes = [
    { path: "/", component: ProductList },
    { path: "/product-sell", component: ProductSell },
    { path: "/product-buy", component: ProductPurchase },
    { path: "*", redirect: "/" }
];

// We are using vue roter here 
export const router = new VueRouter({
    mode: "history",
    routes
});