import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f2ca26ca = () => interopDefault(import('..\\pages\\address.vue' /* webpackChunkName: "pages_address" */))
const _2ee50fee = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _b713b552 = () => interopDefault(import('..\\pages\\homepage.vue' /* webpackChunkName: "pages_homepage" */))
const _8ed59560 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _850dc3fc = () => interopDefault(import('..\\pages\\newarrival.vue' /* webpackChunkName: "pages_newarrival" */))
const _230ead16 = () => interopDefault(import('..\\pages\\payments.vue' /* webpackChunkName: "pages_payments" */))
const _4c4fbce8 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _b3293c7e = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages_signup" */))
const _ad24a5d8 = () => interopDefault(import('..\\pages\\wishlist\\index.vue' /* webpackChunkName: "pages_wishlist_index" */))
const _2691ee60 = () => interopDefault(import('..\\pages\\account\\address.vue' /* webpackChunkName: "pages_account_address" */))
const _44faa38e = () => interopDefault(import('..\\pages\\account\\orders.vue' /* webpackChunkName: "pages_account_orders" */))
const _49661405 = () => interopDefault(import('..\\pages\\account\\profile.vue' /* webpackChunkName: "pages_account_profile" */))
const _e92a9bce = () => interopDefault(import('..\\pages\\account\\wishlist.vue' /* webpackChunkName: "pages_account_wishlist" */))
const _5700051d = () => interopDefault(import('..\\pages\\legal\\about.vue' /* webpackChunkName: "pages_legal_about" */))
const _fe471b52 = () => interopDefault(import('..\\pages\\legal\\buyeragreement.vue' /* webpackChunkName: "pages_legal_buyeragreement" */))
const _d6aa5f8a = () => interopDefault(import('..\\pages\\legal\\disclaimer.vue' /* webpackChunkName: "pages_legal_disclaimer" */))
const _1e87dcd0 = () => interopDefault(import('..\\pages\\legal\\privacy.vue' /* webpackChunkName: "pages_legal_privacy" */))
const _d694c8fc = () => interopDefault(import('..\\pages\\legal\\returnpolicy.vue' /* webpackChunkName: "pages_legal_returnpolicy" */))
const _4beb640a = () => interopDefault(import('..\\pages\\legal\\selleragreement.vue' /* webpackChunkName: "pages_legal_selleragreement" */))
const _58567871 = () => interopDefault(import('..\\pages\\offers-list\\_offer_title.vue' /* webpackChunkName: "pages_offers-list__offer_title" */))
const _7ebf24bd = () => interopDefault(import('..\\pages\\products\\_product.vue' /* webpackChunkName: "pages_products__product" */))
const _bf4a3fcc = () => interopDefault(import('..\\pages\\search\\_query.vue' /* webpackChunkName: "pages_search__query" */))
const _2224db8e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/address",
    component: _f2ca26ca,
    name: "address"
  }, {
    path: "/cart",
    component: _2ee50fee,
    name: "cart"
  }, {
    path: "/homepage",
    component: _b713b552,
    name: "homepage"
  }, {
    path: "/login",
    component: _8ed59560,
    name: "login"
  }, {
    path: "/newarrival",
    component: _850dc3fc,
    name: "newarrival"
  }, {
    path: "/payments",
    component: _230ead16,
    name: "payments"
  }, {
    path: "/register",
    component: _4c4fbce8,
    name: "register"
  }, {
    path: "/signup",
    component: _b3293c7e,
    name: "signup"
  }, {
    path: "/wishlist",
    component: _ad24a5d8,
    name: "wishlist"
  }, {
    path: "/account/address",
    component: _2691ee60,
    name: "account-address"
  }, {
    path: "/account/orders",
    component: _44faa38e,
    name: "account-orders"
  }, {
    path: "/account/profile",
    component: _49661405,
    name: "account-profile"
  }, {
    path: "/account/wishlist",
    component: _e92a9bce,
    name: "account-wishlist"
  }, {
    path: "/legal/about",
    component: _5700051d,
    name: "legal-about"
  }, {
    path: "/legal/buyeragreement",
    component: _fe471b52,
    name: "legal-buyeragreement"
  }, {
    path: "/legal/disclaimer",
    component: _d6aa5f8a,
    name: "legal-disclaimer"
  }, {
    path: "/legal/privacy",
    component: _1e87dcd0,
    name: "legal-privacy"
  }, {
    path: "/legal/returnpolicy",
    component: _d694c8fc,
    name: "legal-returnpolicy"
  }, {
    path: "/legal/selleragreement",
    component: _4beb640a,
    name: "legal-selleragreement"
  }, {
    path: "/offers-list/:offer_title?",
    component: _58567871,
    name: "offers-list-offer_title"
  }, {
    path: "/products/:product?",
    component: _7ebf24bd,
    name: "products-product"
  }, {
    path: "/search/:query?",
    component: _bf4a3fcc,
    name: "search-query"
  }, {
    path: "/",
    component: _2224db8e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
