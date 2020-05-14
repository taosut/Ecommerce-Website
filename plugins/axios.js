export default ({ store, $axios }) => {
    $axios.defaults.baseURL = '127.0.0.1:8000'
}