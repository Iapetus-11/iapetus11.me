import '@/assets/fonts/nunito.css';
import '@/assets/main.css';

import { ViteSSG } from 'vite-ssg';
import App from '@/App.vue';

import routerOptions, { afterEach as routerAfterEach } from '@/router';

export const createApp = ViteSSG(
    App,
    routerOptions,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ app, router, routes, initialState }) => {
        router.afterEach(routerAfterEach);
    }
);
