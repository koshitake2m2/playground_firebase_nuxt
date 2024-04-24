// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.scss'],
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    // .env に設定した値を参照できる
  },
  app: {
    head: {
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'playground_firebase_nuxt' },
        {
          property: 'og:description',
          content: 'description of playground_firebase_nuxt',
        },
        { property: 'og:site_name', content: 'playground_firebase_nuxt' },
        // { property: 'og:card', content: 'summary' },
        // { property: 'og:site', content: '@your-tweeter-name' }, // fixme: content
      ],
    },
  },
})
