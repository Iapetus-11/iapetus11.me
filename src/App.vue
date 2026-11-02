<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import MouseSpotlight from './components/MouseSpotlight.vue';
    import Background from './components/layout/Background.vue';
    import { navigationCount } from './router';
</script>

<template>
    <code class="fixed top-5 left-5 block">
        {{ navigationCount }}
    </code>
    <Background />
    <MouseSpotlight />
    <RouterView />
</template>
