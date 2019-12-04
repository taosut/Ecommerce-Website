<template>
  <div>
    <div class="container">
      <div class="row mt-4">
        <div class="col-md-8">
          <div class="shadow bg-white">
            <div class="d-flex w-100 justify-content-between">
              <div class="cart-header">
                <p>My Cart</p>
              </div>
              <div class="d-flex pad-2">
                <span><img src="~static/icons/maps-and-flags.svg"/></span>
                <span><p style="padding:5px">Deliver to</p></span>
                <span>
                  <div class="d-flex form-group m-0">
                    <label for="sel1"></label>
                    <select class="form-control" id="sel1">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </span>
              </div>
            </div>
            <div
              class="pad24"
              v-for="(p, index) in cart"
              :key="p.id"
              style="border-top: 1px solid #f0f0f0!important;"
            >
              <div class="row">
                <div class="col-md-2">
                  <div class="d-flex justify-content-center">
                    <img
                      style="width: 100%;height: 112px;object-fit: contain;"
                      :src="
                        baseurl +
                          '/media/products/' +
                          p.product_info['images'][0]
                      "
                      @error="setFallbackImageUrl"
                      alt
                    />
                  </div>
                </div>
                <div class="col-md-7">
                  <div>
                    <div>
                      <p class="pad-9" style="font-size:16px">
                        {{ p.product_name }}
                      </p>
                    </div>
                    <!-- <div>
                                    <p class="pad-11 font-12">4GB Ram</p>
                                </div> -->
                    <div>
                      <p class="pad-11 font-12">Seller:Vision Star</p>
                    </div>
                    <div>
                      <p class="pad-11">₹ {{ p.product_info.price }}</p>
                      <p class="pad-11">₹ {{ p.product_info.mrp }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div>
                    <p class="pad-9 font-12">
                      Delivery by Tue Oct 22 | Free₹40
                    </p>
                  </div>
                  <div>
                    <p class="font-12">10 Days Replacement Policy</p>
                  </div>
                </div>
              </div>
              <div class="d-flex mt-2 align-items-center">
                <div class="mt-3">
                  <div class="quantity buttons_added">
                    <input
                      type="button"
                      value="-"
                      class="minus"
                      :disabled="p.quantity <= 1"
                      @click="minus(index)"
                    />
                    <input
                      type="number"
                      step="1"
                      min="1"
                      max=""
                      v-model="p.quantity"
                      name="quantity"
                      value="1"
                      title="Qty"
                      class="input-text qty text"
                      size="4"
                      pattern=""
                      inputmode=""
                    />
                    <input
                      type="button"
                      value="+"
                      class="plus"
                      @click="plus(index)"
                    />
                  </div>
                </div>
                <div class="d-flex">
                  <span style="padding:0 0 0 36px"
                    ><nuxt-link class="none" to=""
                      >SAVE FOR LATER</nuxt-link
                    ></span
                  >
                  <span style="padding:0 0 0 12px"
                    ><div @click="deleteCartItem(p.id)">REMOVE</div></span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-end pad12">
            <button @click="startOrder" type="button" class="btn btn-order">
              Place Order
            </button>
          </div>
        </div>
        <div class="col-md-4">
          <div class="bg-white shadow border-rad">
            <div class="border-bottom f600" style="padding:13px 24px">
              <p style="color:#878787">PRICE DETAILS</p>
            </div>
            <div style="padding:0 24px">
              <div class="d-flex justify-content-between" style="margin:20px 0">
                <span
                  ><p>
                    Price ({{ cart.length }} item<span v-if="cart.length > 1"
                      >s</span
                    >)
                  </p></span
                >
                <span
                  ><p>₹ {{ totalSum }}</p></span
                >
              </div>
              <div class="d-flex justify-content-between" style="margin:20px 0">
                <span><p>Delivery</p></span>
                <span><p>FREE</p></span>
              </div>
              <div
                class="d-flex justify-content-between border-top-dotted f600"
                style="margin:20px 0"
              >
                <span><p>Total Payable</p></span>
                <span
                  ><p>₹ {{ totalSum }}</p></span
                >
              </div>
            </div>
            <div class="border-top" style="padding:20px 24px">
              <p>You will save ₹{{ discountedtotalSum }} on this order</p>
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
    totalSum: 0,
    discountedtotalSum: 0,
    baseurl: process.env.baseUrl,
    cart: []
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
          v =>
            (v.product_info.images = JSON.parse(
              v.product_info.product_id.images
            ))
        )

        this.cart.forEach((element, index) => {
          this.cart[index]['product_name'] = this.cart[index].product_info[
            'product_id'
          ]['product_name']
          this.totalSum += parseInt(element.product_info.price)
          this.discountedtotalSum +=
            parseInt(element.product_info.mrp) - this.totalSum
        })
      })
    },
    removeFromCart: function(id) {
      this.$store.dispatch('removeFromCart', id).then(res => {
        this.totalSum = 0
        this.getCartByUser()
      })
    },
    goToProducts: function(id) {
      localStorage.setItem('single_product', id)

      console.log(id)

      this.$router.push('/product')
    },

    minus: function(id) {
      console.log(id)
      var payload = new FormData()

      // payload.append('quantity', id)

      // this.$store.dispatch('changeCartQuantity', { id, payload } ).then(res => {
        this.cart[id].quantity = this.cart[id].quantity - 1
      // })
    },

    plus: function(id) {
      console.log(id)

      var payload = new FormData()

      // payload.append('quantity', id)

      // this.$store.dispatch('changeCartQuantity', payload).then(res => {
        this.cart[id].quantity = this.cart[id].quantity + 1
      // })
    },
    startOrder: function() {
      this.$cookies.set('cart_price', '1', {
        path: '/',
        httpOnly: process.env.cookie,
        secure: process.env.cookie,
        maxAge: 60 * 60 * 24 * 7
      })

      this.$router.push('/address')
    },
    deleteCartItem: function(id) {
      this.$store.dispatch('removeFromCart', id).then(res => {
        this.getCartByUser()
      })
    }
  }
}
</script>

