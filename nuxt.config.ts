// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  routeRules: {
    '/product/[slug]': { ssr: true }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    },
  },

  css: ['~/assets/style.scss'],
  modules: ["@nuxt/image"]
})