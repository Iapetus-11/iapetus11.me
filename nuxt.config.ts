import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxt/image'],
    plugins: ['~/plugins/fontawesome'],
    css: ['~/assets/app.css', '@fortawesome/fontawesome-svg-core/styles.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    image: {
        dir: 'assets/images',
    },
});
