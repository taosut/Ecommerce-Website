
console.log(process.env.NODE_ENV)

var url

if(process.env.NODE_ENV == "development"){

    var url = "/api/";

}else{

    var url = "/backend/api/";

}


export const state = () => ({



    login: url + "login/",

    signup: url + "users/create/",

    allProducts : url + "products/",

    getSingleProduct : url + "products/",

    getCategory : url + "products/product/category",

    getsubCategory : url + "products/product/subcategory",

    getBrand : url + "products/product/brand",

    getAllOrder : url + "orders",

    getAllAuction : url + "auction",

    getSingleAuction : url + "auction/single/",

    createBid : url + "auction/bidding/create",

    getBiddingFromAuctionID : url + "auction/bidding/",

    getAllOngoingAuction : url + "auction/ongoing/all",
    
    getAllCompletedAuction : url + "auction/completed/all",

    getAllUpcomingAuction : url + "auction/upcoming/all",

    addProduct : url + "products/create/product",

    deleteProduct : url + "products/delete/",

    deleteCategory : url + "products/product/category/delete/",

    deleteSubCategory : url + "products/product/subcategory/delete/",

    deleteBrand : url + "products/product/brand/delete/",

    addToCart : url + "cart/create",

    getCartByUser : url + "cart/",

    removeFromCart : url + "cart/delete/",




})


export const getters = {
    // getLoginAPI(state) {
    //     return state.login
    // }
}
