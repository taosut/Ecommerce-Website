<template>
  <div style="margin-top: 20px;">
    <div class="message" v-if="!hideMessage">
      <div
        class="message-container"
        style="background-color: #F44336;border-radius: 5px;padding: 30px 60px;color: white;text-align: center;margin: auto;position: absolute;top: 100px;right: 0;left: 0; z-index: 99;"
      >
        <p
          style="font-size: 20px;color: white; font-weight: bold; position:absolute;right: 40px;cursor:pointer"
          @click="hideMessage = !hideMessage"
        >X</p>
        <h3 style="font-weight: bold">NATIONAL APPEAL</h3>
        <p
          style="color: white;line-height: 30px;padding-bottom: 20px;padding-top: 20px;font-size: 18px;"
        >To combat against the effect of CORONA Virus epidemic that has spread all over the world. As per govt. notice until 3rd of May 2020, request all of our members to cancel all our work or meeting scheduled. And stay at home and take care of yourself and others.</p>
      </div>
    </div>

    <div class="loading-container loading">
      <div class="loader">Loading...</div>
    </div>
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

      <div class="viewed" v-if="allOffers.length > 0">
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
                  <button
                    @click="viewOfferList(p.title)"
                    v-if="p.carousel_type==2"
                    class="btn btn-primary white-text"
                    style="font-size:0.8rem!important"
                  >View All</button>
                  <button
                    @click="searchQuery(p.url)"
                    v-else-if="p.carousel_type==1"
                    class="btn btn-primary white-text"
                    style="font-size:0.8rem!important"
                  >View All</button>
                  <!-- <button @click="viewOfferList(p.title)" v-if="p.items.length > 5" class="btn btn-primary white-text" style="font-size:0.8rem!important">View All</button> -->
                </div>
                <CarouselType />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="viewed">
        <div class="container">
          <div class="row">
            <div v-bind:class="{'col-12 col-md-6': p.products[0].carousel_type == 1,  'col-12': p.products[0].carousel_type != 1}" v-for="p in carousel" :key="p.id">
              <CarouselType v-if="p.products[0].carousel_type == 1" :p="p" />
              <Products v-else :p="p" />
            </div>
          </div>
        </div>
      </div>

      <section
        class="hide-on-med-and-down"
        style="height: 500px;background-color: white;margin-bottom: 50px;"
      >
        <div class="container">
          <div class="d-flex justify-content-around align-items-center" style="height: 500px">
            <img class="h-100" src="/images/app-footer.png" />
            <div>
              <h2 class="download-message">Download WENSLink</h2>
              <h2 class="download-message">App Now</h2>
              <p class="p-message">Fast, Simple & Delightful.</p>
              <p class="p-message">All it takes is 30 seconds to Download.</p>

              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.tech.wenslink"
              >
                <img
                  src="/images/play.png"
                  style="width: 130px;height: 100%;position: relative;height: 100%;left: -7px;top: 30px;"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

import CarouselType from '@/components/carousel_type'
import Products from '@/components/products'

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
    baseurl: process.env.baseUrl,
    hideMessage: false
  }),
  components: {
    CarouselType,
    Products
  },
  mounted() {
    this.getAllBanner()

    $('.loading').removeClass('hide')

    this.getAllProducts()
    // this.eachofferset()

    $('.cat_menu').css({
      visibility: 'visible',
      opacity: '1'
    })

    Vue.config.errorHandler = function(err) {
      alert('error')
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
              if (this.allProducts[key1][0]['carousel_type']) {
                console.log('got one')
              }
            } catch (error) {}

            var products = {}
            products['title'] = key1
            products['products'] = this.allProducts[key1]
            this.carousel.push(products)
          }
        }

        $('.loading').addClass('hide')
      })
    },
    viewOfferList: function(title) {
      console.log(title)

      this.$router.push(
        '/offers-list/' + title.replace(/[\s.;,?&%0-9]/g, '-').toLowerCase()
      )
    },
    searchQuery: function(url) {
      console.log(url)

      this.$router.push('/search' + url)
    },
    eachofferset: function() {
      this.$store.dispatch('eachofferset').then(res => {
        console.log(res)
        this.allOffers = res.data.body

        $('.loading').addClass('hide')

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
  .message-container {
    width: 95% !important;
    margin: auto;
  }
}

.message-container {
  width: 70%;
  margin: auto;
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
  -o-object-fit: contain !important;
  object-fit: contain !important;
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

.message {
  position: fixed;
  z-index: 9999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.message::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #00000096;
  left: 0;
}
</style>
