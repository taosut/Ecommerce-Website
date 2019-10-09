<template>
  <div>
    <div style="background-color:#dcdcdc;color:DodgerBlue;padding:20px;" align="center">
      <h4 class="no-mar" style="font-weight: bold">MY ACCOUNT</h4>
    </div>
    <div class="container mt-5">
      <div class="row">
        <div class="col-sm-12">
          <div class="d-flex w-100 text-secondary justify-content-center">
            <h3>Registration</h3>
          </div>
          <div class="col-sm-12 login-section text-secondary border rounded">
            <div class="form-group text-secondary">
              <label for="email" class="my-text">E-mail *</label>
              <input type="text" class="form-control" id="email" autocomplete="off" name="email" />
              <label for="cnfpwd" class="my-text">Seller Name*</label>
              <input type="text" class="form-control" id="seller_name" autocomplete="off" name="password" />
              <label for="pwd" class="my-text">Password *</label>
              <input type="password" class="form-control" id="pwd" autocomplete="off" name="password" />
              <label for="cnfpwd" class="my-text">Confirm Password *</label>
              <input type="password" class="form-control" id="cnfpwd" autocomplete="off" name="password" />
              <div class="my-text text-secondary">
                Your personal data will be used to support your experience
                throughout this website to manage access to your account and for
                other purposes described in our privacy policy
              </div>
              <button type="button" @click="signup" class="btn btn-primary mt-3">Register</button>
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
    signup: function() {
      var payload = new FormData()

      payload.append('email', document.getElementById('email').value)
      payload.append('password', document.getElementById('pwd').value)
      payload.append('usertype', 1)
      payload.append('seller_name',  document.getElementById('seller_name').value)

      this.$store.dispatch('signup', payload).then(res => {
        console.log(res)
        console.log(res.data)
        this.$router.push('/login')
      })
    }
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