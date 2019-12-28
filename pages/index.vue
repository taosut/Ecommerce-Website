<template>
  <div style="margin-top: 20px;">
    <div class="container hero-carousel">
      <client-only>
        <carousel
          class="hero-carousel"
          :nav="false"
          :autoplay="true"
          :autoplayTimeout="3000"
          :loop="true"
          :items="1"
          :dots="false"
          v-if="allBanners.length > 0"
        >
          <template class="hide-on-small-only" slot="prev"
            ><span class="carousel-prev hide-on-small-only"
              ><img class="rotate180" src="icons/arrow.svg"/></span
          ></template>
          <div class="item" v-for="p in allBanners" :key="p.id">
            <img
              :src="baseurl + '/media/banners/' + p.image"
              @error="setFallbackImageUrl"
            />
          </div>
          <template class="hide-on-small-only" slot="next"
            ><span class="carousel-next hide-on-small-only"><img src="icons/arrow.svg"/></span
          ></template>
        </carousel>
      </client-only>
    </div>

    <!-- Characteristics -->

    <div style="position: relative;">
      <div class="characteristics" style="padding-bottom: 0;">
        <div class="container">
          <div class="row">
            <!-- Char. Item -->
            <div
              class="col-lg-3 col-md-6 char_col"
              v-for="p in 4"
              :key="p"
              style="display: none"
            >
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
                  <img src="images/adv_1.png" alt />
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
            <div class="col-12" v-for="p in carousel" :key="p.id">
              <div class="product_section" v-if="p.products.length != 0">
                <div class="product_section_title">
                  <h3 class="viewed_title">{{ p.title }}</h3>
                </div>

                <div>
                  <div class="owl-carousel owl-theme viewed_slider">
                    <div class="" v-for="q in p.products" :key="q.id">
                      <nuxt-link :to="'/products/' + q.slug">
                        <div
                          class="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center"
                        >
                          <div class="viewed_image">
                            <img
                              :src="baseurl + '/media/products/' + q.images[0]"
                              @error="setFallbackImageUrl"
                              alt
                            />
                          </div>
                          <div class="viewed_content text-center">
                            <div class="viewed_name">
                              <p class="clamp2">{{ q.product_name }}</p>
                            </div>
                            <div class="viewed_price">
                              ₹{{ q.price }}
                              <span v-if="q.price < q.mrp">₹{{ q.mrp }}</span>
                            </div>
                          </div>
                          <ul class="item_marks">
                            <li
                              class="item_mark item_discount"
                              v-if="q.price < q.mrp"
                            >
                              {{
                                Math.round(((q.mrp - q.price) / q.mrp) * 100)
                              }}%
                            </li>
                            <li class="item_mark item_new">new</li>
                          </ul>
                        </div>
                      </nuxt-link>
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
        product_id: {
          images: []
        }
      }
    ],
    carousel: [],
    allBanners: [],
    baseurl: process.env.baseUrl
  }),
  mounted() {
    this.getAllBanner()

    this.getAllProducts()

    $('.cat_menu').css({
      visibility: 'visible',
      opacity: '1'
    })

    // $('body').css('background-color', '#eff6fa')

    setTimeout(function() {
      $('.associates').owlCarousel({
        loop: true,
        nav: true,
        navText: [
          "<img class='rotate180' src='static/icons/arrow.svg'>",
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
    }, 100)
  },
  methods: {
    getAllProducts: function() {
      this.$store.dispatch('allProducts').then(res => {
        console.log(res)
        this.allProducts = JSON.parse(JSON.stringify(res.data.body))

        for (let key1 in this.allProducts) {
          if (this.allProducts.hasOwnProperty(key1)) {
            this.allProducts[key1].filter(
              v => (v.images = JSON.parse(v.images))
            )

            var products = {}
            products['title'] = key1
            products['products'] = this.allProducts[key1]
            this.carousel.push(products)
          }
        }

        setTimeout(function() {
          $('.products, .viewed_slider').owlCarousel({
            loop: false,
            nav: true,
            navText: [
              "<img class='rotate180' src='icons/arrow.svg'>",
              "<img src='icons/arrow.svg'>"
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
                items: 6
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
    },
    updated: function() {
      console.log('ssss')
    },
    getAllBanner: function() {
      this.$store.dispatch('getAllBanner').then(res => {
        console.log(res)
        this.allBanners = JSON.parse(JSON.stringify(res.data))
      })
    }
  }
}
</script>

<style scoped>
.hero-carousel {
  height: 280px;
  position: relative;
}

@media only screen and (max-width: 768px) {
  .hero-carousel {
    height: 140px;
  }
  .container.hero-carousel {
    padding: 0
  }
}

.carousel-prev {
  position: absolute;
  left: 0px;
  top: 90px;
  background-color: white !important;
  box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.16863);
  border-radius: 0px 5px 5px 0px !important;
  width: 50px;
  height: 100px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  z-index: 2;
  align-items: center;
}

.carousel-prev img,
.carousel-next img {
  width: 23px;
  height: 100%;
}

.carousel-next {
  position: absolute;
  right: 0px;
  top: 90px;
  background-color: white !important;
  box-shadow: 0px 7px 8px rgba(0, 0, 0, 0.16863);
  border-radius: 5px 0px 0px 5px !important;
  width: 50px;
  height: 100px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  z-index: 2;
  align-items: center;
}

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

.owl-item .item {
  height: 100%;
  object-fit: cover;
}

.owl-carousel .owl-item img {
  display: block;
  width: 100%;
  object-fit: cover;
  height: 100%;
}

.viewed_item:hover {
  box-shadow: 0 7px 17px 0 rgba(23, 84, 116, 0.18);
  border: solid 0.9px #f3f3f3;
}

.viewed_item {
  border: solid 0.9px rgba(243, 243, 243, 0);
}

.product_section {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  margin: 0px 0px 10px;
}

.product_section_title {
  padding: 15px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
