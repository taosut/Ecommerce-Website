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
                content: process.env.npm_package_description || "wenslink.com: web based shopping india - purchase mobiles, PCs, cameras, books, watches, clothing, shoes and e-gift vouchers. free dispatching and money down accessible. and that's just the beginning, WENSLink will be your most loved of all web based shopping destinations."
            },
            {
                hid: 'keywords',
                name: 'keywords',
                content: "beauty, best multi vendor marketplace platform, best multi vendor marketplace platform, best online shopping sites in india for clothes, buy books online, buy movie dvd's online, buy online, buy mobiles online, computers, ebooks, fashion jewellery, fitness & outdoors, free multi vendor ecommerce software, free multi vendor ecommerce software, free multi vendor marketplace, free multi vendor marketplace, free multi vendor marketplace, home, india shopping online, kindle e-readers, kindle fire hd, kindle, kitchen, laptop, multi vendor ecommerce open source, multi vendor ecommerce open source, multi vendor ecommerce platform india, multi vendor ecommerce platform india, multi vendor ecommerce project, multi vendor ecommerce theme, multi vendor marketplace magento, multi vendor marketplace open source, multi vendor marketplace open source, multi vendor marketplace saas, multi vendor marketplace script, multi vendor marketplace wordpress, multi vendor marketplace wordpress, online shopping apps, online shopping, online shopping india cash on delivery, online shopping india, online shopping sites for clothes, online shopping sites in india, online shopping, open source multi-vendor ecommerce platform, Page navigation, shopify multi vendor marketplace theme, small appliances, sports, top 10 online shopping sites, toys, trimmers, watches, wenslink india, wenslink, wenslink.com, multi vendor, wenslink multi vendor, seller.wenslink.com"
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
            },
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css'
            }
        ],
        script: [{
                src: '/jquery.min.js',
                type: 'text/javascript'
            },
            {
                src: 'https://checkout.razorpay.com/v1/razorpay.js',
                type: 'text/javascript'
            },
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/js/ion.rangeSlider.min.js',
                type: 'text/javascript'
            },
            {
                src: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js',
                type: 'text/javascript'
            },
            { src: '/styles/bootstrap4/popper.js', type: 'text/javascript' },
            { src: '/styles/bootstrap4/bootstrap.min.js', type: 'text/javascript' },
            { src: '/plugins/greensock/TweenMax.min.js', type: 'text/javascript' },
            { src: '/plugins/greensock/TimelineMax.min.js', type: 'text/javascript' },
            { src: '/plugins/scrollmagic/ScrollMagic.min.js', type: 'text/javascript' },
            { src: '/plugins/greensock/animation.gsap.min.js', type: 'text/javascript' },
            { src: '/plugins/greensock/ScrollToPlugin.min.js', type: 'text/javascript' },
            { src: '/plugins/OwlCarousel2-2.2.1/owl.carousel.js', type: 'text/javascript' },
            { src: '/plugins/slick-1.8.0/slick.js', type: 'text/javascript' },
            { src: '/plugins/easing/easing.js', type: 'text/javascript' },
            { src: '/js/custom.js', type: 'text/javascript' },
            { src: '/js/product_custom.js', type: 'text/javascript' },
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
        middleware: ['user_verify']
    },



    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/main',
        '~/plugins/global_components',
        { src: '~/plugins/carousel.js', ssr: false },
        { src: '~/plugins/star.js', ssr: false }
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