import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f81b30b8 = () => interopDefault(import('..\\pages\\address.vue' /* webpackChunkName: "pages_address" */))
const _7d4201a0 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _520e0b6e = () => interopDefault(import('..\\pages\\homepage.vue' /* webpackChunkName: "pages_homepage" */))
const _8b1c42ce = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _64afda59 = () => interopDefault(import('..\\pages\\newarrival.vue' /* webpackChunkName: "pages_newarrival" */))
const _5eb2d9a6 = () => interopDefault(import('..\\pages\\payments.vue' /* webpackChunkName: "pages_payments" */))
const _f11ff0ba = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _3fb83cd0 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages_signup" */))
const _77820f1d = () => interopDefault(import('..\\pages\\wishlist\\index.vue' /* webpackChunkName: "pages_wishlist_index" */))
const _3da23032 = () => interopDefault(import('..\\pages\\account\\address.vue' /* webpackChunkName: "pages_account_address" */))
const _a8d1df7c = () => interopDefault(import('..\\pages\\account\\orders.vue' /* webpackChunkName: "pages_account_orders" */))
const _3dddf31c = () => interopDefault(import('..\\pages\\account\\profile.vue' /* webpackChunkName: "pages_account_profile" */))
const _25eeb5e2 = () => interopDefault(import('..\\pages\\account\\wishlist.vue' /* webpackChunkName: "pages_account_wishlist" */))
const _0b7907b4 = () => interopDefault(import('..\\pages\\legal\\about.vue' /* webpackChunkName: "pages_legal_about" */))
const _6eb769a0 = () => interopDefault(import('..\\pages\\legal\\buyeragreement.vue' /* webpackChunkName: "pages_legal_buyeragreement" */))
const _2f2ed404 = () => interopDefault(import('..\\pages\\legal\\disclaimer.vue' /* webpackChunkName: "pages_legal_disclaimer" */))
const _6afeca6f = () => interopDefault(import('..\\pages\\legal\\privacy.vue' /* webpackChunkName: "pages_legal_privacy" */))
const _c3705dea = () => interopDefault(import('..\\pages\\legal\\returnpolicy.vue' /* webpackChunkName: "pages_legal_returnpolicy" */))
const _b0e3805c = () => interopDefault(import('..\\pages\\legal\\selleragreement.vue' /* webpackChunkName: "pages_legal_selleragreement" */))
const _65e2a33a = () => interopDefault(import('..\\pages\\offers-list\\_offer_title.vue' /* webpackChunkName: "pages_offers-list__offer_title" */))
const _34bb9a14 = () => interopDefault(import('..\\pages\\products\\_product.vue' /* webpackChunkName: "pages_products__product" */))
const _1a9d98f1 = () => interopDefault(import('..\\pages\\search\\_query.vue' /* webpackChunkName: "pages_search__query" */))
const _1e6b88fc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/address",
    component: _f81b30b8,
    name: "address"
  }, {
    path: "/cart",
    component: _7d4201a0,
    name: "cart"
  }, {
    path: "/homepage",
    component: _520e0b6e,
    name: "homepage"
  }, {
    path: "/login",
    component: _8b1c42ce,
    name: "login"
  }, {
    path: "/newarrival",
    component: _64afda59,
    name: "newarrival"
  }, {
    path: "/payments",
    component: _5eb2d9a6,
    name: "payments"
  }, {
    path: "/register",
    component: _f11ff0ba,
    name: "register"
  }, {
    path: "/signup",
    component: _3fb83cd0,
    name: "signup"
  }, {
    path: "/wishlist",
    component: _77820f1d,
    name: "wishlist"
  }, {
    path: "/account/address",
    component: _3da23032,
    name: "account-address"
  }, {
    path: "/account/orders",
    component: _a8d1df7c,
    name: "account-orders"
  }, {
    path: "/account/profile",
    component: _3dddf31c,
    name: "account-profile"
  }, {
    path: "/account/wishlist",
    component: _25eeb5e2,
    name: "account-wishlist"
  }, {
    path: "/legal/about",
    component: _0b7907b4,
    name: "legal-about"
  }, {
    path: "/legal/buyeragreement",
    component: _6eb769a0,
    name: "legal-buyeragreement"
  }, {
    path: "/legal/disclaimer",
    component: _2f2ed404,
    name: "legal-disclaimer"
  }, {
    path: "/legal/privacy",
    component: _6afeca6f,
    name: "legal-privacy"
  }, {
    path: "/legal/returnpolicy",
    component: _c3705dea,
    name: "legal-returnpolicy"
  }, {
    path: "/legal/selleragreement",
    component: _b0e3805c,
    name: "legal-selleragreement"
  }, {
    path: "/offers-list/:offer_title?",
    component: _65e2a33a,
    name: "offers-list-offer_title"
  }, {
    path: "/products/:product?",
    component: _34bb9a14,
    name: "products-product"
  }, {
    path: "/search/:query?",
    component: _1a9d98f1,
    name: "search-query"
  }, {
    path: "/",
    component: _1e6b88fc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
