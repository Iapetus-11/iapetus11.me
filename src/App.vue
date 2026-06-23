<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import { useHead } from '@unhead/vue';
    import MouseSpotlight from './components/MouseSpotlight.vue';
    import Background from './components/layout/Background.vue';
    import { SITE_URL } from '@/utils/head';

    useHead({ templateParams: { schemaOrg: { host: SITE_URL } } });
</script>

<template>
    <Background />
    <MouseSpotlight />
    <RouterView />
</template>
