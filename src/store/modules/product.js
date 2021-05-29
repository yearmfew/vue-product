import Vue from "vue"
import { router } from "../../router";

const state = {
    products: [],
}

// brings datas from the state.
const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {
        // Filter usage
        // We are using the sendet key value by writing return key. 
        // filter go over the all elements in array.  

        return key => state.products.filter(element => {
            return element.key == key;
        })
    }
}


// updates states with the datas we send to it.
const mutations = {
    updateProductList(state, product) {
        // Tüm ürünleri güncelliyor ürün ekleyince !!!!
        state.products.push(product);
    }
}


// works asynronically. Takes something from database and 
// send it to the state with the help of mutations.
const actions = {
    initApp({ commit }) {
        // We are senfing data[key] to mutation. It stores products. You can see it by console.loging
        Vue.http.get("https://vue-product-b733d-default-rtdb.europe-west1.firebasedatabase.app/products.json")
            .then(response => {
                let data = response.body;
                for (let key in data) {
                    data[key].key = key;
                    commit("updateProductList",
                        data[key]);
                }
            })
    },
    // send data to database
    saveProduct({ dispatch, commit, state }, product) {
        // Vue resource ...
        Vue.http.post("https://vue-product-b733d-default-rtdb.europe-west1.firebasedatabase.app/products.json", product)
            .then((response) => {
                // updating product list
                product.key = response.body.name;
                commit("updateProductList", product);

                // updating buying amount, selling amount and money
                let tradeResult = {
                    purchase: product.price,
                    sale: 0,
                    count: product.count
                }
                dispatch("setTradeResult", tradeResult)
                router.replace("/")
            })

    },
    sellProduct({ state, commit, dispatch }, payload) {
        // Vue resource ...
        // pass by reference
        // pass by value

        // pass by reference, we are taking the adress of the object not creating another object with a new reference.
        let product = state.products.filter(element => {
            return element.key == payload.key;
        })

        if (product) {
            let totalCount = product[0].count - payload.count;

            // patch: finds what we want in database and make changes on it.
            // we are going to wanted product by adding the key of it at the end of the link
            // then we are making changes on it by sending an object to the link with the wanted property
            Vue.http.patch("https://vue-product-b733d-default-rtdb.europe-west1.firebasedatabase.app/products/" + payload.key + ".json", { count: totalCount })
                .then(response => {
                    product[0].count = totalCount;
                    let tradeResult = {
                        purchase: 0,
                        sale: product[0].price,
                        count: payload.count
                    }
                    dispatch("setTradeResult", tradeResult)
                    router.replace("/")

                })
        }

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}