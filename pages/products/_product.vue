<template>
  <div>
    <!-- Single Product -->

    <div class="container">
      <div class="single_product">
        <div class="row">
          <!-- Images -->
          <div class="col-lg-1 order-lg-1 order-2">
            <ul class="image_list">
              <li
                @mouseover="changeImage(p)"
                v-for="(p, index) in productimages"
                :key="p.id"
              >
                <img
                  :src="baseurl + '/backend/api/products/image/50/90/' + p"
                  @error="setFallbackImageUrl"
                  alt=""
                />
              </li>
            </ul>
          </div>

          <!-- Selected Image -->
          <div class="col-lg-5 order-lg-2 order-1">
            <div class="image_selected">
              <img
                :src="
                  baseurl +
                    '/backend/api/products/image/500/90/' +
                    productimages[0]
                "
                @error="setFallbackImageUrl"
                alt=""
              />
            </div>
          </div>

          <!-- Description -->
          <div class="col-lg-5 order-3">
            <div class="product_description">
              <div class="product_category">
                {{ product.category_name }} > {{ product.subcategory_name }}
              </div>

              <div class="product_name">{{ product.product_name }}</div>
              <div>{{ product.brand_name }}</div>
              <star-rating
                :star-size="15"
                v-model="rating"
                :read-only="true"
              ></star-rating>
              <div class="d-flex align-center">
                <div class="product_price">₹{{ product.price }}</div>
                <div class="product_mrp">₹{{ product.mrp }}</div>
              </div>
              <div class="product_text">
                <p class="clamp4">{{ product.description }}</p>
              </div>
              <div class="order_info flex-row">
                <div class="button_container">
                  <button type="button" class="button buy_button">
                    Buy Now
                  </button>
                  <button
                    type="button"
                    class="button cart_button"
                    @click="addToCart(product.id)"
                    style="background-color: transparent;border: 1px solid black;color: black;margin-left: 20px"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="single_product">
        <div v-if="product_description != ''">
          <h4>Product Description</h4>
          <div class="pb-2 pt-2">
            <p style="line-height: 28px">{{ product.description }}</p>
          </div>
          <hr style="border: 0;border-bottom: 1px dashed #80808030;" />
        </div>

        <div v-if="product_bullet_points.length != 0">
          <h4 class="pt-2">Highlights</h4>
          <div>
            <ul class="row" style="padding:20px 10px">
              <li
                class="col-4 no-padd"
                v-for="(p, index) in product_bullet_points"
                :key="p.id"
              >
                <span class="list-circle"></span>
                <span class="hightlist-li">{{ p.value }}</span>
              </li>
            </ul>
          </div>
        </div>

        <hr
          style="border: 0;border-bottom: 1px dashed #80808030;"
          v-if="product_bullet_points.length != 0"
        />

        <div>
          <h4 class="pt-2">Specification</h4>
          <div class="row">
            <!-- Description -->
            <div class="col-12 order-3">
              <div v-if="product.specs != ''">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr v-for="(p, index) in product.specs" :key="p.id">
                      <td>
                        <table
                          width="100%"
                          border="0"
                          cellspacing="2"
                          cellpadding="0"
                          class="product-spec"
                        >
                          <tbody>
                            <tr>
                              <th colspan="2">{{ p.name.toUpperCase() }}</th>
                            </tr>
                            <tr
                              v-for="(q, index1) in p['sub']"
                              :key="q.id"
                              v-if="q.value && q.value != undefined"
                            >
                              <td width="20%">
                                <p class="specification-header-p">
                                  {{ q.name }}
                                </p>
                              </td>
                              <td>
                                <div v-if="q.type == 1">
                                  <p
                                    class="specs-value specification-value-p"
                                    type="text"
                                  >
                                    {{ q.value }}
                                  </p>
                                </div>

                                <div style="display: flex;" v-if="q.type == 2">
                                  <p
                                    class="specs-value specification-value-p"
                                    type="text"
                                  >
                                    {{ q.value }}
                                  </p>
                                </div>

                                <div style="display: flex;" v-if="q.type == 3">
                                  <p
                                    class="specs-value specification-value-p"
                                    type="text"
                                  >
                                    {{ q.value }} {{ q.dropdown }}
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="single_product">
        <div>
          <h4 class="pt-2 pb-2">Reviews</h4>
          <div class="row">
            <!-- Description -->
            <div class="col-12 order-3">
              <div v-if="reviews != ''">
                <div class="pb-5" v-for="p in reviews" :key="p.id">
                  <div class="d-flex align-center justify-content-between">
                    <!-- <img src="/"> -->
                    <div
                      class="d-flex align-center"
                      style="position: relative;left: -2px;"
                    >
                      <div class="name-round">
                        {{ p.name[0] }}
                      </div>
                      <p class="ml-2">{{ p.name }}</p>
                    </div>
                  </div>
                  <h4 class="pt-3">
                    {{ p.header }}
                  </h4>
                  <p>
                    {{ p.created_date.split('T')[0] }}
                    {{ p.created_date.split('T')[1].split(':')[0] }}:{{
                      p.created_date.split('T')[1].split(':')[1]
                    }}
                  </p>
                  <div class="d-flex pb-3">
                    <star-rating
                      :show-rating="false"
                      :star-size="15"
                      :rating="parseInt(p.rating)"
                      :read-only="true"
                    ></star-rating>
                  </div>
                  <div>
                    {{ p.review }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recently Viewed -->

    <!-- <div class="viewed">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="">
              <h3 class="viewed_title">Newly Added</h3>
            </div>

            <div>

              <div class="owl-carousel owl-theme viewed_slider">
             
                <div class="" v-for="p in product" :key="p.id">
                  <div
                    class="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center"
                  >
                    <div class="viewed_image">
                      <img
                        :src="baseurl + '/backend/api/products/image/100/40/'"
                        @error="setFallbackImageUrl"
                        alt
                      />
                    </div>
                    <div class="viewed_content text-center">
                      <div class="viewed_name">
                        <a href="#">{{ p.product_name }}</a>
                      </div>
                      <div class="viewed_price">
                        ₹{{ p.price }}fg fg {{ p }}
                        <span>${{ p.discount }}</span>
                      </div>
                    </div>
                    <ul class="item_marks">
                      <li class="item_mark item_discount">-25%</li>
                      <li class="item_mark item_new">new</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    product: [],
    product_description: '',
    product_bullet_points: [],
    productimages: {},
    auction_data: [],
    auction_timer: [],
    variations: [],
    baseurl: process.env.baseUrl,
    auction_status: 0,
    bidding_list: {
      user_id: ''
    },
    rating: 0,
    reviews: ''
  }),

  components: {},

  mounted() {
    $('.cat_menu').css({
      visibility: 'hidden',
      opacity: '0'
    })

    // this.getAllOngoingAuction()

    this.$store
      .dispatch('getSingleProduct', this.$route.params.product)
      .then(res => {
        this.product = Object.assign({}, res.data.product)
        this.variations = res.data.variations
        this.product['price'] = res.data.variations[0]['price']
        this.product['mrp'] = res.data.variations[0]['mrp']
        this.rating = res.data.rating_avg
        this.reviews = res.data.reviews
        this.productimages = JSON.parse(this.product.images)
        this.product_bullet_points = JSON.parse(this.product.bullet_points)
        this.product_description = res.data.description
        this.product.specs = JSON.parse(this.product.specs)
      })
  },
  methods: {
    getAllOngoingAuction: function() {
      console.log('sdsdsd')
      this.$store.dispatch('allProducts').then(res => {
        console.log(res)
        this.ongoingAuction = JSON.parse(JSON.stringify(res.data))

        this.ongoingAuction.filter(v => (v.images = JSON.parse(v.images)))

        setTimeout(function() {
          $('.products, .viewed_slider').owlCarousel({
            loop: true,
            nav: true,
            navText: [
              "<img class='rotate180' src='/icons/arrow.svg'>",
              "<img src='/icons/arrow.svg'>"
            ],
            dots: false,
            dotsEach: false,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 3
              },
              1000: {
                items: 5
              }
            }
          })
        }, 100)
      })
    },
    changeImage: function(id) {
      console.log(id)

      $('.image_selected img').attr(
        'src',
        this.baseurl + '/backend/api/products/image/500/90/' + id
      )
    },
    getBidding: function(id) {
      this.$store.dispatch('getBiddingFromAuctionID', id).then(res => {
        this.bidding_list = JSON.parse(JSON.stringify(res.data))
      })
    },

    addToCart: function() {
      if (this.$store.state.isLoggedIn) {
        var payload = new FormData()

        payload.append('product_info', this.variations[0].id)
        payload.append('quantity', 1)
        payload.append('seller_id', 100)

        this.$store.dispatch('addToCart', payload)
        this.getCartByUser()
      } else {
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
    createBid: function() {
      console.log(this.auction_data.auction_id)
      console.log(9)
      console.log($('#bid').val())
      console.log(this.product.id)

      var payload = new FormData()

      payload.append('auction_id', this.auction_data.auction_id)
      payload.append('product_info', this.product.id)
      payload.append('price', $('#bid').val())
      payload.append('user_id', 2)

      this.$store.dispatch('createBid', payload).then(res => {
        console.log(res)
        this.getBidding(this.auction_data.auction_id)
      })
    },
    getTimerFinalValue: function(start_date, end_date) {
      var datetime = end_date

      var datetime = new Date(datetime).getTime()
      var now = new Date(start_date).getTime()

      if (isNaN(datetime)) {
        return ''
      }

      if (datetime < now) {
        var milisec_diff = now - datetime
      } else {
        var milisec_diff = datetime - now
      }

      var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24))

      var date_diff = new Date(milisec_diff)

      return {
        days: days,
        hours: date_diff.getHours(),
        minute: date_diff.getMinutes(),
        second: date_diff.getSeconds()
      }
    },
    countdown: function(end_date) {
      var vm = this
      // Update the count down every 1 second
      var x = setInterval(function() {
        vm.auction_timer = vm.getTimerFinalValue(new Date(), end_date)
      }, 1000)
    },
    desc: function(id) {
      $('.active').removeClass('active')
      $('.' + id).addClass('active')
    }
  }
}
</script>

