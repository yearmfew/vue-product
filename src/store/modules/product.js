import Vue from "vue"
const state = {
    products: [],
}

// brings datas from the state.
const getters = {
    getProducts(state) {
        return state.products;
    },
    getProduct(state) {

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
        // Vue resource ...

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
            })

    },
    sellProduct({ commit }, payload) {
        // Vue resource ...

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}