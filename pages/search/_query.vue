<template>
  <div style="margin: 20px 0;">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="capitalize">{{ subcategory }}</h3>
        </div>
        <div class="col-md-2">
          <div class="" style="background-color: white">
              <h4>Filters</h4>
          </div>
        </div>
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-3" v-for="q in search_result" :key="q.id">
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
                    <li class="item_mark item_discount" v-if="q.price < q.mrp">
                      {{ Math.round(((q.mrp - q.price) / q.mrp) * 100) }}%
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
</template>

<script>
export default {
  data() {
    return {
      query_string: this.$route.params,
      search_result: [],
      subcategory: ''
    }
  },
  methods: {},
  mounted() {
    console.log('sssssssssssss')
    console.log(this.$route.path)
    console.log(this.$route.fullPath.replace('/search', ''))
    console.log(this.$route.fullPath)

    this.$store.dispatch('productsearch', this.$route.fullPath).then(res => {
      console.log(res)
      this.search_result = res.data.products
      this.subcategory = res.data.subcategory
    })
  }
}
</script>

<style>
.capitalize {
  text-transform: capitalize;
}
</style>
