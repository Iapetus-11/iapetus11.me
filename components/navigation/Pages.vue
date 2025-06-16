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
        v-for="page in PAGES.filter((p) => p.href !== $route.path)"
        :key="page.href"
        :href="page.href"
        class="button max-sm:px-2 max-sm:text-sm bg-glow glow-aqua !bg-transparent"
        :class="$attrs.class"
    >
        {{ page.name }}
    </NuxtLink>
</template>
