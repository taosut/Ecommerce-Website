<template>
      <div class="account">
          <div>
              <nuxt-link to="/account/profile">
                  <div class="account-info">Profile Information</div>
              </nuxt-link>
          </div>
          <div>
              <nuxt-link to="/account/address">
                  <div class="account-info">Manage Addresses</div>
              </nuxt-link>
          </div>
          <div>
              <nuxt-link to="/account/orders">
                  <div class="account-info">My Orders</div>
              </nuxt-link>
          </div>
          <div>
              <nuxt-link to="/account/wishlist">
                  <div class="account-info">My Wishlist</div>
              </nuxt-link>
          </div>
          <div>
              <nuxt-link to="/logout">
                  <div class="account-info">Logout</div>
              </nuxt-link>
          </div>
      </div>
</template>

<style scoped>

.account{
    background-color: white;
}


.account-info{
    padding:12px 15px 12px 15px
}

a{
    color: black
}

.nuxt-link-exact-active .account-info, .nuxt-link-active .account-info{
    background-color: white;
    color: white
}

</style>
