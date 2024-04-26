export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
  ssr: false,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_colors.scss" as *;',
        },
      },
    },
  },
  modules: ['@ant-design-vue/nuxt', '@pinia/nuxt', 'dayjs-nuxt'],
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**',
    ],
  },
  pinia: { storesDirs: ['./stores/**'] },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_URL,
      mockEnable: process.env.MOCK_ENABLE,
    },
  },
})
