import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    plugins: ['~/plugins/fontawesome'],
    css: ['~/assets/app.css', '@fortawesome/fontawesome-svg-core/styles.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    runtimeConfig: {
        public: {
            // @ts-ignore
            API_BASE_URL: process.env.API_BASE_URL ?? '',
        },
    },

    experimental: {
        inlineRouteRules: true,
    },

    compatibilityDate: '2025-03-18',
});
