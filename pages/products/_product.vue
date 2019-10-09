<template>
  <div>

    	<!-- Single Product -->

	<div class="single_product">
		<div class="container">
			<div class="row">

				<!-- Images -->
				<div class="col-lg-1 order-lg-1 order-2">
					<ul class="image_list">
						<li data-image="images/single_4.jpg"><img  :src='"/media/products/" + product.images[0]' @error="setFallbackImageUrl"  alt=""></li>
						<li data-image="images/single_2.jpg"><img  :src='"/media/products/" + product.images[1]' @error="setFallbackImageUrl"  alt=""></li>
						<li data-image="images/single_3.jpg"><img  :src='"/media/products/" + product.images[2]' @error="setFallbackImageUrl"  alt=""></li>
					</ul>
				</div>

				<!-- Selected Image -->
				<div class="col-lg-5 order-lg-2 order-1">
					<div class="image_selected"><img  :src='"/media/products/" + product.images[0]'
                        @error="setFallbackImageUrl" alt=""></div>
				</div>

				<!-- Description -->
				<div class="col-lg-5 order-3">
					<div class="product_description">
						<div class="product_category">{{product.category['name']}}</div>
						<div class="product_name">{{product.product_name}}</div>
						<div>{{product.brand['name']}}</div>
						<!-- <div class="rating_r rating_r_4 product_rating"><i></i><i></i><i></i><i></i><i></i></div> -->
						<div class="product_text"><p>{{product.description}}</p></div>
						<div class="order_info d-flex flex-row">
							<form action="#">

								<div class="product_price">${{product.price}}</div>
								<div class="button_container">
									<button type="button" class="button cart_button">Buy Now</button>
									<button type="button" class="button cart_button" @click="addToCart(product.id)" style="background-color: transparent;border: 1px solid black;color: black;">Add to Cart</button>
								</div>
								
							</form>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

    <!-- Recently Viewed -->

    <div class="viewed">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="">
              <h3 class="viewed_title">Newly Added</h3>
            </div>

            <div>
              <!-- Recently Viewed Slider -->

              <div class="owl-carousel owl-theme viewed_slider">
                <!-- Recently Viewed Item -->
                <div class="" v-for="p in ongoingAuction" :key="p.id">
                  <div
                    class="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center"
                  >
                    <div class="viewed_image">
                      <img   :src='"/media/products/" + p.images[0]'
                        @error="setFallbackImageUrl" alt />
                    </div>
                    <div class="viewed_content text-center">
                                            <div class="viewed_name">
                        <a href="#">{{p.product_name}}</a>
                      </div>
                      <div class="viewed_price">
                        ${{p.price}}
                        <span>${{p.discount}}</span>
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
    </div>


  </div>
</template>


<script>

export default {
  data: () => ({
        ongoingAuction: [
      {
          id: '',
          images: []
      }
    ],
    product: {
      category: {
        name: ''
      },
      subcategory: {
        name: ''
      },
      brand: {
        name: ''
      },
      images: {
        
      }
    },
    images: {},
    auction_data: [],
    auction_timer: [],
    auction_status: 0,
    bidding_list: {
      user_id: ""
    }
  }),

  components: {
  },

  mounted() {


        $(".cat_menu").css({
      'visibility' : 'hidden',
      'opacity' : '0',
    })



      this.getAllOngoingAuction()

    this.$store
      .dispatch('getSingleProduct', this.$route.params.product)
      .then(res => {
        this.product = JSON.parse(JSON.stringify(res.data))
        this.product.images = JSON.parse(this.product.images)


      })
  },
  methods: {

        getAllOngoingAuction: function() {
      console.log('sdsdsd')
      this.$store.dispatch('allProducts').then(res => {
        console.log(res)
        this.ongoingAuction = JSON.parse(JSON.stringify(res.data))

        this.ongoingAuction.filter(
          v => (v.images = JSON.parse(v.images))
        )

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
    getBidding: function(id) {


      
        this.$store
          .dispatch('getBiddingFromAuctionID', id)
          .then(res => {

             this.bidding_list = JSON.parse(JSON.stringify(res.data))

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
    desc: function(id){

        $(".active").removeClass('active')
        $("." + id).addClass('active')
      


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
  color:black
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



</style>