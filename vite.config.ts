import { fileURLToPath, URL } from 'node:url';

import { UserConfig } from 'vite';
import { type ViteSSGOptions } from 'vite-ssg';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default {
    plugins: [vue(), tailwindcss()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    ssgOptions: {
        formatting: 'minify',
    },
} satisfies UserConfig & { ssgOptions: ViteSSGOptions };