<style scoped>
.pad24 {
  padding: 24px;
}
.btn-order {
  background: #fb641b;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border: none;
  color: #fff;
  width: 248px;
  height: 47px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 2px;
  position: relative;
}
.shadow {
  box-shadow: 1px 5px 8px 7px rgba(128, 128, 128, 0.25882352941176473);
}
.bg-white {
  background-color: #ffffff;
}
.pad12 {
  padding: 12px 0;
}
.pad-2 {
  padding: 14px 9px 0 0;
}
.cart-header {
  font-size: 23px;
  font-weight: 600;
  padding: 15px 0 15px 15px;
}
.border-rad {
  border-radius: 2px;
}
.border-bottom {
  border-bottom: 1px solid #b3adad3b;
}
.border-top {
  border-top: 1px solid #b3adad3b;
}
.border-top-dotted {
  border-top: 1px dotted #b3adad3b;
}
.f600 {
  font-weight: 600;
}
.none {
  text-decoration: none;
}
.none:hover {
  color: black;
  text-decoration: none;
}
.pad-9 {
  padding: 0 0 9px 0;
}
.pad-11 {
  padding: 0 0 11px 0;
}
.font-12 {
  font-size: 12px;
}
.form-group option {
  color: #b3adad3b;
  font-size: 13px;
}
.quantity {
  display: inline-block;
}

.quantity .input-text.qty {
  width: 35px;
  height: 39px;
  padding: 0 5px;
  text-align: center;
  background-color: transparent;
  border: 1px solid #efefef;
}

.quantity.buttons_added {
  text-align: left;
  position: relative;
  white-space: nowrap;
  vertical-align: top;
}

.quantity.buttons_added input {
  display: inline-block;
  margin: 0;
  vertical-align: top;
  box-shadow: none;
}

.quantity.buttons_added .minus,
.quantity.buttons_added .plus {
  /* padding: 7px 10px 8px; */
  height: 40px;
  background-color: #ffffff;
  border: 2px solid #efefef;
  cursor: pointer;
  border-radius: 100%;
  width: 40px;
}

.quantity.buttons_added .minus {
  border-right: 0;
}

.quantity.buttons_added .plus {
  border-left: 0;
}

.quantity.buttons_added .minus:hover,
.quantity.buttons_added .plus:hover {
  background: #eeeeee;
}

.quantity input::-webkit-outer-spin-button,
.quantity input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  margin: 0;
}

.quantity.buttons_added .minus:focus,
.quantity.buttons_added .plus:focus {
  outline: none;
}

@media (min-width: 1200px) {
  .container {
    max-width: 1260px;
  }
}
</style>

<!-- <div>
    <div style="background-color:#dcdcdc;color:DodgerBlue;padding:20px;" align="center">
      <h4 class="no-mar" style="font-weight: bold">CART</h4>
    </div>
    <div class="container mt-5 mb-5">
      <div class="row">
 

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
                              :src='baseurl + "/media/products/" + p.product_info["images"][0]'
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
  </div> -->
