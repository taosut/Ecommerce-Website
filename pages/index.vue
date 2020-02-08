<template>
  <div style="margin-top: 20px;">
    <div class="container hero-carousel">
      <client-only>
        <carousel
          class="hero-carousel"
          :per-page="1"
          :autoplay="false"
          :mouse-drag="true"
          :loop="true"
          paginationColor="#e91e63"
          paginationActiveColor="#ffffff"
        >
          <slide v-for="p in allBanners" :key="p.id">
            <div class="item">
              <nuxt-link :to="p.url" v-if="p.url != null && p.url != '' && p.url != undefined">
                <img
                  @click="get"
                  class="carousel-image"
                  :data-url="p.url"
                  :src="baseurl + '/media/banners/' + p.image"
                  @error="setFallbackImageUrl"
                />
              </nuxt-link>

              <img
                v-else
                @click="get"
                :src="baseurl + '/media/banners/' + p.image"
                @error="setFallbackImageUrl"
              />
            </div>
          </slide>
        </carousel>
      </client-only>
    </div>

    <!-- Characteristics -->

    <div style="position: relative;">
      <div class="characteristics" style="padding-bottom: 0;">
        <div class="container">
          <div class="row">
            <!-- Char. Item -->
            <div class="col-lg-3 col-md-6 char_col" v-for="p in 4" :key="p" style="display: none">
              <div class="viewed_item discount d-flex flex-column justify-content-center">
                <p style="text-align:left;padding-bottom:20px">iPhone 11 Gold XR</p>
                <div
                  class="viewed_image"
                  style="display: flex;width: 100%;align-items: center;justify-content: center;"
                >
                  <img src="images/adv_1.png" alt />
                </div>
                <div class="text-center">
                  <div class="viewed_name">
                    <a href="#">Explore all Apple devices</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="viewed">
        <div class="container">
          <div class="row">
            <div class="col-12" v-for="p in allOffers" :key="p.id">
              <div class="product_section" v-if="p.items.length != 0">
                <div
                  class="d-flex product_section_title justify-content-between align-items-center"
                >
                  <div>
                    <h3 class="viewed_title">{{ p.title }}</h3>
                    <h3 class="viewed_subtitle">{{ p.subtitle }}</h3>
                  </div>
                  <button @click="viewOfferList(p.title)" class="btn btn-primary white-text" style="font-size:0.8rem!important">View All</button>
                  <button @click="viewOfferList(p.title)" v-if="p.items.length > 5" class="btn btn-primary white-text" style="font-size:0.8rem!important">View All</button>
                </div>

                <div>
                  <client-only>
                    <carousel
                      v-if="p.carousel_type==2"
                      class="product-carousel"
                      :perPageCustom="[[0, 1], [600, 6]]"
                      :autoplay="true"
                      :mouse-drag="true"
                      :loop="true"
                      paginationColor="#e91e63"
                      paginationActiveColor="#ffffff"
                    >
                      <slide class v-for="q in p.items" :key="q.id">
                        <nuxt-link :to="'/products/' + q.slug">
                          <div
                            class="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center"
                          >
                            <div class="viewed_image">
                              <img
                                :src="
                                baseurl +
                                  '/media/' +
                                  q.img
                              "
                                @error="setFallbackImageUrl"
                                alt
                              />
                            </div>
                            <div class="text-center">
                              <div class="viewed_name">
                                <p class="offer-title clamp1">{{ q.title }}</p>
                                <p class="offer-text clamp1">{{ q.offer_text }}</p>
                                <p class="offer-subtitle clamp1">{{ q.subtitle }}</p>
                              </div>
                            </div>
                          </div>
                        </nuxt-link>
                      </slide>
                    </carousel>

                    <carousel
                      v-else-if="p.carousel_type==1"
                      class="product-carousel"
                      :perPageCustom="[[0, 1], [600, 6]]"
                      :autoplay="false"
                      :mouse-drag="true"
                      :loop="true"
                      paginationColor="#e91e63"
                      paginationActiveColor="#ffffff"
                    >
                      <slide class v-for="q in p.items" :key="q.id">
                        <nuxt-link :to="'/products/' + q.slug">
                          <div
                            class="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center"
                          >
                            <div class="viewed_image">
                              <img
                                :src="
                                baseurl +
                                  '/backend/api/products/image/200/40/' +
                                  JSON.parse(q.images)[0]
                              "
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
                              <li class="item_mark item_discount" v-if="q.price < q.mrp">
                                {{
                                Math.round(((q.mrp - q.price) / q.mrp) * 100)
                                }}%
                              </li>
                              <li class="item_mark item_new">new</li>
                            </ul>
                          </div>
                        </nuxt-link>
                      </slide>
                    </carousel>
                  </client-only>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section style="height: 500px;background-color: white;margin-bottom: 50px;">
        <div class="container">
          <div class="d-flex justify-content-around align-items-center" style="height: 500px">
            <img src="/images/app-footer.png" />
            <div>
              <h2 class="download-message">Download WENSLink</h2>
              <h2 class="download-message">App Now</h2>
              <p class="p-message">Fast, Simple & Delightful.</p>
              <p class="p-message">All it takes is 30 seconds to Download.</p>

              <a target="_blank" href="https://play.google.com/store/apps/details?id=com.tech.wenslink">
                <img
                  src="/images/play.png"
                  style="width: 130px;height: 100%;position: relative;height: 100%;left: -7px;top: 30px;"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- <div class="viewed">
        <div class="container">
          <div class="row">
            <div class="col-12" v-for="p in carousel" :key="p.id">
              <div class="product_section" v-if="p.products.length != 0">
                <div class="product_section_title">
                  <h3 class="viewed_title">{{ p.title }}</h3>
                </div>

                <div>
                  <client-only>
                    <carousel
                      class="product-carousel"
                      :perPageCustom="[[0, 1], [600, 6]]"
                      :autoplay="true"
                      :mouse-drag="true"
                      :loop="true"
                      paginationColor="#e91e63"
                      paginationSize="0"
                      paginationActiveColor="#ffffff"
                    >
                      <slide class v-for="q in p.products" :key="q.id">
                        <nuxt-link :to="'/products/' + q.slug">
                          <div
                            class="viewed_item discount d-flex flex-column align-items-center justify-content-center text-center"
                          >
                            <div class="viewed_image">
                              <img
                                :src="
                                baseurl +
                                  '/backend/api/products/image/200/40/' +
                                  q.images[0]
                              "
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
                              <li class="item_mark item_discount" v-if="q.price < q.mrp">
                                {{
                                Math.round(((q.mrp - q.price) / q.mrp) * 100)
                                }}%
                              </li>
                              <li class="item_mark item_new">new</li>
                            </ul>
                          </div>
                        </nuxt-link>
                      </slide>
                    </carousel>
                  </client-only>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
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
    allOffers: [],
    baseurl: process.env.baseUrl
  }),
  mounted() {
    this.getAllBanner()

    this.getAllProducts()
    this.eachofferset()

    $('.cat_menu').css({
      visibility: 'visible',
      opacity: '1'
    })

    Vue.config.errorHandler = function(err) {
      alert(err)
    }

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
            try {
              this.allProducts[key1].filter(
                v => (v.images = JSON.parse(v.images))
              )
            } catch (error) {}

            var products = {}
            products['title'] = key1
            products['products'] = this.allProducts[key1]
            this.carousel.push(products)
          }
        }
      })
    },
    viewOfferList: function(title) {

      console.log(title)

        this.$router.push('/offers-list/' + title.replace(/[\s.;,?&%0-9]/g, '-').toLowerCase())

    },
    eachofferset: function() {
      this.$store.dispatch('eachofferset').then(res => {
        console.log(res)
        this.allOffers = res.data

        // for (let key1 in this.allOffers) {
        //   if (this.allOffers.hasOwnProperty(key1)) {
        //     try {
        //       this.allOffers[key1].filter(
        //         v => (v.images = JSON.parse(v.images))
        //       )
        //     } catch (error) {}

        //     var products = {}
        //     products['title'] = key1
        //     products['products'] = this.allProducts[key1]
        //     this.carousel.push(products)
        //   }
        // }

        // for (let key1 in this.allProducts) {
        //   if (this.allProducts.hasOwnProperty(key1)) {
        //     try {
        //       this.allProducts[key1].filter(
        //         v => (v.images = JSON.parse(v.images))
        //       )
        //     } catch (error) {}

        //     var products = {}
        //     products['title'] = key1
        //     products['products'] = this.allProducts[key1]
        //     this.carousel.push(products)
        //   }
        // }

        // setTimeout(function() {
        //   $('.products, .viewed_slider').owlCarousel({
        //     loop: false,
        //     nav: true,
        //     navText: [
        //       "<img class='rotate180' src='icons/arrow.svg'>",
        //       "<img src='icons/arrow.svg'>"
        //     ],
        //     dots: false,
        //     dotsEach: false,
        //     responsive: {
        //       0: {
        //         items: 1
        //       },
        //       600: {
        //         items: 3
        //       },
        //       1000: {
        //         items: 6
        //       }
        //     }
        //   })
        // }, 100)
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
        this.allBanners = JSON.parse(JSON.stringify(res.data.body))
      })
    },
    get: function() {
      console.log('sss')
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
    padding: 0;
  }
}

.hero-carousel > span {
  display: block !important;
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

.viewed_item:hover img {
  box-shadow: 0 7px 17px 0 rgba(23, 84, 116, 0.18);
  transform: scale(1.04);
  transition: all 0.2s ease-in-out;
}

.viewed_item {
  max-height: 366px;
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

.carousel-image {
  cursor: pointer;
}

.hero-carousel img {
  height: 280px;
  width: 100%;
  -o-object-fit: cover !important;
  object-fit: cover !important;
}

.product-carousel img {
  height: 100%;
  width: 100%;
  -o-object-fit: cover !important;
  object-fit: cover !important;
}

.offer-title {
  font-size: 14px;
  font-weight: 500;
  margin-top: 15px;
  color: #333;
  max-width: 150px;
}

.offer-text {
  color: #388e3c;
  padding-top: 8px;
}

.offer-subtitle {
  opacity: 0.6;
  padding-top: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.download-message {
  font-family: 'Bold';
}

.p-message {
  font-size: 16px;
  line-height: 35px;
}
</style>
