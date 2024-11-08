<script lang="ts">
    export default {
        inheritAttrs: false,
    };
</script>

<script setup lang="ts">
    defineProps<{
        animationDelay?: number;
    }>();

    const PAGES = [
        { href: '/', name: 'Home' },
        { href: '/projects', name: 'Projects' },
        { href: '/referrals', name: 'Referrals' },
    ] as const;
</script>

<template>
    <NuxtLink
        v-for="(page, idx) in PAGES.filter((p) => p.href !== $route.path).slice(0, 2)"
        :key="page.href"
        :href="page.href"
        class="animate-fade-in button max-sm:px-2 max-sm:text-sm"
        :class="$attrs.class"
        :style="`animation-delay: ${idx * 75 + (animationDelay ?? 0)}ms`"
    >
        {{ page.name }}
    </NuxtLink>
</template>
