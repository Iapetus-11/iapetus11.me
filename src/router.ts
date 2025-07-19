import type { RouterOptions } from 'vite-ssg';

export default {
    scrollBehavior: (to, from) => {
        if (to.name !== from.name && !to.hash) {
            return { top: 0, left: 0, behavior: 'instant' };
        }

        return false;
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/home/index.vue'),
            beforeEnter(to) {
                if (!to.hash) {
                    return { ...to, hash: '#projects' };
                }
            },
        },
        {
            path: '/fractals',
            name: 'fractals',
            component: () => import('@/views/fractals/index.vue'),
        },
    ],
} satisfies RouterOptions;
