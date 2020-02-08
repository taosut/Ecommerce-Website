<template>
  <div>
    <!-- Single Product -->

    <div class="container">
      <div class="single_product">
        <div class="row">
          <!-- Description -->
          <div class="col-12">
            <h4 style="text-align:center">{{title}}</h4>
          </div>
        </div>

        <div class="padding-top-15">
          <div class="row card-view-row">
            <div class="col-sm-12 col-md-4 col-lg-3" v-for="p in offer_list" :key="p.id">
              <div class="carousel-card">
                <div class="carousel_viewed_image">
                  <img :src="baseurl + '/media/' + p.img" />
                </div>
                <div class="viewed_content text-center">
                  <div class="viewed_name">
                    <p class="offer-title clamp1">{{ p.title }}</p>
                    <p class="offer-text clamp1">{{ p.offer_text }}</p>
                    <p class="offer-subtitle clamp1">{{ p.subtitle }}</p>
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
export default {
  data: () => ({
    offer_list: [],
    title: [],
    allCarouselDetails: [],
    baseurl: process.env.baseUrl
  }),

  components: {},

  mounted() {
    $('.cat_menu').css({
      visibility: 'hidden',
      opacity: '0'
    })

    // this.getAllOngoingAuction()

    this.$store
      .dispatch('singleHomeCarousel', this.$route.params.offer_title)
      .then(res => {
        console.log(res)
        this.offer_list = res.data.list
        this.title = res.data.title['title']
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

    addToCart: function(p, i) {
      if (this.$store.state.isLoggedIn) {
        var payload = new FormData()

        payload.append('product_info', this.variations[0].id)
        payload.append('quantity', 1)
        // payload.append('seller_id', 100)

        this.$store.dispatch('addToCart', payload).then(res => {
          if (i == 1) this.$router.push('/cart')
        })
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
  font-size: 14px;
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

.carousel_viewed_image {
  width: 200px;
  height: 200px;
  margin: auto;
}

.carousel_viewed_image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
