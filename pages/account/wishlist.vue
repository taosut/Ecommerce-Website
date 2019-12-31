<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <accountnav></accountnav>
        </div>
        <div class="col-lg-8 col-md-8">
          <div style="background-color: white">
            <p>Profile dssssfdfd</p>
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
  middleware: 'auth'
}
</script>

<style scoped>
.profile {
  padding: 20px 0;
}
</style>
