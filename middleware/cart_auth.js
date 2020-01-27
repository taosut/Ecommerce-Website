export default function({ store, redirect, app }) {
    console.log(store.state.session_key)
    if (!app.$cookies.get('access_token') || !store.state.session_key) {
        return redirect('/cart')
    }
}