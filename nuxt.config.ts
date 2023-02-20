// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],

    runtimeConfig: {
        WEATHER_API_KEY: process.env.WEATHER_API_KEY
    }
})
