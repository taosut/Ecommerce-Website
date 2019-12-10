// import Vuex from 'vuex';
// import Vue from 'vue';

// Vue.use(Vuex);


// const createStore = () => {
//     return new Vuex.Store({
//         state: {
//             registrations: [],
//             users : 0
//         },
//         getters:{

//             getCurrentUser(state){
//                 return state.users
//             }
//         },
//         mutations:{
//             saveCurrentLoggedInUser(state, exercise){
//                 console.log('selecting exercise mutation, ' + exercise)
//                 state.users = exercise
//               }
//         },
//         actions:{
//             saveCurrentLoggedInUser(context, exercise){
//                 console.log('selecting exercise action, ' + exercise)
//                 context.commit('saveCurrentLoggedInUser', exercise);
//               }
//         }
//     });
//   };

//   export default createStore


import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const state = () => ({


    //global var
    name: "",
    user_id: 0,
    cart: 0,
    cart_data: [],
    isLoggedIn : 0,
    getCategory: [],
    getAllProducts: [],
    getAllOrder: [],
    getSingleProduct: [],

    
    cart_address: []


    

})


export const mutations = {

    isLoggedIn(state, isLoggedIn) {
        console.log('selecting exercise mutation, ' + isLoggedIn)
        state.isLoggedIn = isLoggedIn
    },

    name(state, name) {
        console.log('selecting exercise mutation, ' + name)
        state.name = name
    },

    getCategory(state, getCategory) {
        console.log('selecting exercise mutation, ' + getCategory)
        state.getCategory = getCategory
    },
    getAllProducts(state, getAllProducts) {
        console.log('selecting exercise mutation, ' + getAllProducts)
        state.getAllProducts = getAllProducts
    },
    getAllOrder(state, getAllOrder) {
        console.log('selecting exercise mutation, ' + getAllOrder)
        state.getAllOrder = getAllOrder
    },
   
    getSingleProduct(state, getSingleProduct) {
        console.log('selecting exercise mutation, ' + getSingleProduct)
        state.getSingleProduct = getSingleProduct
    },
    cart(state, cart) {
        console.log('selecting exercise mutation, ' + cart)
        state.cart = cart
    },
    cart_data(state, cart_data) {
        console.log('selecting exercise mutation, ' + cart_data)
        state.cart_data = cart_data
    },
    cart_address(state, cart_address) {
        console.log('selecting exercise mutation, ' + cart_address)
        state.cart_address = cart_address
    },
}


export const getters = {

 }



export const actions = {



    // resetCogetCategoryunter({ commit, state }, payload) {

    //     console.log(payload)

    //     var bodyFormData = new FormData()

    //     bodyFormData.append('customer_id', payload)

    //     return new Promise((resolve, reject) => {

    //         axios({
    //             method: 'POST',
    //             url: state.api.resetCounter,
    //             data: bodyFormData,
    //             contentType: 'application/json',
    //             headers: {
    //                 'Authorization': "bearer " + this.$cookies.get('access_token')
    //             }
    //         })
    //             .then(res => {
    //                 console.log(res)
    //                 console.log('response')
    //                 commit('checkCounter', 0);
    //                 resolve(res)
    //             })
    //             .catch(err => {
    //                 console.log('error in request', err)
    //             })
    //     })
    // },




    login({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'POST',
                url: state.api.login,
                data : payload,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
                // }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    commit('name' , res.data.user_info.name )
                    commit('isLoggedIn' , 1)
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },


    customer_signup({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'POST',
                url: state.api.customer_signup,
                data : payload,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
                // }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },


    addToCart({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'POST',
                url: state.api.addToCart,
                data : payload,
                contentType: 'application/json',
                headers: {
                    'Authorization': "Bearer " + this.$cookies.get('access_token')
                }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    commit('cart' , res.data.length)
                    commit('cart_data' , res.data)
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },

    getCartByUser({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.api.getCartByUser,
                data : payload,
                contentType: 'application/json',
                headers: {
                    'Authorization': "Bearer " + this.$cookies.get('access_token')
                }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    commit('cart' , res.data.length)
                    commit('cart_data' , res.data)
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },

    removeFromCart({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'DELETE',
                url: state.api.removeFromCart + payload,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
                // }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },

    changeCartQuantity({ commit, state }, { id , payload }) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'PUT',
                data: payload,
                url: state.api.removeFromCart + id,
                contentType: 'application/json',
                headers: {
                    'Authorization': "bearer " + this.$cookies.get('access_token')
                }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },


    
    createBid({ commit, state }, payload) {


        return new Promise((resolve, reject) => {



            axios({
                method: 'POST',
                data: payload,
                url: state.api.createBid,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
                // }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },


    signup({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'POST',
                url: state.api.signup,
                data : payload,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
                // }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },


    getCategory({ commit, state }) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.api.getCategory,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
                // }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    commit('getCategory', res.data);
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },

    getSingleProduct({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.api.getSingleProduct + payload,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
                // }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    commit('getSingleProduct', res.data);
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },


    getsubCategory({ commit, state }, payload) {


        return new Promise((resolve, reject) => {


            if(payload == 0){
                payload = "all"
            }



            axios({
                method: 'GET',
                url: state.api.getsubCategory + "/" + payload,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
                // }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    commit('getCategory', res.data);
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },

    getBrand({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            
            if(payload == 0){
                payload = "all"
            }

            axios({
                method: 'GET',
                url: state.api.getBrand + "/" + payload,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
                // }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    commit('getCategory', res.data);
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },

    allProducts({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.api.eachCategoryProducts,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "Bearer " + this.$cookies.get('access_token')
                // }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    commit('getAllProducts', res.data);
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },

    getAllUserAddress({ commit, state }) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.api.getalluseraddress,
                contentType: 'application/json',
                headers: {
                    'Authorization': "Bearer " + this.$cookies.get('access_token')
                }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },

    addNewAddress({ commit, state } , payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'POST',
                data: payload,
                url: state.api.addnewuseraddress,
                contentType: 'application/json',
                headers: {
                    'Authorization': "Bearer " + this.$cookies.get('access_token')
                }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },

    getrazorpayapi({ commit, state }) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.api.getrazorpayapi,
                contentType: 'application/json',
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },

    order_payment_success({ commit, state },  payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'POST',
                data: payload,
                url: state.api.order_payment_success,
                contentType: 'application/json',
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },

    order_payment_failed({ commit, state },payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'PUT',
                data: payload,
                url: state.api.order_payment_failed,
                contentType: 'application/json',
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },

  
}

