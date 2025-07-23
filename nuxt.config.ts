import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  runtimeConfig: {
    twilioAccount: process.env.NUXT_TWILIO_ACCOUNT || 'MISSING_ACCOUNT',
    twilioToken: process.env.NUXT_TWILIO_TOKEN || 'MISSING_TOKEN',
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})
