import { type RouteRecordRaw } from 'vue-router';

export default [
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
] satisfies RouteRecordRaw[];
