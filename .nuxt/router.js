import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a229784 = () => interopDefault(import('..\\pages\\address.vue' /* webpackChunkName: "pages_address" */))
const _2f22ddc0 = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _31e3d78e = () => interopDefault(import('..\\pages\\homepage.vue' /* webpackChunkName: "pages_homepage" */))
const _44ac8679 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _b379c30e = () => interopDefault(import('..\\pages\\newarrival.vue' /* webpackChunkName: "pages_newarrival" */))
const _9f074166 = () => interopDefault(import('..\\pages\\payments.vue' /* webpackChunkName: "pages_payments" */))
const _6745d3c3 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _c5839490 = () => interopDefault(import('..\\pages\\signup.vue' /* webpackChunkName: "pages_signup" */))
const _79f45efd = () => interopDefault(import('..\\pages\\wishlist\\index.vue' /* webpackChunkName: "pages_wishlist_index" */))
const _2d069407 = () => interopDefault(import('..\\pages\\account\\address.vue' /* webpackChunkName: "pages_account_address" */))
const _a3ed3fbc = () => interopDefault(import('..\\pages\\account\\orders.vue' /* webpackChunkName: "pages_account_orders" */))
const _ec94c188 = () => interopDefault(import('..\\pages\\account\\profile.vue' /* webpackChunkName: "pages_account_profile" */))
const _550c8dc2 = () => interopDefault(import('..\\pages\\account\\wishlist.vue' /* webpackChunkName: "pages_account_wishlist" */))
const _354bc3d4 = () => interopDefault(import('..\\pages\\legal\\about.vue' /* webpackChunkName: "pages_legal_about" */))
const _ad335d00 = () => interopDefault(import('..\\pages\\legal\\buyeragreement.vue' /* webpackChunkName: "pages_legal_buyeragreement" */))
const _5e4cabe4 = () => interopDefault(import('..\\pages\\legal\\disclaimer.vue' /* webpackChunkName: "pages_legal_disclaimer" */))
const _6b12fe8f = () => interopDefault(import('..\\pages\\legal\\privacy.vue' /* webpackChunkName: "pages_legal_privacy" */))
const _7d4f30eb = () => interopDefault(import('..\\pages\\legal\\returnpolicy.vue' /* webpackChunkName: "pages_legal_returnpolicy" */))
const _7a87581c = () => interopDefault(import('..\\pages\\legal\\selleragreement.vue' /* webpackChunkName: "pages_legal_selleragreement" */))
const _5d1a9b1a = () => interopDefault(import('..\\pages\\offers-list\\_offer_title.vue' /* webpackChunkName: "pages_offers-list__offer_title" */))
const _2d4e8398 = () => interopDefault(import('..\\pages\\products\\_product.vue' /* webpackChunkName: "pages_products__product" */))
const _1ab1cd11 = () => interopDefault(import('..\\pages\\search\\_query.vue' /* webpackChunkName: "pages_search__query" */))
const _7b04e362 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/address",
    component: _6a229784,
    name: "address"
  }, {
    path: "/cart",
    component: _2f22ddc0,
    name: "cart"
  }, {
    path: "/homepage",
    component: _31e3d78e,
    name: "homepage"
  }, {
    path: "/login",
    component: _44ac8679,
    name: "login"
  }, {
    path: "/newarrival",
    component: _b379c30e,
    name: "newarrival"
  }, {
    path: "/payments",
    component: _9f074166,
    name: "payments"
  }, {
    path: "/register",
    component: _6745d3c3,
    name: "register"
  }, {
    path: "/signup",
    component: _c5839490,
    name: "signup"
  }, {
    path: "/wishlist",
    component: _79f45efd,
    name: "wishlist"
  }, {
    path: "/account/address",
    component: _2d069407,
    name: "account-address"
  }, {
    path: "/account/orders",
    component: _a3ed3fbc,
    name: "account-orders"
  }, {
    path: "/account/profile",
    component: _ec94c188,
    name: "account-profile"
  }, {
    path: "/account/wishlist",
    component: _550c8dc2,
    name: "account-wishlist"
  }, {
    path: "/legal/about",
    component: _354bc3d4,
    name: "legal-about"
  }, {
    path: "/legal/buyeragreement",
    component: _ad335d00,
    name: "legal-buyeragreement"
  }, {
    path: "/legal/disclaimer",
    component: _5e4cabe4,
    name: "legal-disclaimer"
  }, {
    path: "/legal/privacy",
    component: _6b12fe8f,
    name: "legal-privacy"
  }, {
    path: "/legal/returnpolicy",
    component: _7d4f30eb,
    name: "legal-returnpolicy"
  }, {
    path: "/legal/selleragreement",
    component: _7a87581c,
    name: "legal-selleragreement"
  }, {
    path: "/offers-list/:offer_title?",
    component: _5d1a9b1a,
    name: "offers-list-offer_title"
  }, {
    path: "/products/:product?",
    component: _2d4e8398,
    name: "products-product"
  }, {
    path: "/search/:query?",
    component: _1ab1cd11,
    name: "search-query"
  }, {
    path: "/",
    component: _7b04e362,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