<style scoped>
.nav-link p {
  color: black;
  cursor: pointer;
}

/* change border radius for the tab , apply corners on top*/

#exTab3 .nav-pills > li > a {
  border-radius: 4px 4px 0 0;
}

#exTab3 .nav-pills > li.active > a {
  color: black;
}

#exTab3 .tab-content {
  background-color: #fff;
  padding: 5px 15px;
  border-top: 1px solid #c7c7c7;
}

.small-font {
  font-size: 12px;
}

.actions button {
  width: 150px;
}

.bid-actions button {
  width: 130px;
  justify-content: center;
  align-items: center;
}

a:hover {
  text-decoration: none;
  cursor: pointer;
}

p.productPrice {
  margin-bottom: 0;
}

.strikethrough {
  text-decoration: line-through;
}
.discountedPrice {
  background-color: #8bc34a;
  color: white;
  padding: 0 10px;
}
.underline span {
  position: relative;
  width: 100%;
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
  .container {
    max-width: 930px;
  }
}
input[type='text'] {
  /* width: 130px; */
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

input[type='text']:focus {
  width: 100%;
}

html,
body {
  font-size: 14px;
  height: 100%;
  width: 100%;
}

.my-text {
  font-size: 12px;
}

.flex-container {
  display: flex;
  flex-direction: column;
}

.my-text-custom {
  font-size: 10px;
}

.bg-custom1 {
  background-color: #e6e6e6;
}

.my-text-custom2 {
  font-size: 18px;
  font-weight: bold;
}

.my-text-custom3 {
  font-size: 15px;
}

.login-section {
  padding: 20px 20px 20px;
}

.padding-10 {
  padding: 10px;
}

.padding-top-10 {
  padding-top: 10px;
}

.padding-bottom-10 {
  padding-bottom: 10px;
}

.padding-right-10 {
  padding-right: 10px;
}

.padding-left-10 {
  padding-left: 10px;
}

.no-mar {
  margin: 0 !important;
}

.no-padd {
  padding: 0 !important;
}

.myHeader p {
  margin: 0;
  font-size: 10px;
  margin-left: 10px;
}

.myborder-right .null {
  margin: 0;
  margin: 0 10px !important;
  font-size: 12px !important;
  font-weight: bold;
}

.myborder-right div {
  border-right: 1px solid #b0b0b0;
}

.ul .mydropdown {
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.nav-link p {
  color: black;
}

.hightlist-li {
  font-size: 13px;
}

/* li {
  float: left;
}

li a, .dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover, .dropdown:hover .dropbtn {
  background-color: blue;
}

li.dropdown {
  display: inline-block;
  } */

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.bold {
  font-weight: bold;
}

#exTab3 {
  background-color: grey;
  border: 1px solid #c7c7c7;
}

.nav-pills .nav-link {
  border-radius: 0 !important;
}

.nav.nav-pills {
  top: 0px;
  height: 40px;
  background-color: #ececec;
}

.nav-link {
  border: 1px solid #c7c7c7;
  border-right: 0 !important;
  border-top: 0;
}

.nav-link:last-child {
  border: 1px solid #c7c7c7;
  border-top: 0;
  border-right: 1px solid #c7c7c7 !important;
}

.nav-link:first-child {
  border: 1px solid #c7c7c7;
  border-top: 0;
  border-left: 0 !important;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: white;
  border: 1px solid #c7c7c7;
  border-bottom: 0;
  border-top: 0;
}

.nav-link a {
  color: black;
}

/* change border radius for the tab , apply corners on top*/

#exTab3 .nav-pills > li > a {
  border-radius: 4px 4px 0 0;
}

