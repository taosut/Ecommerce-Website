<template>
  <div style="margin: 30px 0">
    <nuxt-link target="_blank" :to="'/search' + p.products[0].url">
      <img
        style="height: 250px;width: 100%;object-fit: cover;border-radius: 5px;"
        :src="baseurl + '/media/' + p.products[0].images"
        @error="setFallbackImageUrl"
        alt
      />
    </nuxt-link>
  </div>
  <!-- <div>
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
          <nuxt-link :to="'/search/' + q.url">
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
  </div>-->
</template>



<script>
export default {
  props: {
    p: Object
  },
  data() {
    return {
      baseurl: process.env.baseUrl
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