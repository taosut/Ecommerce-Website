<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <accountnav></accountnav>
        </div>
        <div class="col-lg-8 col-md-8">
          <div class="account-details" style="background-color: white">
            <h4 class="header">
              Manage Addresses
            </h4>
            <div class="addAddress">
              <p class="link">+ Add New Address</p>
            </div>

            <div>
              <div class="address-section">
                <div>
                  <div class="row">
                    <div class="col-xs-6">
                      <div class="col-12">
                        <p>Add New Address</p>
                        <div class="form-group">
                          <label for="fullname">Full Name</label>
                          <input
                            type="text"
                            v-model="payload.fullname"
                            class="form-control"
                            id="fullname"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="phonenumber">Mobile Number</label>
                          <input
                            type="text"
                            v-model="payload.mobilenumber"
                            class="form-control"
                            id="phonenumber"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="pincode">Pincode</label>
                          <input
                            type="text"
                            v-model="payload.pincode"
                            class="form-control"
                            id="pincode"
                          />
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group">
                          <label for="address"
                            >Flat, House no., Building, Company,
                            Apartment:</label
                          >
                          <input
                            type="text"
                            v-model="payload.building"
                            class="form-control"
                            id="address"
                          />
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group">
                          <label for="area"
                            >Area, Colony, Street, Sector, Village:</label
                          >
                          <input
                            type="text"
                            v-model="payload.street"
                            class="form-control"
                            id="area"
                          />
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group">
                          <label for="city">Town/City:</label>
                          <input
                            type="text"
                            v-model="payload.city"
                            class="form-control"
                            id="city"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-group">
                          <label for="landmark"
                            >Landmark e.g. near apollo hospital:</label
                          >
                          <input
                            type="text"
                            v-model="payload.landmark"
                            class="form-control"
                            id="landmark"
                          />
                        </div>
                      </div>

                      <div class="col-12">
                        <div class="form-group">
                          <label for="state">State:</label>
                          <input
                            type="text"
                            v-model="payload.state"
                            class="form-control"
                            id="state"
                          />
                        </div>
                      </div>

                      <div class="col-12">
                        <button
                          @click="addNewAddress"
                          type="button"
                          class="btn btn-order"
                        >
                          Add Address
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-for="p in address" :key="p.id" class="addAddress">
              <h5>{{ p.fullname }} {{ p.mobilenumber }}</h5>
              <p>{{ p.street }}</p>
              <p>{{ p.pincode }}</p>
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
  data() {
    return {
      address: [],
      payload: []
    }
  },
  components: {
    accountnav
  },
  mounted() {
    this.getUserAddress()
  },
  middleware: 'cart_auth',
  methods: {
    getUserAddress: function() {
      this.$store.dispatch('getAllUserAddress').then(res => {
        this.address = res.data
      })
    },
    addNewAddress: function() {
      var payload = new FormData()

      console.log(this.payload.fullname)

      payload.append('fullname', this.payload.fullname)
      payload.append('pincode', this.payload.pincode)
      payload.append('mobilenumber', this.payload.mobilenumber)
      payload.append('building', this.payload.building)
      payload.append('street', this.payload.street)
      payload.append('city', this.payload.city)
      payload.append('landmark', this.payload.landmark)
      payload.append('state', this.payload.state)

      this.$store.dispatch('addNewAddress', payload).then(res => {
        this.address = res.data
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

.link {
  font-size: 13px;
  color: blue;
  cursor: pointer;
}

.addAddress {
  border: 1px solid #cdcdcd;
  padding: 10px 20px;
  margin: 20px 0;
}
</style>
