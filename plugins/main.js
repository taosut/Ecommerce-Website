import Vue from 'vue'

Vue.mixin({
    methods: {
        addToCart(id) {


            if (this.$cookies.get('email') != undefined) {


                var payload = new FormData()

                payload.append('product_info' , id)
                payload.append('seller_id' , this.$cookies.get('user_id'))
                payload.append('quantity' , 1)


                this.$store.dispatch('addToCart' , payload).then(res=>{
                    this.$store.dispatch('getCartByUser')
                })




            } else {

                this.isLoggedIn = 0

                if (this.$cookies.get('cart_product') == undefined) {

                    var cart_products = []
                } else {

                    var cart_products = this.$cookies.get('cart_product')
                }

                if (cart_products.indexOf(id) === -1) {
                    cart_products.push(id)
                    console.log('pusshed');
                }

                this.$cookies.set('cart_product', JSON.stringify(cart_products), {
                    path: '/',
                    //   httpOnly : true,
                    //   secure: true,
                    maxAge: 60 * 60 * 24 * 7
                })

            }





        },
        setFallbackImageUrl(event) {
            console.log('Image failed to load, setting fallback.')
            event.target.src = '/images/adv_1.png'
        }
    }
})