<template>
  <div>
    <div class="container">
      <div class="row mt-4" v-if="cart.length > 0">
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
                      :src="baseurl + '/media/products/' + p.product_images[0]"
                      @error="setFallbackImageUrl"
                      alt
                    />
                  </div>
                </div>
                <div class="col-md-7">
                  <div>
                    <div>
                      <p class="pad-9" style="font-size:13px">
                        {{ p.product_name }}
                      </p>
                    </div>
                    <div>
                      <p class="pad-11 font-12">Seller: {{ p.store_name }}</p>
                    </div>
                    <div>
                      <p class="pad-11">₹ {{ p.product_price }}</p>
                      <p class="pad-11" style="text-decoration: line-through;">
                        ₹ {{ p.product_mrp }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div>
                    <p class="pad-9 font-12">
                      Delivery by Tue Oct 22 | Free₹40
                    </p>
                  </div>
                  <div v-if="p.product_return_days > 0">
                    <p class="font-12">
                      {{ p.product_return_days }} Days Replacement Policy
                    </p>
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
                  <span style="padding:0 0 0 36px">
                    <!-- <nuxt-link class="none" to=""
                      >SAVE FOR LATER</nuxt-link
                    > -->
                  </span>
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
      <div v-else class="bg-white">
        <div class="empty-cart">
          <svg
            viewBox="656 573 264 182"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect
              id="bg-line"
              stroke="none"
              fill-opacity="0.2"
              fill="#FFE100"
              fill-rule="evenodd"
              x="656"
              y="624"
              width="206"
              height="38"
              rx="19"
            ></rect>
            <rect
              id="bg-line"
              stroke="none"
              fill-opacity="0.2"
              fill="#FFE100"
              fill-rule="evenodd"
              x="692"
              y="665"
              width="192"
              height="29"
              rx="14.5"
            ></rect>
            <rect
              id="bg-line"
              stroke="none"
              fill-opacity="0.2"
              fill="#FFE100"
              fill-rule="evenodd"
              x="678"
              y="696"
              width="192"
              height="33"
              rx="16.5"
            ></rect>
            <g
              id="shopping-bag"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              transform="translate(721.000000, 630.000000)"
            >
              <polygon
                id="Fill-10"
                fill="#FFA800"
                points="4 29 120 29 120 0 4 0"
              ></polygon>
              <polygon
                id="Fill-14"
                fill="#FFE100"
                points="120 29 120 0 115.75 0 103 12.4285714 115.75 29"
              ></polygon>
              <polygon
                id="Fill-15"
                fill="#FFE100"
                points="4 29 4 0 8.25 0 21 12.4285714 8.25 29"
              ></polygon>
              <polygon
                id="Fill-33"
                fill="#FFA800"
                points="110 112 121.573723 109.059187 122 29 110 29"
              ></polygon>
              <polygon
                id="Fill-35"
                fill-opacity="0.5"
                fill="#FFFFFF"
                points="2 107.846154 10 112 10 31 2 31"
              ></polygon>
              <path
                d="M107.709596,112 L15.2883462,112 C11.2635,112 8,108.70905 8,104.648275 L8,29 L115,29 L115,104.648275 C115,108.70905 111.7365,112 107.709596,112"
                id="Fill-36"
                fill="#FFE100"
              ></path>
              <path
                d="M122,97.4615385 L122,104.230231 C122,108.521154 118.534483,112 114.257931,112 L9.74206897,112 C5.46551724,112 2,108.521154 2,104.230231 L2,58"
                id="Stroke-4916"
                stroke="#000000"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
              <polyline
                id="Stroke-4917"
                stroke="#000000"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                points="2 41.5 2 29 122 29 122 79"
              ></polyline>
              <path
                d="M4,50 C4,51.104 3.104,52 2,52 C0.896,52 0,51.104 0,50 C0,48.896 0.896,48 2,48 C3.104,48 4,48.896 4,50"
                id="Fill-4918"
                fill="#000000"
              ></path>
              <path
                d="M122,87 L122,89"
                id="Stroke-4919"
                stroke="#000000"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
              <polygon
                id="Stroke-4922"
                stroke="#000000"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                points="4 29 120 29 120 0 4 0"
              ></polygon>
              <path
                d="M87,46 L87,58.3333333 C87,71.9 75.75,83 62,83 L62,83 C48.25,83 37,71.9 37,58.3333333 L37,46"
                id="Stroke-4923"
                stroke="#000000"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
              <path
                d="M31,45 C31,41.686 33.686,39 37,39 C40.314,39 43,41.686 43,45"
                id="Stroke-4924"
                stroke="#000000"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
              <path
                d="M81,45 C81,41.686 83.686,39 87,39 C90.314,39 93,41.686 93,45"
                id="Stroke-4925"
                stroke="#000000"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
              <path
                d="M8,0 L20,12"
                id="Stroke-4928"
                stroke="#000000"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
              <path
                d="M20,12 L8,29"
                id="Stroke-4929"
                stroke="#000000"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
              <path
                d="M20,12 L20,29"
                id="Stroke-4930"
                stroke="#000000"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
              <path
                d="M115,0 L103,12"
                id="Stroke-4931"
                stroke="#000000"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
              <path
                d="M103,12 L115,29"
                id="Stroke-4932"
                stroke="#000000"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
              <path
                d="M103,12 L103,29"
                id="Stroke-4933"
                stroke="#000000"
                stroke-width="3"
                stroke-linecap="round"
              ></path>
            </g>
            <g
              id="glow"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              transform="translate(768.000000, 615.000000)"
            >
              <rect
                id="Rectangle-2"
                fill="#000000"
                x="14"
                y="0"
                width="2"
                height="9"
                rx="1"
              ></rect>
              <rect
                fill="#000000"
                transform="translate(7.601883, 6.142354) rotate(-12.000000) translate(-7.601883, -6.142354) "
                x="6.60188267"
                y="3.14235449"
                width="2"
                height="6"
                rx="1"
              ></rect>
              <rect
                fill="#000000"
                transform="translate(1.540235, 7.782080) rotate(-25.000000) translate(-1.540235, -7.782080) "
                x="0.54023518"
                y="6.28207994"
                width="2"
                height="3"
                rx="1"
              ></rect>
              <rect
                fill="#000000"
                transform="translate(29.540235, 7.782080) scale(-1, 1) rotate(-25.000000) translate(-29.540235, -7.782080) "
                x="28.5402352"
                y="6.28207994"
                width="2"
                height="3"
                rx="1"
              ></rect>
              <rect
                fill="#000000"
                transform="translate(22.601883, 6.142354) scale(-1, 1) rotate(-12.000000) translate(-22.601883, -6.142354) "
                x="21.6018827"
                y="3.14235449"
                width="2"
                height="6"
                rx="1"
              ></rect>
            </g>
            <polygon
              id="plus"
              stroke="none"
              fill="#7DBFEB"
              fill-rule="evenodd"
              points="689.681239 597.614697 689.681239 596 690.771974 596 690.771974 597.614697 692.408077 597.614697 692.408077 598.691161 690.771974 598.691161 690.771974 600.350404 689.681239 600.350404 689.681239 598.691161 688 598.691161 688 597.614697"
            ></polygon>
            <polygon
              id="plus"
              stroke="none"
              fill="#EEE332"
              fill-rule="evenodd"
              points="913.288398 701.226961 913.288398 699 914.773039 699 914.773039 701.226961 917 701.226961 917 702.711602 914.773039 702.711602 914.773039 705 913.288398 705 913.288398 702.711602 911 702.711602 911 701.226961"
            ></polygon>
            <polygon
              id="plus"
              stroke="none"
              fill="#FFA800"
              fill-rule="evenodd"
              points="662.288398 736.226961 662.288398 734 663.773039 734 663.773039 736.226961 666 736.226961 666 737.711602 663.773039 737.711602 663.773039 740 662.288398 740 662.288398 737.711602 660 737.711602 660 736.226961"
            ></polygon>
            <circle
              id="oval"
              stroke="none"
              fill="#A5D6D3"
              fill-rule="evenodd"
              cx="699.5"
              cy="579.5"
              r="1.5"
            ></circle>
            <circle
              id="oval"
              stroke="none"
              fill="#CFC94E"
              fill-rule="evenodd"
              cx="712.5"
              cy="617.5"
              r="1.5"
            ></circle>
            <circle
              id="oval"
              stroke="none"
              fill="#8CC8C8"
              fill-rule="evenodd"
              cx="692.5"
              cy="738.5"
              r="1.5"
            ></circle>
            <circle
              id="oval"
              stroke="none"
              fill="#3EC08D"
              fill-rule="evenodd"
              cx="884.5"
              cy="657.5"
              r="1.5"
            ></circle>
            <circle
              id="oval"
              stroke="none"
              fill="#66739F"
              fill-rule="evenodd"
              cx="918.5"
              cy="681.5"
              r="1.5"
            ></circle>
            <circle
              id="oval"
              stroke="none"
              fill="#C48C47"
              fill-rule="evenodd"
              cx="903.5"
              cy="723.5"
              r="1.5"
            ></circle>
            <circle
              id="oval"
              stroke="none"
              fill="#A24C65"
              fill-rule="evenodd"
              cx="760.5"
              cy="587.5"
              r="1.5"
            ></circle>
            <circle
              id="oval"
              stroke="#66739F"
              stroke-width="2"
              fill="none"
              cx="745"
              cy="603"
              r="3"
            ></circle>
            <circle
              id="oval"
              stroke="#EFB549"
              stroke-width="2"
              fill="none"
              cx="716"
              cy="597"
              r="3"
            ></circle>
            <circle
              id="oval"
              stroke="#FFE100"
              stroke-width="2"
              fill="none"
              cx="681"
              cy="751"
              r="3"
            ></circle>
            <circle
              id="oval"
              stroke="#3CBC83"
              stroke-width="2"
              fill="none"
              cx="896"
              cy="680"
              r="3"
            ></circle>
            <polygon
              id="diamond"
              stroke="#C46F82"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
              points="886 705 889 708 886 711 883 708"
            ></polygon>
            <path
              d="M736,577 C737.65825,577 739,578.34175 739,580 C739,578.34175 740.34175,577 742,577 C740.34175,577 739,575.65825 739,574 C739,575.65825 737.65825,577 736,577 Z"
              id="bubble-rounded"
              stroke="#3CBC83"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              fill="none"
            ></path>
          </svg>

          <h4>Your cart is empty!</h4>
          <p>Add items to it now.</p>
          <nuxt-link class="btn btn-info" to="/">Shop Now</nuxt-link>
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
    this.checkuserlogin()
  },
  methods: {
    checkuserlogin: function() {
      if (this.$store.state.isLoggedIn) {
        this.getCartByUser()
      }
    },
    getCartByUser: function() {
      this.$store.dispatch('getCartByUser').then(res => {
        try {
          this.cart = JSON.parse(JSON.stringify(res.data.body))

          this.cart.filter(
            v => (v.product_images = JSON.parse(v.product_images))
          )

          this.cart.forEach((element, index) => {
            this.totalSum += parseInt(element.product_price)
            this.discountedtotalSum +=
              parseInt(element.product_mrp) - this.totalSum
          })
        } catch {}
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
        // secure: process.env.cookie,
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

.empty-cart {
  width: 200px;
  margin: 20px auto;
  text-align: center;
  font-family: 'Maison Neue';
  font-weight: 300;
  padding: 0 0 35px;
}
svg {
  max-width: 100%;
}
svg #oval,
svg #plus,
svg #diamond,
svg #bubble-rounded {
  -webkit-animation: plopp 4s ease-out infinite;
  animation: plopp 4s ease-out infinite;
}
svg #oval:nth-child(1),
svg #plus:nth-child(1),
svg #diamond:nth-child(1),
svg #bubble-rounded:nth-child(1) {
  -webkit-animation-delay: -240ms;
  animation-delay: -240ms;
}
svg #oval:nth-child(2),
svg #plus:nth-child(2),
svg #diamond:nth-child(2),
svg #bubble-rounded:nth-child(2) {
  -webkit-animation-delay: -480ms;
  animation-delay: -480ms;
}
svg #oval:nth-child(3),
svg #plus:nth-child(3),
svg #diamond:nth-child(3),
svg #bubble-rounded:nth-child(3) {
  -webkit-animation-delay: -720ms;
  animation-delay: -720ms;
}
svg #oval:nth-child(4),
svg #plus:nth-child(4),
svg #diamond:nth-child(4),
svg #bubble-rounded:nth-child(4) {
  -webkit-animation-delay: -960ms;
  animation-delay: -960ms;
}
svg #oval:nth-child(5),
svg #plus:nth-child(5),
svg #diamond:nth-child(5),
svg #bubble-rounded:nth-child(5) {
  -webkit-animation-delay: -1200ms;
  animation-delay: -1200ms;
}
svg #oval:nth-child(6),
svg #plus:nth-child(6),
svg #diamond:nth-child(6),
svg #bubble-rounded:nth-child(6) {
  -webkit-animation-delay: -1440ms;
  animation-delay: -1440ms;
}
svg #oval:nth-child(7),
svg #plus:nth-child(7),
svg #diamond:nth-child(7),
svg #bubble-rounded:nth-child(7) {
  -webkit-animation-delay: -1680ms;
  animation-delay: -1680ms;
}
svg #oval:nth-child(8),
svg #plus:nth-child(8),
svg #diamond:nth-child(8),
svg #bubble-rounded:nth-child(8) {
  -webkit-animation-delay: -1920ms;
  animation-delay: -1920ms;
}
svg #oval:nth-child(9),
svg #plus:nth-child(9),
svg #diamond:nth-child(9),
svg #bubble-rounded:nth-child(9) {
  -webkit-animation-delay: -2160ms;
  animation-delay: -2160ms;
}
svg #oval:nth-child(10),
svg #plus:nth-child(10),
svg #diamond:nth-child(10),
svg #bubble-rounded:nth-child(10) {
  -webkit-animation-delay: -2400ms;
  animation-delay: -2400ms;
}
svg #oval:nth-child(11),
svg #plus:nth-child(11),
svg #diamond:nth-child(11),
svg #bubble-rounded:nth-child(11) {
  -webkit-animation-delay: -2640ms;
  animation-delay: -2640ms;
}
svg #oval:nth-child(12),
svg #plus:nth-child(12),
svg #diamond:nth-child(12),
svg #bubble-rounded:nth-child(12) {
  -webkit-animation-delay: -2880ms;
  animation-delay: -2880ms;
}
svg #oval:nth-child(13),
svg #plus:nth-child(13),
svg #diamond:nth-child(13),
svg #bubble-rounded:nth-child(13) {
  -webkit-animation-delay: -3120ms;
  animation-delay: -3120ms;
}
svg #oval:nth-child(14),
svg #plus:nth-child(14),
svg #diamond:nth-child(14),
svg #bubble-rounded:nth-child(14) {
  -webkit-animation-delay: -3360ms;
  animation-delay: -3360ms;
}
svg #oval:nth-child(15),
svg #plus:nth-child(15),
svg #diamond:nth-child(15),
svg #bubble-rounded:nth-child(15) {
  -webkit-animation-delay: -3600ms;
  animation-delay: -3600ms;
}
svg #oval:nth-child(16),
svg #plus:nth-child(16),
svg #diamond:nth-child(16),
svg #bubble-rounded:nth-child(16) {
  -webkit-animation-delay: -3840ms;
  animation-delay: -3840ms;
}
svg #bg-line:nth-child(2) {
  fill-opacity: 0.3;
}
svg #bg-line:nth-child(3) {
  fill-opacity: 0.4;
}
h3 {
  font-size: 2rem;
  line-height: 2rem;
  margin: 0;
  padding: 0;
  font-weight: 600;
}
p {
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  line-height: 24px;
  max-width: 80%;
  margin: 0.25rem auto 0 auto;
}
body {
  background: #f2f2f2;
}
@-webkit-keyframes plopp {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(0, -10px);
    transform: translate(0, -10px);
    opacity: 0;
  }
}
@keyframes plopp {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translate(0, -10px);
    transform: translate(0, -10px);
    opacity: 0;
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
