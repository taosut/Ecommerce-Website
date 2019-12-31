<template>
  <div style="margin: 20px 0;">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="capitalize">{{ subcategory }}</h3>
        </div>
        <div class="col-md-3">
          <div class="account">
            <div class="account-info">
              <span>PRICE</span>
              <input
                type="text"
                class="js-range-slider"
                name="my_range"
                value=""
              />
            </div>
            <div
              class="account-info"
              v-for="(p, index) in filter_options"
              :key="index"
            >
              <span>{{ index }}</span>
              <div class="" :title="index1" v-for="(q, index1) in p" :key="q">
                <label
                  ><input
                    @change="refresh_result(index, q, $event.target.checked)"
                    type="checkbox"
                    class="_3uUUD5"
                    :name="index.toLowerCase()"
                    :value="q.toLowerCase()"
                  />
                  <div class="filter_name">{{ q }}</div></label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9">
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
      subcategory: '',
      filters: {},
      baseurl: process.env.baseUrl,
      filter_options: {}
    }
  },
  methods: {
    refresh_result: function(attr, value, state) {
      console.log(state)
      console.log(this.$route.fullPath)
      var paramsString = this.$route.fullPath
      var searchParams = new URLSearchParams(paramsString)
      console.log(paramsString)
      if (state == true) {
        searchParams.append('filters', attr + '=' + value.toLowerCase())
      } else {
        console.log(attr + '=' + value.toLowerCase())
        searchParams.delete('filters', attr + '=' + value.toLowerCase())
        // var temp = searchParams.toString()
        // console.log(temp)
        // temp.replace("&" + attr + '=' + value.toLowerCase(), "");

      }

      var final_url = decodeURIComponent(searchParams.toString())

      console.log(final_url)
      window.location.href = final_url
    }
  },
  mounted() {
    console.log('sssssssssssss')
    console.log(this.$route.path)
    console.log(this.$route.fullPath.replace('/search', ''))
    console.log(this.$route.query.filters)

    $('.js-range-slider').ionRangeSlider({
      type: 'double',
      grid: true,
      min: 0,
      max: 1000,
      skin: 'round',
      from: 200,
      to: 800,
      prefix: '₹'
    })

    this.$store.dispatch('productsearch', this.$route.fullPath).then(res => {
      console.log(res)
      this.search_result = res.data.products
      // this.search_result = Object.assign([] , res.data.products)
      this.subcategory = res.data.subcategory
      this.filter_options = res.data.filter_options

      for (let key1 in this.search_result) {
        console.log(this.search_result[key1])
        if (this.search_result.hasOwnProperty(key1)) {
          try {
            this.search_result[key1].images = JSON.parse(
              this.search_result[key1].images
            )
          } catch (error) {}
        }
      }
      if (res.data.search_type == 'category') {
        this.filters = JSON.parse(res.data['subcategory_data']['specs'])
      }

      var vm = this
      setTimeout(function() {
        try {
          if (Array.isArray(vm.$route.query.filters)) {
            for (var i = 0; i < vm.$route.query.filters.length; i++) {
              // var a = this.$route.query.filters[i].split("=")
              // var temp = a.toString()
              console.log(vm.$route.query.filters)
              console.log(vm.$route.query.filters[i].split('='))

              $(
                'input[name="' +
                  vm.$route.query.filters[i].split('=')[0].toLowerCase() +
                  '"][value="' +
                  vm.$route.query.filters[i].split('=')[1].toLowerCase() +
                  '"]'
              ).attr('checked', true)
              console.log(
                'input[name="' +
                  vm.$route.query.filters[i].split('=')[0].toLowerCase() +
                  '"][value="' +
                  vm.$route.query.filters[i].split('=')[1].toLowerCase() +
                  '"]'
              )
            }
          } else {
            $(
              'input[name="' +
                vm.$route.query.filters.split('=')[0].toLowerCase() +
                '"][value="' +
                vm.$route.query.filters.split('=')[1].toLowerCase() +
                '"]'
            ).attr('checked', true)
            console.log(
              'input[name="' +
                vm.$route.query.filters.split('=')[0].toLowerCase() +
                '"][value="' +
                vm.$route.query.filters.split('=')[1].toLowerCase() +
                '"]'
            )
          }
        } catch (error) {}
      }, 100)
    })
  }
}
</script>

<style>
.capitalize {
  text-transform: capitalize;
}

.account {
  background-color: white;
}

.account-info {
  padding: 12px 15px 12px 15px;
}

.account-info label {
  display: flex;
  align-items: center;
}

.account-info input[type='checkbox'] {
  position: relative;
  width: 14px;
  height: 14px;
  background-color: transparent;
  border: 1.4px solid #c2c2c2;
  border-radius: 1.5px;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}

.account-info .filter_name {
  margin-left: 15px;
}

a {
  color: black;
}
</style>
