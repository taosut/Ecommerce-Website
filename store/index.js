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
    user_email: "",
    user_id: 0,
    cart: 0,
    cart_data: [],
    isLoggedIn : 0,
    getCategory: [],
    getAllProducts: [],
    getAllOrder: [],
    getAllAuction: [],
    getAllCompletedAuction: [],
    getAllOngoingAuction: [],
    getAllUpcomingAuction: [],
    getSingleProduct: [],
    getSingleAuction: [],
    


    

})


export const mutations = {

    isLoggedIn(state, isLoggedIn) {
        console.log('selecting exercise mutation, ' + isLoggedIn)
        state.isLoggedIn = isLoggedIn
    },

    user_email(state, user_email) {
        console.log('selecting exercise mutation, ' + user_email)
        state.user_email = user_email
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
    getAllAuction(state, getAllAuction) {
        console.log('selecting exercise mutation, ' + getAllAuction)
        state.getAllAuction = getAllAuction
    },
    getAllCompletedAuction(state, getAllCompletedAuction) {
        console.log('selecting exercise mutation, ' + getAllCompletedAuction)
        state.getAllCompletedAuction = getAllCompletedAuction
    },
    getAllOngoingAuction(state, getAllOngoingAuction) {
        console.log(getAllOngoingAuction)
        state.getAllOngoingAuction = getAllOngoingAuction
    },
    getSingleProduct(state, getSingleProduct) {
        console.log('selecting exercise mutation, ' + getSingleProduct)
        state.getSingleProduct = getSingleProduct
    },
    getSingleAuction(state, getSingleAuction) {
        console.log('selecting exercise mutation, ' + getSingleAuction)
        state.getSingleAuction = getSingleAuction
    },
    getAllUpcomingAuction(state, getAllUpcomingAuction) {
        console.log('selecting exercise mutation, ' + getAllUpcomingAuction)
        state.getAllUpcomingAuction = getAllUpcomingAuction
    },
    cart(state, cart) {
        console.log('selecting exercise mutation, ' + cart)
        state.cart = cart
    },
    cart_data(state, cart_data) {
        console.log('selecting exercise mutation, ' + cart_data)
        state.cart_data = cart_data
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
                    commit('user_email' , res.data.user_info.email)
                    commit('isLoggedIn' , 1)
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

    getCartByUser({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.api.getCartByUser + this.$cookies.get('user_id'),
                data : payload,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
                // }
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

    getAllOngoingAuction({ commit, state }) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.api.getAllOngoingAuction,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
                // }
            })
                .then(res => {
                    console.log('getAllOngoingAuction')
                    console.log('getAllOngoingAuction ' + res.data)
                    commit('getAllOngoingAuction', res.data);
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
                url: state.api.allProducts,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
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

    getAllAuction({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.api.getAllAuction,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
                // }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    commit('getAllAuction', res.data);
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },

    getAllCompletedAuction({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.api.getAllCompletedAuction,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
                // }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    commit('getAllCompletedAuction', res.data);
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },

    getAllUpcomingAuction({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.api.getAllUpcomingAuction,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
                // }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    commit('getAllUpcomingAuction', res.data);
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },

    getSingleAuction({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.api.getSingleAuction + localStorage.getItem("single_product"),
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
                // }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    commit('getSingleAuction', res.data);
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },

    getBiddingFromAuctionID({ commit, state }, payload) {


        return new Promise((resolve, reject) => {

            axios({
                method: 'GET',
                url: state.api.getBiddingFromAuctionID + payload,
                contentType: 'application/json',
                // headers: {
                //     'Authorization': "bearer " + this.$cookies.get('access_token')
                // }
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    commit('getSingleAuction', res.data);
                    resolve(res)
                })
                .catch(err => {
                    console.log('error in request', err)
                })
        })
    },










}

