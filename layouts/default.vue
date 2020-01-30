<template>
  <div>
    <!-- <Header v-if="$nuxt.$route.name != 'address'"/> -->
    <Header
      v-if="$nuxt.$route.name != 'cart' && $nuxt.$route.name != 'address' && $nuxt.$route.name != 'legal-about' && $nuxt.$route.name != 'legal-buyeragreement' && $nuxt.$route.name != 'legal-privacy' && $nuxt.$route.name != 'legal-returnpolicy' &&$nuxt.$route.name != 'legal-selleragreement' && $nuxt.$route.name != 'legal-disclaimer'"
    />
    <Header2 v-else />
    <nuxt />
    <Footer
      v-if="$nuxt.$route.name != 'legal-about' && $nuxt.$route.name != 'legal-buyeragreement' && $nuxt.$route.name != 'legal-privacy' && $nuxt.$route.name != 'legal-returnpolicy' &&$nuxt.$route.name != 'legal-selleragreement' && $nuxt.$route.name != 'legal-disclaimer'"
    />
  </div>
</template>

<script>
// import TopNav from '@/components/TopNav'
// import NavBar from '@/components/NavBar'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Header2 from '@/components/header2'

export default {
  components: {
    // NavBar,
    Footer,
    Header,
    Header2
  },
  mounted() {
    document.body.classList.add('theme-dark')

    $('.cat_menu_container')
      .mouseover(function() {
        if ($nuxt.$route.path != '/') {
          $('.cat_menu').css({
            visibility: 'visible',
            opacity: '1'
          })
        }
      })
      .mouseout(function() {
        if ($nuxt.$route.path != '/') {
          $('.cat_menu').css({
            visibility: 'hidden',
            opacity: '0'
          })
        }
      })
  }
}
</script>

<style>
@font-face {
  font-family: 'Regular';
  src: url('~static/fonts/regular.woff') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Light';
  src: url('~static/fonts/light.woff') format('truetype');
  font-weight: lighter;
  font-style: normal;
}

/* @font-face {
font-family: 'Medium';
src: url('~static/fonts/um.woff2') format('truetype');
font-weight: lighter;
font-style: normal;
} */

@font-face {
  font-family: 'Bold';
  src: url('~static/fonts/bold.woff') format('truetype');
  font-weight: bold;
  font-style: normal;
}

.no-padd {
  padding: 0;
}

.no-mar {
  margin: 0;
}

th {
  font-family: 'Light';
}

html {
  font-family: 'Regular', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  font-family: 'Regular', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: #f1f3f6;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.nav-link a {
  color: black;
}

/* change border radius for the tab , apply corners on top*/

#exTab3 .nav-pills > li > a {
  border-radius: 4px 4px 0 0;
}

#exTab3 .nav-pills > li.active > a {
  color: black;
}

#exTab3 .tab-content {
  background-color: #fff;
  padding: 5px 15px;
  border-top: 1px solid #c7c7c7;
}

.small-font {
  font-size: 12px;
}

.actions button {
  width: 150px;
}

.bid-actions button {
  width: 130px;
  justify-content: center;
  align-items: center;
}

a:hover {
  text-decoration: none;
  cursor: pointer;
}

p.productPrice {
  margin-bottom: 0;
}

.strikethrough {
  text-decoration: line-through;
}
.discountedPrice {
  background-color: #8bc34a;
  color: white;
  padding: 0 10px;
}
.underline span {
  position: relative;
  width: 100%;
}

.underline {
  border-bottom: 1px solid rgba(148, 148, 148, 0.27);
  padding: 14px 0;
}

.underline span::after {
  content: '';
  border-bottom: 3px solid rgb(75, 73, 228);
  height: 43px;
  width: 100%;
  position: absolute;
  left: 0;
}

@media only screen and (min-width: 768px) and (max-width: 1199px) {
  .container {
    max-width: 930px;
  }
}

.pointer {
  cursor: pointer;
}

p {
  margin-bottom: 0;
}

.owl-next img,
.owl-prev img {
  width: 100%;
  height: 13px;
}

.rotate180 {
  transform: rotate(180deg);
}

/* .products .owl-next {
  top: 30% !important;
}

.products .owl-prev {
  top: 30% !important;
} */

.owl-theme .owl-nav [class*='owl-'] {
  padding: 15px 5px;
  width: 40px;
  height: 80px;
  line-height: 52px;
}

.owl-carousel .owl-next {
  position: absolute;
  right: -5px;
  top: -190px;
  background-color: white !important;
  box-shadow: 0px 7px 8px #0000002b;
  border-radius: 5px 0px 0px 5px !important;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.owl-carousel .owl-prev {
  position: absolute;
  left: -5px;
  top: -190px;
  background-color: white !important;
  box-shadow: 0px 7px 8px #0000002b;
  border-radius: 0px 5px 5px 0px !important;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.relative {
  position: relative;
}

/* .owl-carousel .owl-nav.disabled,
.owl-carousel .owl-dots.disabled {
  display: block !important;
} */

.quoteMark {
  width: 60px;
  position: absolute;
  opacity: 0.1;
  top: 51%;
  left: 0;
  bottom: 0;
}

.quoteMark-down {
  width: 60px;
  position: absolute;
  opacity: 0.1;
  bottom: 0;
  right: 0;
  transform: rotate(180deg);
}

.testimony-profile img {
  height: 120px;
  border-radius: 50%;
  width: 120px;
  -o-object-fit: cover;
  object-fit: cover;
}

.flex {
  display: flex;
}

.testimony-profile {
  margin: auto;
}

.justify-between {
  justify-content: space-between;
}

.justify-center {
  justify-content: center;
}

.align-center {
  align-items: center;
}

.center {
  text-align: center;
}

.pointer {
  cursor: pointer;
}

.container-header {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 1200px) {
  .container-header {
    max-width: 1250px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .container {
    max-width: 90%;
  }
}

@media (min-width: 576px) and (max-width: 1024px) {
  .container {
    max-width: 95%;
  }
}

.VueCarousel-pagination {
  display: none !important;
}
</style>
