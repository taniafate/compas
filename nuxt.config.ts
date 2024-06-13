export default defineNuxtConfig({
  telemetry: false,
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  components: {
    dirs: [
      './shared/components',
    ],
  },
  imports: {
    dirs: [
      './shared/components/**/*',
    ],
    injectAtEnd: true,
  },
  modules: [
    'nuxt-icon',
    ['@nuxtjs/google-fonts', {
      families: {
        'PT Sans': [400, 700],
      }
    }],
  ],
})