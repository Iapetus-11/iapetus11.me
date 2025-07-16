<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import MouseSpotlight from './components/MouseSpotlight.vue';
    import Debug from './components/Debug.vue';
</script>

<template>
    <MouseSpotlight />
    <RouterView />

    <Debug />
</template>
