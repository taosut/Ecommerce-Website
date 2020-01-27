<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <accountnav></accountnav>
        </div>
        <div class="col-lg-8 col-md-8">
          <div class="account-details" style="background-color: white">
            <h4 class="header">My Orders</h4>
            <div class="row pt-3">
              <div class="col-12" v-for="p in allOrders" :key="p.id">
                <div class="d-flex pb-5">
                  <div class="product_images">
                    <img
                      :src="baseurl + '/backend/api/products/image/50/40/' + p.product_images[0]"
                      alt
                    />
                  </div>
                  <div class="pl-3">
                    <p>{{p.product_name}}</p>
                    <p>{{p.product_price}}</p>
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
import accountnav from '@/components/account_nav'
export default {
  components: {
    accountnav
  },
  data() {
    return {
      allOrders: [],

      baseurl: process.env.baseUrl
    }
  },
  mounted() {
    this.allUserOrders()
  },
  middleware: 'auth',
  methods: {
    allUserOrders: function() {
      this.$store.dispatch('allUserOrders').then(res => {
        this.allOrders = res.data

        for (let key1 in this.allOrders) {
          if (this.allOrders.hasOwnProperty(product_images)) {
            try {
              this.allOrders[key1].filter(
                v => (v.product_images = JSON.parse(v.product_images))
              )
            } catch (error) {}
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.profile {
  padding: 20px 0;
}
.account-details {
  padding: 24px 32px;
}

.header {
  font-size: 18px;
  font-weight: 500;
  padding-right: 24px;
}

h4.faq {
  font-size: 14px;
  margin-bottom: 5px;
  margin-top: 20px;
  padding: 0;
  line-height: 1.5;
  font-weight: 500;
}

/* p {
  line-height: 1.5;
  margin-top: 15px;
} */

.link {
  font-size: 13px;
  color: blue;
  margin-left: 20px;
  cursor: pointer;
}
</style>
