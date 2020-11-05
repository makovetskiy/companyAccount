export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'tprogerCompany',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    { src: 'assets/css/buefy-overrides.scss', lang: 'sass' },
    { src: 'assets/css/main.css', lang: 'css' }
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://auth.nuxtjs.org
    '@nuxtjs/auth'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://dev2.tproger.ru/wp-json/api/v1/lc',
      headers: {
        common: {
          "Access-Control-Allow-Headers": "X-Requested-With, content-type",
          'Accept': 'application/json, text/plain, */*',
          'Access-Control-Allow-Origin':'*',     
        }
    },
    credentials: true
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: 'signin', method: 'post', propertyName: 'token' },
          logout: false
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
