// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from 'nuxt/kit'
const { resolve } = createResolver(import.meta.url)
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  css: ['~/assets/main.css'],
  runtimeConfig: {
    dbDir: resolve('./server/database')
  },
  modules: [
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
})
