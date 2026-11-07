import type { RouterOptions } from 'vite-ssg';
import { ref } from 'vue';
import type { RouteLocationNormalizedLoaded } from 'vue-router';

export const navigationHistory = ref<RouteLocationNormalizedLoaded[]>([]);

export function afterEach(to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded) {
    if (to.name !== from.name && from.name) {
        navigationHistory.value.unshift(from);
    }

    navigationHistory.value = navigationHistory.value.slice(0, 10);
}

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
            path: '/blog',
            children: [
                {
                    path: '',
                    name: 'blog',
                    component: () => import('@/views/blog/index.vue'),
                },
                {
                    path: 'links',
                    name: 'blog-links',
                    component: () => import('@/views/blog/posts/links/index.vue'),
                },
                {
                    path: 'miata',
                    name: 'blog-miata',
                    component: () => import('@/views/blog/posts/miata/index.vue'),
                },
                {
                    path: 'good-engineering',
                    name: 'blog-good-engineering',
                    component: () => import('@/views/blog/posts/good-engineering/index.vue'),
                },
            ],
        },
        {
            path: '/fractals',
            name: 'fractals',
            component: () => import('@/views/fractals/index.vue'),
        },
        {
            // Match any route, must be last
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('@/views/not-found.vue'),
        },
    ],
} satisfies RouterOptions;
