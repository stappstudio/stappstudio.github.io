export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Stapp Studio | Developing Experiences',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'assets/scss/style.scss',
    'assets/scss/_variables.scss'
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
    [
      '@nuxtjs/fontawesome',
      {
        // component: 'fa',
        suffix: true,
        icons: {
          solid: [
            // Header
            'faLaptopCode',
            // Main Features
            'faPencilRuler',
            'faFileCode',
            'faPaperPlane',
            // Features
            'faBookReader',
            'faMobileAlt',
            'faRedo',
            'faServer',
            'faBuilding',
            'faAmbulance'
          ],
          regular: [
            // 'faPencilRuler',
            'faFileCode',
            'faPaperPlane'
          ],
          // Footer brands
          brands: [
            'faLinkedin',
            'faGithub',
            'faInstagram',
            'faTwitter'
          ]
        }
      }
    ]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            file: 'en.json',
            shortName: 'EN',
            name: 'English'
          },
          {
            code: 'pt-BR',
            iso: 'pt-BR',
            file: 'pt-BR.json',
            shortName: 'PT-BR',
            name: 'Português'
          }
        ],
        langDir: 'locales/',
        defaultLocale: 'en',
        strategy: 'no_prefix',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            en: require('./locales/en'),
            'pt-BR': require('./locales/pt-BR')
          }
        }
      }
    ]
  ],

  bootstrapVue: {
    // Bootstrap CSS is custom imported at scss/_variables.scss
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    // We don't use any bootstrap plugins
    componentPlugins: [],
    directivePlugins: []
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}
