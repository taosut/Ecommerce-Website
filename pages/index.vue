<template>
  <div>
    <div class="banner">
      <div
        class="banner_background"
        style="background-image:url(images/banner_background.jpg)"
      ></div>
      <div class="container fill_height">
        <div class="row fill_height">
          <div class="banner_product_image">
            <img src="images/banner_product.png" alt />
          </div>
          <div class="col-lg-5 offset-lg-4 fill_height">
            <div class="banner_content">
              <h1 class="banner_text">new era of smartphones</h1>
              <div class="banner_price"><span>$530</span>$460</div>
              <div class="banner_product_name">Apple Iphone 6s</div>
              <div class="button banner_button">
                <a href="#">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Characteristics -->

    <div style="position: relative;top: -111px;">
      <div class="characteristics" style="padding-bottom: 0;">
        <div class="container">
          <div class="row">
            <!-- Char. Item -->
            <div class="col-lg-3 col-md-6 char_col">
              <div
                class="viewed_item discount d-flex flex-column justify-content-center"
              >
                <p style="text-align:left;padding-bottom:20px">
                  iPhone 11 Gold XR
                </p>
                <div
                  class="viewed_image"
                  style="display: flex;width: 100%;align-items: center;justify-content: center;"
                >
                  <img src="images/view_1.jpg" alt />
                </div>
                <div class="viewed_content text-center">
                  <div class="viewed_name">
                    <a href="#">Explore all Apple devices</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Char. Item -->
            <div class="col-lg-3 col-md-6 char_col">
              <div
                class="viewed_item discount d-flex flex-column justify-content-center"
              >
                <p style="text-align:left;padding-bottom:20px">
                  iPhone 11 Gold XR
                </p>
                <div
                  class="viewed_image"
                  style="display: flex;width: 100%;align-items: center;justify-content: center;"
                >
                  <img src="images/view_1.jpg" alt />
                </div>
                <div class="viewed_content text-center">
                  <div class="viewed_name">
                    <a href="#">Explore all Apple devices</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Char. Item -->
            <div class="col-lg-3 col-md-6 char_col">
              <div
                class="viewed_item discount d-flex flex-column justify-content-center"
              >
                <p style="text-align:left;padding-bottom:20px">
                  iPhone 11 Gold XR
                </p>
                <div
                  class="viewed_image"
                  style="display: flex;width: 100%;align-items: center;justify-content: center;"
                >
                  <img src="images/view_1.jpg" alt />
                </div>
                <div class="viewed_content text-center">
                  <div class="viewed_name">
                    <a href="#">Explore all Apple devices</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Char. Item -->
            <div class="col-lg-3 col-md-6 char_col">
              <div
                class="viewed_item discount d-flex flex-column justify-content-center"
              >
                <p style="text-align:left;padding-bottom:20px">
                  iPhone 11 Gold XR
                </p>
                <div
                  class="viewed_image"
                  style="display: flex;width: 100%;align-items: center;justify-content: center;"
                >
                  <img src="images/view_1.jpg" alt />
                </div>
                <div class="viewed_content text-center">
                  <div class="viewed_name">
                    <a href="#">Explore all Apple devices</a>
                  </div>
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
                  <div class="" v-for="p in allProducts" :key="p.id">
                    <div
                      class="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center"
                    >
                      <div class="viewed_image">
                        <img
                          :src="'/media/products/' + p.product_id.images[0]"
                          @error="setFallbackImageUrl"
                          alt
                        />
                      </div>
                      <div class="viewed_content text-center">
                        <div class="viewed_name">
                          <nuxt-link :to="'/products/' + p.slug">{{
                            p.product_name
                          }}</nuxt-link>
                        </div>
                        <div class="viewed_price">
                          ${{ p.price }}
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
      </div>

      <!-- Characteristics -->

      <div class="" style="background-color: #eff6fa">
        <div class="container">
          <div class="row">
            <!-- Char. Item -->
            <div class="col-lg-3 col-md-6 char_col">
              <div
                class="viewed_item discount d-flex flex-column justify-content-center"
              >
                <p style="text-align:left;padding-bottom:20px">
                  iPhone 11 Gold XR
                </p>
                <div
                  class="viewed_image"
                  style="display: flex;width: 100%;align-items: center;justify-content: center;"
                >
                  <img src="images/view_1.jpg" alt />
                </div>
                <div class="viewed_content text-center">
                  <div class="viewed_name">
                    <a href="#">Explore all Apple devices</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Char. Item -->
            <div class="col-lg-3 col-md-6 char_col">
              <div
                class="viewed_item discount d-flex flex-column justify-content-center"
              >
                <p style="text-align:left;padding-bottom:20px">
                  iPhone 11 Gold XR
                </p>
                <div
                  class="viewed_image"
                  style="display: flex;width: 100%;align-items: center;justify-content: center;"
                >
                  <img src="images/view_1.jpg" alt />
                </div>
                <div class="viewed_content text-center">
                  <div class="viewed_name">
                    <a href="#">Explore all Apple devices</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Char. Item -->
            <div class="col-lg-3 col-md-6 char_col">
              <div
                class="viewed_item discount d-flex flex-column justify-content-center"
              >
                <p style="text-align:left;padding-bottom:20px">
                  iPhone 11 Gold XR
                </p>
                <div
                  class="viewed_image"
                  style="display: flex;width: 100%;align-items: center;justify-content: center;"
                >
                  <img src="images/view_1.jpg" alt />
                </div>
                <div class="viewed_content text-center">
                  <div class="viewed_name">
                    <a href="#">Explore all Apple devices</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Char. Item -->
            <div class="col-lg-3 col-md-6 char_col">
              <div
                class="viewed_item discount d-flex flex-column justify-content-center"
              >
                <p style="text-align:left;padding-bottom:20px">
                  iPhone 11 Gold XR
                </p>
                <div
                  class="viewed_image"
                  style="display: flex;width: 100%;align-items: center;justify-content: center;"
                >
                  <img src="images/view_1.jpg" alt />
                </div>
                <div class="viewed_content text-center">
                  <div class="viewed_name">
                    <a href="#">Explore all Apple devices</a>
                  </div>
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
                  <div class="" v-for="p in allProducts" :key="p.id">
                    <div
                      class="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center"
                    >
                      <div class="viewed_image">
                        <img
                          :src="'/media/products/' + p.product_id.images[0]"
                          @error="setFallbackImageUrl"
                          alt
                        />
                      </div>
                      <div class="viewed_content text-center">
                        <div class="viewed_name">
                          <nuxt-link :to="'/products/' + p.slug">{{
                            p.product_id.product_name
                          }}</nuxt-link>
                        </div>
                        <div class="viewed_price">
                          ₹ {{ p.price }}
                          <span>₹ {{ p.mrp }}</span>
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
  </div>
