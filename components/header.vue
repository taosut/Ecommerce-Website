<template>
  <!-- Header -->

  <header class="header">
    <!-- Top Bar -->

    <div class="top_bar">
      <div class="container">
        <div class="row">
          <div class="col d-flex flex-row">
            <div class="top_bar_contact_item">
              <div class="top_bar_icon">
                <img src="~static/images/phone.png" alt="" />
              </div>
              <a href="tel:1800 121 3578">1800 121 3578</a>
            </div>
            <div class="top_bar_contact_item">
              <div class="top_bar_icon">
                <img src="~static/images/mail.png" alt="" />
              </div>
              <a href="mailto:ecom@gmail.com">info@wenslink.com</a>
            </div>
            <div class="ml-auto d-flex">
              <div class="top_bar_menu">
                <ul class="standard_dropdown top_bar_dropdown">
                  <!-- <li>
										<a href="#">English<i class="fas fa-chevron-down"></i></a>
										<ul>
											<li><a href="#">Italian</a></li>
											<li><a href="#">Spanish</a></li>
											<li><a href="#">Japanese</a></li>
										</ul>
									</li> -->
                  <li>
                    <a href="#">₹ Rupee<i class="fas fa-chevron-down"></i></a>
                    <!-- <ul>
											<li><a href="#">EUR Euro</a></li>
											<li><a href="#">GBP British Pound</a></li>
											<li><a href="#">JPY Japanese Yen</a></li>
										</ul> -->
                  </li>
                </ul>
              </div>

              <div class="top_bar_menu">
                <ul class="standard_dropdown top_bar_dropdown">
                  <li>
                    <a v-if="name" href="#"
                      >{{ name }}<i class="fas fa-chevron-down"></i
                    ></a>
                    <ul>
                      <li><a href="#">Your Account</a></li>
                      <li><a href="#">Your Orders</a></li>
                      <li><a href="#" @click="logout">Logout</a></li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div class="top_bar_user">
                <div v-if="!name">
                  <div class="user_icon">
                    <img src="~static/images/user.svg" alt="" />
                  </div>
                  <div><a href="#">Register</a></div>
                  <div><nuxt-link to="/login">Sign In</nuxt-link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Header Main -->

    <div class="header_main">
      <div class="container">
        <div class="row">
          <!-- Logo -->
          <div class="col-lg-2 col-sm-3 col-3">
            <div class="logo_container">
              <div class="logo"><nuxt-link style="    display: flex;
    align-items: center;" to="/"><img src="/icons/logo.png" style="  width: 40px;
    height: 100%;
    object-fit: contain;"><p style="color:white; font-size:18px;padding-left: 10px">WENSLink Ecommerce</p></nuxt-link></div>
            </div>
          </div>

          <!-- Search -->
          <div
            class="col-lg-5 col-6 text-lg-left text-right"
          >
            <div class="header_search">
              <div class="header_search_content">
                <div class="header_search_form_container">
                  <form action="#" class="header_search_form clearfix">
                    <input
                      type="search"
                      required="required"
                      class="header_search_input"
                      placeholder="Search for products..."
                    />

                    <button
                      type="submit"
                      class="header_search_button trans_300"
                      value="Submit"
                    >
                      <img src="~static/images/search.png" alt="" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <!-- Wishlist -->
          <div
            class="col-lg-5 col-3 text-lg-left text-right"
          >
            <div
              class="wishlist_cart d-flex flex-row align-items-center justify-content-end"
            >
              <div
                class="wishlist d-flex flex-row align-items-center justify-content-end"
              >
                <div class="wishlist_icon">
                  <img src="~static/images/heart.png" alt="" />
                </div>
                <div class="wishlist_content">
                  <div class="wishlist_text"><a href="#">Wishlist</a></div>
                </div>
              </div>

              <!-- Cart -->
              <div class="cart">
                <div
                  class="cart_container d-flex flex-row align-items-center justify-content-end"
                >
                  <div class="cart_icon">
                    <img src="~static/images/cart.png" alt="" />
                    <div class="cart_count">
                      <span>{{ cart }}</span>
                    </div>
                  </div>
                  <div class="cart_content">
                    <div class="cart_text"><nuxt-link to="/cart">Cart</nuxt-link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->

    <nav class="main_nav">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="main_nav_content d-flex flex-row">
              <!-- Categories Menu -->

              <div class=""></div>

              <!-- Main Nav Menu -->

              <div class="main_nav_menu m-auto">
                <ul class="standard_dropdown main_nav_dropdown">
                  <li v-for="p in category" :key="p.id">
                    <a href="shop.html"
                      >{{ p.name }}<i class="fas fa-chevron-down"></i
                    ></a>
                  </li>
                </ul>
              </div>

              <!-- Menu Trigger -->

              <div class="menu_trigger_container ml-auto">
                <div
                  class="menu_trigger d-flex flex-row align-items-center justify-content-end"
                >
                  <div class="menu_burger">
                    <div class="menu_trigger_text">menu</div>
                    <div class="cat_burger menu_burger_inner">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      category: []
    }
  },

  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    },
    cart() {
      return this.$store.state.cart
    },
    name() {
      console.log(this.$cookies.get('name'))
      if (this.$cookies.get('name') != undefined) {
        console.log('cookie')
        this.$store.commit('isLoggedIn', 1)
        this.$store.commit('name', this.$cookies.get('name'))
      } else {
        console.log('cookieNot')
        this.$store.commit('isLoggedIn', 0)
      }

      return this.$store.state.name
    }
  },

  mounted() {
    if (this.$cookies.get('name') != undefined) {
      this.$store.dispatch('getCartByUser')
    }

    this.$store.dispatch('getCategory').then(res => {
      this.category = Object.assign({}, res.data)
    })

    console.log("this.$cookies.get('name')")
    console.log(this.$cookies.get('name'))
    if (this.$cookies.get('name') != undefined) {
      console.log('cookie')
      this.$store.commit('isLoggedIn', 1)
      this.$store.commit('name', this.$cookies.get('name'))
    } else {
      console.log('cookieNot')
      this.$store.commit('name', 0)
      this.$store.commit('isLoggedIn', 0)
    }
  },
  methods: {
    goToLogin: function() {
      this.$router.push('/login')
    },
    logout: function() {
      this.$cookies.removeAll()
      this.$store.commit('name', 0)
      this.$store.commit('isLoggedIn', 0)
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

/* ul {
        list-style-image: url("auction/Group 51.svg");
      } */

/* .bg-custom1 {
        background-color: #e6e6e6;
      } */

.my-text-custom2 {
  font-size: 14px;
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
.my-header-2 {
  box-shadow: 0px 6px 5px 0px #a9a9a9d6;
}
.flex-container1 {
  display: flex;
}
.box-style {
  height: 300px;
  width: 300px;
}
.box-style-fixed {
  height: 126px;
}

.owl-carousel {
  position: relative;
}
.owl-prev {
  position: absolute;
  font-size: 20px;
  top: 25%;
  left: -10px;
}
.owl-next {
  position: absolute;
  top: 25%;
  right: -10px;
}

.owl-nav p {
  margin-bottom: 0;
  font-size: 20px;
}

.no-select,
.owl-prev,
.owl-next,
.owl-nav {
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}

button {
  outline: none !important;
  font-size: 20px;
}
.ellipse {
  width: 45px;
  height: 45px;
  background-color: #f65656;
  border-radius: 50%;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.ellipse span {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #f65656;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -5px;
  right: 0;
  font-size: 10px;
  font-weight: bold;
  line-height: 2px;
}
.ellipse2 {
  width: 45px;
  height: 45px;
  background-color: #00a9e0;
  border-radius: 50%;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.ellipse2 span {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border: 1px solid #00a9e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -5px;
  right: 0;
  font-size: 10px;
  font-weight: bold;
  line-height: 2px;
}
.topbids-actions button {
  height: 35px;
  justify-content: center;
  align-items: center;
}
.small-font {
  font-size: 12px;
}
.w3-navbar a:hover {
  color: rgb(3, 155, 229) !important;
}
.w3-navbar a {
  border: 1px solid transparent;
  padding: 0 10px;
}
.navbar-border {
  border-top: 1px solid rgba(158, 158, 158, 0.24);
  border-bottom: 1px solid rgba(158, 158, 158, 0.24);
}
li {
  list-style-type: none;
}

.dropdown-ul {
  border-radius: 0 0 3px 3px;
  height: 150px;
  min-height: 320px;
  /* box-shadow: 0 7px 17px 0 rgba(23,84,116,0.18) */
}

.dropdown-ul li {
  padding: 10px 20px;
  font-size: 14px;
  cursor: default;
}

.dropdown-ul li .category-head {
  font-size: 12px;
}

.dropdown-ul li .subcategory {
  position: absolute;
  left: 150px;
  top: 0;
  height: 100%;
  background-color: white;
  width: 450px;
  z-index: 9;
  font-size: 11px;
  padding: 10px;
  /* box-shadow: 0 7px 17px 0 rgba(23,84,116,0.18) */
}

.dropdown-ul li .subcategory p {
  margin-bottom: 4px;
  color: #666;
}

.dropdown-ul li .subcategory a {
  color: #666;
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

.hide {
  display: none;
}

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

.category-li {
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 2px solid transparent;
}

.category-li:hover {
  border-left: 2px solid red;
  background-color: #f5f5f5;
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.category-header {
  font-family: MaisonNeueBook;
  color: #333;
  text-transform: uppercase;
}

.subcategory .subsection:not(:last-child) {
  border-right: 1px solid #e4e4e4;
}

.subsection > div:not(:first-child) {
  padding-top: 15px;
  border-top: 1px solid #f7f7f7;
}

.subsection a:last-child p {
  padding-bottom: 10px;
}
.jssorl-009-spin img {
  animation-name: jssorl-009-spin;
  animation-duration: 1.6s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes jssorl-009-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