#exTab3 .nav-pills > li.active > a {
  color: black;
}

#exTab3 .tab-content {
  background-color: #fff;
  padding: 5px 15px;
  border-top: 1px solid #c7c7c7;
}

.small-font {
  font-size: 12px;
}

.actions button {
  width: 150px;
}

.bid-actions button {
  width: 130px;
  justify-content: center;
  align-items: center;
}

a:hover {
  text-decoration: none;
  cursor: pointer;
}

p.productPrice {
  margin-bottom: 0;
}

.strikethrough {
  text-decoration: line-through;
}
.discountedPrice {
  background-color: #8bc34a;
  color: white;
  padding: 0 10px;
}

.btn-buy {
  background-color: #fb641b;
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
  .container {
    max-width: 930px;
  }
}

button[disabled] {
  cursor: not-allowed;
  background-color: #9e9e9e;
  border-color: #9e9e9e;
}

.product_mrp {
  position: relative;
  font-size: 15px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  margin-left: 8px;
  text-decoration: line-through;
}

.buy_button {
  background-color: #f5805d;
  display: inline-block;
  border: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 48px;
  color: #ffffff;
  padding-left: 35px;
  padding-right: 35px;
  outline: none;
  cursor: pointer;
}

.product-spec th {
  padding: 18px 0 9px;
}

.product-spec td {
  line-height: 40px;
}
.specification-header-p {
  color: #b2b2b2;
  line-height: 35px;
}
.specification-value-p {
  line-height: 35px;
  color: #000;
}

.list-circle {
  width: 6px;
  height: 6px;
  background-color: #cccccc;
  border-radius: 50%;
  display: inline-block;
  vertical-align: 2px;
  margin-right: 8px;
  margin-left: 3px;
}

.name-round {
  background-color: #4caf50;
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
