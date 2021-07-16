export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  // ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Stapp Studio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: 'Developing Experiences' },
      { name: 'theme-color', content: '#020042' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }//,
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'assets/css/main.css',
    'assets/fonts/fonts.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/svg',
    'nuxt-i18n',
    '@nuxt/content'
  ],

  i18n: {
    baseUrl: 'https://stapp.studio',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json',
        shortName: 'EN',
        name: 'English',
        isCatchallLocale: true
      },
      {
        code: 'br',
        iso: 'pt-BR',
        file: 'pt-BR.json',
        shortName: 'PT-BR',
        name: 'Português'
      }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    strategy: 'prefix_except_default',
    vueI18n: {
      fallbackLocale: 'en'
    },
    vueI18nLoader: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // extend (config, { isDev, isClient }) {
    //   config.optimization.minimize = false
    // },
    // html: {
    //   minify: {
    //     minifyJS: false
    //   }
    // },
    postcss: {
      plugins: {
        'postcss-nested': {}
      }
    }
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}
