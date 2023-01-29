export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Idaslet',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Idaslet is a Danish folk metal band based in Copenhagen' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      { hid: 'og-url', property: 'og:url', content: 'http://idaslet.dk/' },
      { hid: 'og-title', property: 'og:title', content: 'IDASLET' },
      { hid: 'og-description', property: 'og:description', content: 'Idaslet is a Danish folk metal band in Copenhagen.' },
      { hid: 'og-image', property: 'og:image', content: '/og-logo.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/base.css',
    'assets/colors.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
