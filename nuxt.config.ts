// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    devtools: {enabled: false},
    modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@nuxt/fonts', '@nuxt/icon'],
    css: ['~/assets/css/main.scss'],
    icon: {
        size: '64px'
    }
})
