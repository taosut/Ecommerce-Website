<template>
  <div>
    <div style="background-color:#dcdcdc;color:DodgerBlue;padding:20px;" align="center">
      <h4 class="no-mar" style="font-weight: bold">MY ACCOUNT</h4>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12">
          <div class="d-flex w-100 text-secondary justify-content-center">
            <h3>Login</h3>
          </div>
          <div class="col-sm-12 login-section border rounded text-secondary">
            <label for="usr" class="my-text">Username or email address *</label>
            <input type="text" class="form-control" id="usr" name="username" />
            <label for="pwd" class="my-text">Password *</label>
            <input type="password" class="form-control" id="pwd" name="password" />
            <div class="d-flex mt-3 align-items-center">
              <button type="button" @click="login" class="btn btn-primary">Login</button>
              <label class="form-check-label my-text ml-5">
                <input type="checkbox" class="form-check-input" value />Remember me
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  mounted() {},
  methods: {
    async login() {
      var payload = new FormData()

      payload.append('phone_number', document.getElementById('usr').value)
      payload.append('password', document.getElementById('pwd').value)

      try {
        let response = await this.$auth.loginWith('local', { data: payload })
        console.log(response)

        this.$auth.setToken('local', 'Bearer ' + response.data.access)
        this.$auth.setRefreshToken('local', response.data.refresh)
        this.$axios.setHeader(
          'Authorization',
          'Bearer ' + response.data.access_token
        )
        this.$auth.ctx.app.$axios.setHeader(
          'Authorization',
          'Bearer ' + response.data.access_token
        )
        // this.$axios.get('/users/me').then((resp) => { this.$auth.setUser(resp.data); this.$router.push('/')
      } catch (err) {
        console.log(err)
      }
    }

    // login: function() {
    //   var payload = new FormData()

    //   payload.append('phone_number', document.getElementById('usr').value)
    //   payload.append('password', document.getElementById('pwd').value)

    //   this.$auth.loginWith('local', { data: this.login })

    // this.$axios.post('/token', {
    //     phone_number: this.phone_number,
    //     password: this.password
    //   }).then((resp) => {
    //     this.$auth.setToken('local', 'Bearer ' + resp.data.access_token)
    //     this.$auth.setRefreshToken('local', resp.data.refresh_token)
    //     this.$axios.setHeader('Authorization', 'Bearer ' + resp.data.access_token)
    //     this.$auth.ctx.app.$axios.setHeader('Authorization', 'Bearer ' + resp.data.access_token)
    //     this.$axios.get('/users/me').then((resp) => { this.$auth.setUser(resp.data); this.$router.push('/') })
    //   })

    // this.$store.dispatch('login', payload).then(res => {
    //   console.log(res)

    //   console.log(res.data.access)

    //   this.$cookies.set('access_token', res.data.access, {
    //     path: '/',
    //     // secure: process.env.cookie,
    //     // httpOnly : true,
    //     // secure: true,
    //     maxAge: 60 * 60 * 24 * 7
    //   })

    //   this.$cookies.set('name', res.data.user_info.name, {
    //     path: '/',
    //     // httpOnly : process.env.cookie,
    //     // secure: process.env.cookie,
    //     maxAge: 60 * 60 * 24 * 7
    //   })

    //   this.$store.commit('isLoggedIn', 1)

    //   this.$router.push('/')
    // })
    // }
  }
}
</script>


<style scoped>
input[type='text'] {
  /* width: 130px; */
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

input[type='text']:focus {
  width: 100%;
}

.my-text {
  font-size: 12px;
}

.flex-container {
  display: flex;
  flex-direction: column;
}

.my-text-custom {
  font-size: 10px;
}

ul {
  /* list-style-image: url("auction/Group 51.svg"); */
}

.bg-custom1 {
  background-color: #e6e6e6;
}

.my-text-custom2 {
  font-size: 18px;
  font-weight: bold;
}

.my-text-custom3 {
  font-size: 15px;
}

.login-section {
  padding: 20px 20px 20px;
}

.padding-10 {
  padding: 10px;
}

.padding-top-10 {
  padding-top: 10px;
}

.padding-bottom-10 {
  padding-bottom: 10px;
}

.padding-right-10 {
  padding-right: 10px;
}

.padding-left-10 {
  padding-left: 10px;
}

.no-mar {
  margin: 0 !important;
}

.no-padd {
  padding: 0 !important;
}

.myHeader p {
  margin: 0;
  font-size: 10px;
  margin-left: 10px;
}

.myborder-right .null {
  margin: 0;
  margin: 0 10px !important;
  font-size: 12px !important;
  font-weight: bold;
}

.myborder-right div {
  border-right: 1px solid #b0b0b0;
}

.ul .mydropdown {
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.underline span {
  position: relative;
  width: 100%;
}

.underline {
  border-bottom: 1px solid rgb(75, 73, 228);
  padding: 14px 0;
}

.underline span::after {
  content: '';
  border-bottom: 3px solid rgb(75, 73, 228);
  height: 39px;
  width: 100%;
  position: absolute;
  left: 0;
}

/* li {
  float: left;
}

li a, .dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover, .dropdown:hover .dropbtn {
  background-color: blue;
}

li.dropdown {
  display: inline-block;
} */

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.login-section {
  max-width: 480px;
  margin: auto;
}
</style>