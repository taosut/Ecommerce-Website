<template>
  <div>
    <div style="background-color:#dcdcdc;color:DodgerBlue;padding:20px;" align="center">
      <h4 class="no-mar" style="font-weight: bold">CART</h4>
    </div>
    <div class="container mt-5 mb-5">
      <div class="row">
        <!--
        *
        *
        *

        Product Container 
        
        *
        *
        *
  
        -->

        <div class="col-lg-8 col-md-12">
          <div class="row">
            <div class="col-12 mt-3 no-padd">
              <div>
                <div class="border">
                  <div class="w-100" style="border-bottom:1px solid #dee2e6 ">
                    <p
                      class="m-0 padding-right-10 my-text-custom2"
                      style="padding: 15px 20px;font-size: 16px;font-weight: bold;"
                    >My Cart ( {{cart.length}} )</p>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div class="container-fluid h-100 mb-4">
                        <div class="row mb-5 mt-3" v-for="p in cart" :key="p.id">
                          <div class="col-md-3">
                            <img
                              :src='"/media/products/" + p.product_info["images"][0]'
                              style="width: 100%;height: 120px;object-fit: contain;"
                              @error="setFallbackImageUrl"
                            />
                          </div>
                          <div class="col-md-9">
                              <p class="clamp1" style="font-size:14px;color:#545454;font-weight:bold">{{p.product_info['product_name']}}</p>
                              <p class="clamp1" style="font-size:18px">$ {{p.product_info['price']}}</p>    
                              <p class="clamp1 pointer" @click="removeFromCart(p.id)" style="font-size:14px;color:red;padding-top: 25px">REMOVE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--
        *
        *
        *

        Cart and Right Side Container 
        
        *
        *
        *
  
        -->

        <div class="col-lg-4 col-md-12">
          <div class="row">
            <div class="col-12 mt-3 no-padd">
              <div>
                <div class="border">
                  <div class="w-100" style="border-bottom:1px solid #dee2e6 ">
                    <p
                      class="m-0 padding-right-10 my-text-custom2"
                      style="padding: 15px 20px;font-size: 16px;font-weight: bold;"
                    >Price Details</p>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div class="container-fluid h-100 mb-4">
                        <div style="display:flex; justify-content: space-between;padding-top:10px">
                          <div>Price ({{cart.length}} items)</div>
                          <div>$ {{totalSum}}</div>
                        </div>
                      </div>
                      <div class="container-fluid h-100 mb-3" style="border-top:1px solid rgb(222, 226, 230)">
                        <div style="display:flex; justify-content: space-between;padding-top:10px">
                          <button type="button" class="btn btn-danger" style="font-size:12px">PLACE ORDER</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    totalSum : 0,
    discountedtotalSum: 0,
    cart: [{
        product_info : {
            images: [],
            product_name: ""
        }
    }]
  }),



  //   computed: mapState(['cart_data']),

  mounted() {
    this.getCartByUser()
  },
  methods: {
    getCartByUser: function() {
      this.$store.dispatch('getCartByUser').then(res => {
        this.cart = JSON.parse(JSON.stringify(res.data))

        this.cart.filter(
          v => (v.product_info.images = JSON.parse(v.product_info.images))
        )

        this.cart.forEach(element => {
          this.totalSum += parseInt(element.product_info.price)
          this.discountedtotalSum += parseInt(element.product_info.discount)
        });

      })
    },
    removeFromCart: function(id) {
      this.$store.dispatch('removeFromCart', id).then(res => {
         this.totalSum = 0;
         this.getCartByUser()
      })
    },
    goToProducts: function(id) {
      localStorage.setItem('single_product', id)

      console.log(id)

      this.$router.push('/product')
    }
  }
}
</script>