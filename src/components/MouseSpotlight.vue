<script setup lang="ts">
    import { useMousePosition } from '@/utils/events';

    const mouse = useMousePosition('fixed');
</script>

<template>
    <div
        class="pointer-events-none fixed size-full max-md:hidden"
        :style="{
            backgroundImage: `radial-gradient(calc(max(50vw,50vh)) at ${mouse.x}px ${mouse.y}px, color-mix(in oklab, var(--color-primary-400) 5%, transparent) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)`,
        }"
    />
</template>
