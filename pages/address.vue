<template>
  <div>
    <div class="container">
      <div class="row mt-4 mb-4">
        <div class="col-md-8">
          <div class="bg-white pb-4">
            <div class="d-flex w-100 justify-content-between border-bottom">
              <div class="cart-header">
                <p>Select Delivery Address</p>
              </div>
            </div>

            <div class="container">
              <div class="row">
                <!-- <div class="pad24" > -->
                <div
                  class="col-12 col-sm-6"
                  v-for="(p, index) in alluseraddress"
                  :key="p.id"
                >
                  <div>
                    <div>
                      <p class="pad-9" style="font-size:16px">
                        {{ p.product_name }}
                      </p>
                    </div>
                    <div>
                      <p class="pad-11 font-12">Seller:Vision Star</p>
                    </div>
                    <div>
                      <p class="pad-11">₹ </p>
                      <p class="pad-11">₹ </p>
                    </div>
                    <button type="button" class="btn btn-primary btn-sm">
                      Deliver to this address
                    </button>
                  </div>
                </div>
                <!-- </div> -->
              </div>
            </div>

            <div class="address-section">
              <div class="container">
                <div class="row" style="padding-top: 50px">
                  <div class="col-xs-6">
                    <div class="col-12">
                      <p>Add New Address</p>
                      <div class="form-group">
                        <label for="email">Full Name</label>
                        <input type="email" v-model="payload.fullname" class="form-control" id="email" />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="email">Mobile Number</label>
                        <input type="text" v-model="payload.mobilenumber" class="form-control" id="email" />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="email">Pincode</label>
                        <input type="text" v-model="payload.pincode" class="form-control" id="email" />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label for="email"
                          >Flat, House no., Building, Company, Apartment:</label
                        >
                        <input type="text" v-model="payload.building" class="form-control" id="email" />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label for="email"
                          >Area, Colony, Street, Sector, Village:</label
                        >
                        <input type="text" v-model="payload.street" class="form-control" id="email" />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label for="email">Town/City:</label>
                        <input type="text" v-model="payload.city" class="form-control" id="email" />
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-group">
                        <label for="email">State:</label>
                        <input type="text" v-model="payload.state" class="form-control" id="email" />
                      </div>
                    </div>

                    <div class="col-12">
                      <button @click="addNewAddress" type="button" class="btn btn-order">
                        Add Address
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="bg-white shadow border-rad">
            <div class="border-bottom f600" style="padding:13px 24px">
              <p style="color:#878787">PRICE DETAILS</p>
            </div>
            <div style="padding:0 24px">
              <div class="d-flex justify-content-between" style="margin:20px 0">
                <span><p>Price (2 items)</p></span>
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

          <div class="d-flex justify-content-end pad12">
            <button type="button" class="btn btn-order">PLACE ORDER</button>
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
    payload: [],
    alluseraddress: [],
    discountedtotalSum: 0,
    baseurl: process.env.baseUrl,
    cart: [
      {
        product_info: {
          images: [],
          product_name: ''
        }
      }
    ]
  }),

  //   computed: mapState(['cart_data']),

  mounted() {
    this.getCartByUser()
    this.getAllUserAddress()
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
    getAllUserAddress: function(id) {
      this.$store.dispatch('getAllUserAddress').then(res => {
        this.alluseraddress = res.data
      })
    },
    addNewAddress: function() {

      var payload = new FormData()

      console.log(this.payload.fullname)

      payload.append('fullname' , this.payload.fullname)
      payload.append('pincode' , this.payload.pincode )
      payload.append('mobilenumber' , this.payload.mobilenumber)
      payload.append('building' , this.payload.building)
      payload.append('street' , this.payload.street)
      payload.append('city' , this.payload.city)
      payload.append('state' , this.payload.state)

      this.$store.dispatch('addNewAddress', payload).then(res => {

          console.log(res)

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
