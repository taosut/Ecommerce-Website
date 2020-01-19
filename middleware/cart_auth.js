export default function({ store, redirect, app }) {
    console.log(app.$cookies.get('access_token'))
    if (!app.$cookies.get('access_token')) {
        return redirect('/cart')
    }
}