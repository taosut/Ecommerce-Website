export default {
  mode: 'universal',

  server: {
    port: 5000, // default: 3000
    host: 'localhost', // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css'
      },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
      }
    ],
    script: [
      {
        src: '/jquery.min.js',
        type: 'text/javascript'
      },
      {
        src: 'https://checkout.razorpay.com/v1/razorpay.js',
        type: 'text/javascript'
      },
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
        type: 'text/javascript'
      },
      { src: '/styles/bootstrap4/popper.js',  type: 'text/javascript' },
      { src: '/styles/bootstrap4/bootstrap.min.js',  type: 'text/javascript' },
      { src: '/plugins/greensock/TweenMax.min.js',  type: 'text/javascript' },
      { src: '/plugins/greensock/TimelineMax.min.js',  type: 'text/javascript' },
      { src: '/plugins/scrollmagic/ScrollMagic.min.js',  type: 'text/javascript' },
      { src: '/plugins/greensock/animation.gsap.min.js',  type: 'text/javascript' },
      { src: '/plugins/greensock/ScrollToPlugin.min.js',  type: 'text/javascript' },
      { src: '/plugins/OwlCarousel2-2.2.1/owl.carousel.js',  type: 'text/javascript' },
      { src: '/plugins/slick-1.8.0/slick.js',  type: 'text/javascript' },
      { src: '/plugins/easing/easing.js',  type: 'text/javascript' },
      { src: '/js/custom.js',  type: 'text/javascript' },
      { src: '/js/product_custom.js',  type: 'text/javascript' },
    ]
  },


  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    "~/static/framework/styles.css",
    "~/static/styles/framework.css",
    "~/static/styles/bootstrap4/bootstrap.min.css",
    "~/static/plugins/fontawesome-free-5.0.1/css/fontawesome-all.css",
    "~/static/plugins/OwlCarousel2-2.2.1/owl.carousel.css",
    "~/static/plugins/OwlCarousel2-2.2.1/owl.theme.default.css",
    "~/static/plugins/OwlCarousel2-2.2.1/animate.css",
    "~/static/plugins/slick-1.8.0/slick.css",
    "~/static/styles/main_styles.css",
    "~/static/styles/product_styles.css",
    "~/static/styles/responsive.css",
    "~/static/styles/product_responsive.css",
  ],


  
  router: {
    // base: '/ecommerce/'
  },



  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/main',
    '~/plugins/global_components',
    {src: '~/plugins/carousel.js', ssr: false}
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],

  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:3003',
    baseUrl: (process.env.NODE_ENV == "development") ? "http://127.0.0.1:8000" : 'https://www.wenslink.com',
    cookie: (process.env.NODE_ENV == "development") ? false : true,
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
