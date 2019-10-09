// import axios from 'axios'

// import state from "./api"

// export const state = () => ({

//     all_admins: []

// })


// export const mutations = {

//     all_admins(state, all_admins) {
//         console.log('selecting exercise mutation, ' + all_admins)
//         state.all_admins = all_admins
//     }

// }

// export const actions = {

//     getAdminList({ commit, state }) {

//         console.log(state.login)

//         axios({
//             method: 'GET',
//             url: state.api.getAllUser,
//             headers: {
//                 'Authorization': "bearer " + this.$cookies.get('access_token')
//             }
//         })
//             .then(res => {
//                 console.log(res.data.users)
//                 console.log('response')
//                 commit('all_admins', res.data.users);
//             })
//             .catch(err => {
//                 console.log('error in request', err)
//             })
//     }

// }

