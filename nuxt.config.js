const pkg = require('./package')
import webpack from 'webpack'

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: "Sotetsu Price",
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description},
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },

      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#da532c' },

      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#5388EA' },
  loadingIndicator: {
    name: "./public/loading.html"
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/el-theme.styl',
    'vue-tel-input/dist/vue-tel-input.css',
    'vuetify-daterange-picker/dist/vuetify-daterange-picker.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fireauth.js',
    '~/plugins/fetch-hotel-list.js',
    '~/plugins/vuetify.js',
    '~/plugins/Vuelidate.js',
    '~/plugins/vue-tel-input.js',
    '~/plugins/vue-scrollto.js',
    '~/plugins/vuetify-daterange-picker.js',
    '~plugins/ga.js',
    '~/plugins/amcharts4.js',
    '~/plugins/i18n.js',
    '~/plugins/gg-charts.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: [
      'vue-i18n'
    ],
    extractCSS: true,
    cssSourceMap: false,
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      })
    ],
    extend(config, {isDev, isClient}) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   });
      // }

      // Fix fs dependency
      config.node = {
        fs: 'empty'
      }
    }
  },
  router: {              // customize nuxt.js router (vue-router).
    middleware: 'i18n'   // middleware all pages of the application
  },
  axios: {
    baseURL: process.env.BASE_URL || 'https://figaro.el-soul.com',
    credentials: false
  },
  env: {
    baseURL: process.env.BASE_URL || 'https://figaro.el-soul.com'
  }
}
