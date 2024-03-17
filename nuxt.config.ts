export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_colors.scss" as *;'
        }
      }
    }
  },
  modules: [
    '@ant-design-vue/nuxt'
  ],
  antd:{
    // Options
  }
})