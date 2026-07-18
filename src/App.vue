<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import MouseSpotlight from './components/MouseSpotlight.vue';
    import Background from './components/layout/Background.vue';
</script>

<template>
    <Background />
    <MouseSpotlight />
    <RouterView />
</template>