</template>
<script>
export default {
  data: () => ({
    allProducts: [
      {
        id: '',
        product_id:{
          images: []
        }
      }
    ]
  }),
  mounted() {
    this.getAllProducts()

    $('.cat_menu').css({
      visibility: 'visible',
      opacity: '1'
    })

    $('body').css('background-color', '#eff6fa')

    setTimeout(function() {
      $('.associates').owlCarousel({
        loop: true,
        nav: true,
        navText: [
          "<img class='rotate180' src='icons/arrow.svg'>",
          "<img src='icons/arrow.svg'>"
        ],
        dotsEach: true,
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
      $('.hero-carousel, .testimonial').owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1
          }
        }
      })
    }, 100)
  },
  methods: {

    getAllProducts: function() {
      this.$store.dispatch('allProducts').then(res => {
        console.log(res)
        this.allProducts = JSON.parse(JSON.stringify(res.data))

        this.allProducts.filter(v => (v.product_id.images = JSON.parse(v.product_id.images)))


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
    goToProducts: function(id) {
      localStorage.setItem('single_product', id)

      console.log(id)

      this.$router.push('/product')
    }
  }
}
</script>

<style scoped>
.cat_menu_container ul {
  background-color: red;
}

.testimony-profile img {
  height: 120px;
  border-radius: 50%;
  width: 120px;
  -o-object-fit: cover;
  object-fit: cover;
}

.testimonial-body {
  margin: auto;
  width: 50%;
  position: relative;
}

.product_name {
  font-size: 13px;
  line-height: 20px;
  height: 40px;
}

.hero_image img:hover {
  box-shadow: 0px 5px 11px #2e2c2c5c;
  transition: all 0.4s ease-in-out;
}

.owl-nav {
  position: absolute;
  width: 100%;
}
</style>
