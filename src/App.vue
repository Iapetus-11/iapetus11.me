<script setup lang="ts">
    import { RouterView, useRoute } from 'vue-router';
    import { useHead } from '@unhead/vue';
    import { SITE_URL } from '@/utils/head';
    import MouseSpotlight from './components/MouseSpotlight.vue';
    import Background from './components/layout/Background.vue';

    const route = useRoute();

    useHead(() => ({
        link:
            route.name === 'not-found'
                ? []
                : [{ rel: 'canonical', href: new URL(route.path, SITE_URL).href }],
    }));
</script>

<template>
    <Background />
    <MouseSpotlight />
    <RouterView />
</template>
