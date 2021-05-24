const state = {
    products: []
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
    saveProduct({ commit }, payload) {
        // Vue resource ...

    },
    sellProduct([commit], payload) {
        // Vue resource ...

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}