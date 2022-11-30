// https://nuxt.com/docs/api/configuration/nuxt-config

const getDefine = () => {
  if (process.argv.includes('generate')) return {}
  return {
    global: {},
  }
}

export default defineNuxtConfig({
  ssr: false,
  typescript: {
    strict: true,
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: getDefine(),
    resolve: {
      alias: {
        './runtimeConfig': './runtimeConfig.browser',
      },
    },
  },
  modules: [
    // ...
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
})
