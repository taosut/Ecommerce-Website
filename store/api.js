
console.log(process.env.NODE_ENV)

var url

if(process.env.NODE_ENV == "development"){

    var url = "http://127.0.0.1:8000/backend/api/";

}else{

    var url = "/backend/api/";

}


export const state = () => ({



    login: url + "login/customers",

    signup: url + "users/create/",

    allProducts : url + "products/getAllActiveProducts",

    eachCategoryProducts : url + "products/eachCategoryProducts",

    getSingleProduct : url + "products/",

    getCategory : url + "products/product/category",

    getsubCategory : url + "products/product/subcategory",

    getBrand : url + "products/product/brand",

    getAllOrder : url + "orders",
    
    addProduct : url + "products/create/product",

    deleteProduct : url + "products/delete/",

    deleteCategory : url + "products/product/category/delete/",

    deleteSubCategory : url + "products/product/subcategory/delete/",

    deleteBrand : url + "products/product/brand/delete/",

    addToCart : url + "cart/create",

    getCartByUser : url + "cart",

    removeFromCart : url + "cart/delete/",
    
    getalluseraddress : url + "users/getalluseraddress",

    changeuseraddress : url + "users/changeuseraddress", //id

    addnewuseraddress : url + "users/addnewuseraddress",




})


export const getters = {
    // getLoginAPI(state) {
    //     return state.login
    // }
}
