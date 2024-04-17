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
  modules: ['@ant-design-vue/nuxt', '@pinia/nuxt'],
  pinia: { storesDirs: ['./stores/**'] },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_URL,
    },
  },
})
