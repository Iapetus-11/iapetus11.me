<script setup lang="ts">
    import { useMousePosition } from '@/utils/events';

    const mouse = useMousePosition('fixed');
</script>

<template>
    <div
        class="from-primary-400/5 pointer-events-none fixed size-[60vw] bg-radial via-transparent to-transparent"
        :style="{ top: `calc(${mouse.y}px - 30vw)`, left: `calc(${mouse.x}px - 30vw)` }"
    />
</template>
