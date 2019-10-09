<template>
  <div>
    <div style="background-color:#dcdcdc;color:DodgerBlue;padding:20px;" align="center">
      <h4 class="no-mar" style="font-weight: bold">FLASH DEALS</h4>
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
          <div class="position-relative">
            <h4 class="underline">
              <span style="font-size: 18px">Featured Auctions</span>
            </h4>
            <a style="position: absolute;right: 18px;bottom: 15px;">View All</a>
          </div>
          <div class="row pr-5">
            <div class="col-12 mt-5 no-padd">
              <div class="d-flex justify-content-between align-items-center">
                <p>Showing all {{ongoingAuction.length}} results</p>
                <!-- <div class="dropdown">
                  <button
                    class="btn btn-primary dropdown-toggle"
                    type="button"
                    data-toggle="dropdown"
                  >
                    Dropdown Example
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">HTML</a>
                    </li>
                    <li>
                      <a href="#">CSS</a>
                    </li>
                    <li>
                      <a href="#">JavaScript</a>
                    </li>
                  </ul>
                </div>-->
              </div>
            </div>

            <div
              v-for="p in ongoingAuction"
              :key="p.id"
              class="col-6 col-md-4 col-lg-4 col-sm-4 text-center mt-3 no-padd"
            >
              <div style="cursor:pointer" @click="goToProducts(p.id)">
                <div>
                  <img
                    :src='"/media/products/" + p.product_info["images"][0]'
                    style="width: 100%;height: 150px;object-fit: contain;"
                  />
                </div>
                <div>
                  <p class="large-font bold mb-1 mt-2 clamp2">{{p.product_info['product_name']}}</p>
                  <div class="d-flex mb-2">
                    <p
                      class="productPrice mr-2 strikethrough"
                    >Price: $ {{p.product_info['discount']}}</p>
                    <p class="productPrice text-primary">$ {{p.product_info['price']}}</p>
                  </div>
                  <div class="d-flex topbids-actions justify-content-between">
                    <button
                      class="d-flex btn button-small rounded-0 align-items-center"
                      style="margin: 0 1px"
                    >
                      <img
                        src="~static/icons/favorite-heart-button (1).svg"
                        style="width: 10px;height: 10px;object-fit: contain;"
                      />
                    </button>
                    <button
                      class="d-flex btn btn-primary rounded-0 align-items-center"
                      style="margin:  0 1px"
                    >
                      <img
                        src="~static/icons/shopping-cart-black-shape (2).svg"
                        style="width: 10px;height: 10px;object-fit: contain;margin-right: 5px"
                      />
                      <span class="small-font">Add to Cart</span>
                    </button>
                    <button
                      class="d-flex btn button-small rounded-0 align-items-center"
                      style="margin:  0 1px"
                    >
                      <img
                        src="~static/icons/auction (1).svg"
                        style="width: 10px;height: 10px;object-fit: contain;"
                      />
                    </button>
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
            <productsuggestion />
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  data: () => ({
    ongoingAuction: []
  }),

  components:{
  },

  mounted() {
    this.getAllOngoingAuction()
    // var star_rating = $('.star-rating .fa')
    // var SetRatingStar = function() {
    //   return star_rating.each(function() {
    //     if (
    //       parseInt(star_rating.siblings('input.rating-value').val()) >=
    //       parseInt($(this).data('rating'))
    //     ) {
    //       return $(this)
    //         .removeClass('fa-star-o')
    //         .addClass('fa-star')
    //     } else {
    //       return $(this)
    //         .removeClass('fa-star')
    //         .addClass('fa-star-o')
    //     }
    //   })
    // }
    // star_rating.on('click', function() {
    //   star_rating.siblings('input.rating-value').val($(this).data('rating'))
    //   return SetRatingStar()
    // })
    //   SetRatingStar()
  },
  methods: {
    getAllOngoingAuction: function() {
      console.log('sdsdsd')
      this.$store.dispatch('getAllOngoingAuction').then(res => {
        console.log(res)
        this.ongoingAuction = JSON.parse(JSON.stringify(res.data))

        this.ongoingAuction.filter(
          v => (v.product_info.images = JSON.parse(v.product_info.images))
        )
      })
    },
    goToProducts: function(id) {
      
      localStorage.setItem("single_product", id)

      console.log(id)

      this.$router.push("/product")
    }
  }
}
</script>