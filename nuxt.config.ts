import { defineNuxtConfig } from 'nuxt/config';
import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    plugins: ['~/plugins/fontawesome'],
    css: ['~/assets/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],

    vite: {
        plugins: [tailwindcss()],
    },

    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL ?? '',
        },
    },

    experimental: {
        inlineRouteRules: true,
    },

    compatibilityDate: '2025-03-18',
    modules: ['@nuxt/icon'],
});
