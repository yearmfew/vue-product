// we need to import vue to this pure js file in order to say that I am using vue 
import Vue from "vue"

// I am importing my components. I need them to connect with paths. 
import ProductList from "./components/products/ProductList"
import ProductSell from "./components/products/ProductSell"
import ProductPurchase from "./components/products/ProductPurchase"

// importing vuerouter. 
import VueRouter from "vue-router"

// We need to say that we are using Vue router 
Vue.use(VueRouter);


// We are defining the routes here. path and component connection
const routes = [
    { path: "/", component: ProductList },
    { path: "/product-sell", component: ProductSell },
    { path: "/product-buy", component: ProductPurchase },
    { path: "*", redirect: "/" }
];

// We are using vue router here 
export const router = new VueRouter({
    mode: "history",
    routes // sending the routes that we have defined above
});