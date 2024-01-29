<script lang="ts">
    export default {
        inheritAttrs: false,
    };
</script>

<script setup lang="ts">
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
        class="flex h-9 items-center justify-center rounded-md border border-white px-3 py-2 text-white transition-all hover:border-opacity-0 hover:bg-aqua-dark sm:h-10 sm:px-4"
        :class="$attrs.class"
    >
        {{ page.name }}
    </NuxtLink>
</template>
