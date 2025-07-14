<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import MouseSpotlight from './components/MouseSpotlight.vue';
</script>

<template>
    <div id="bruh" class="w-[100vw] absolute left-0 h-[3px] bg-red-500"></div>
    <MouseSpotlight />
    <RouterView />
</template>
