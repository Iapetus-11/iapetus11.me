<script setup lang="ts">
    import { useMousePosition } from '@/utils/events';

    const mouse = useMousePosition('fixed');
</script>

<template>
    <div
        class="from-primary-400/5 pointer-events-none fixed size-[calc(max(70vw,70vh))] bg-radial via-transparent to-transparent max-md:hidden"
        :style="{ top: `calc(${mouse.y}px - 35vw)`, left: `calc(${mouse.x}px - 35vw)` }"
    />
</template>
