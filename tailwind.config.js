/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,ts,vue}',
        './layouts/**/*.vue',
        './pages/**/*.{js,ts,vue}',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './app.html',
        './error.vue',
    ],
    theme: {
        extend: {
            colors: {
                cornflower: {
                    normal: '#5DA9E9',
                    light: '#66BAFF',
                },
            },
        },
    },
    plugins: [],
};
