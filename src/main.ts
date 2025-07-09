import '@/assets/fonts/nunito.css';
import '@/assets/main.css';

import { ViteSSG } from 'vite-ssg';
import App from '@/App.vue';

import routes from '@/routes';

export const createApp = ViteSSG(
    App,
    { routes },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ app, router, routes, initialState }) => {
        // install plugins etc.
    }
);
