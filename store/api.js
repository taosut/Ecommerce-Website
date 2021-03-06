console.log(process.env.NODE_ENV)

var url

if (process.env.NODE_ENV == "development") {

    var url = "http://127.0.0.1:8000/backend/api/";

} else {

    var url = "/backend/api/";

}


export const state = () => ({



    login: url + "login/customers",

    signup: url + "users/create/",

    otp_verify: url + 'users/otp_verify/',

    customer_signup: url + "users/create/customer",

    allProducts: url + "products/getAllActiveProducts",

    eachCategoryProducts: url + "products/eachCategoryProducts",

    eachofferset: url + "admin_app/eachofferset",

    singleHomeCarousel: url + "admin_app/singleofferlist/", //home_id

    getSingleProduct: url + "products/",

    getCategory: url + "products/product/home/category",

    getCategoryForMenu: url + "products/product/home/categoryMenu",

    getsubCategory: url + "products/product/subcategory",

    getBrand: url + "products/product/brand",

    getAllOrder: url + "orders",

    cod_payment: url + "orders/cod_payment",

    startOrder: url + "orders/createorderSession",

    addProduct: url + "products/create/product",

    deleteProduct: url + "products/delete/",

    deleteCategory: url + "products/product/category/delete/",

    deleteSubCategory: url + "products/product/subcategory/delete/",

    deleteBrand: url + "products/product/brand/delete/",

    createOrder: url + "orders/order_payment",

    addToCart: url + "cart/create",

    getCartByUser: url + "cart",

    cartQuantity: url + "cart/cartquantity/", //cart id

    removeFromCart: url + "cart/delete/",

    addToWishlist: url + "cart/wishlist",

    getWishlistByUser: url + "cart/wishlist_view",

    removeFromWishlist: url + "cart/wishlist_delete/",

    getalluseraddress: url + "users/getalluseraddress",

    changeuseraddress: url + "users/changeuseraddress", //id

    addnewuseraddress: url + "users/addnewuseraddress",


    //user

    getuserinfo: url + "users/getuserinfo",

    updateuserinfo: url + "users/updateuserinfo",

    getrazorpayapi: url + "payments/getrazorpayapi",

    order_payment_success: url + 'orders/order_payment_success',

    order_payment_failed: url + 'orders/order_payment_failed/', //razor_order_id

    getallbanner: url + "admin_app/mainslider/all",

    productsearch: url + "products",

    allUserOrders: url + "orders/alluserorder",

    check_delivery: url + "orders/check_delivery"






})


export const getters = {
    // getLoginAPI(state) {
    //     return state.login
    // }
}