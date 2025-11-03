<script setup lang="ts">
    import { useSeo } from '@/utils/head';

    useSeo({
        title: 'Page Not Found',
    });
</script>

<template>
    <div
        class="fade-in fixed top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
    >
        <h1 class="font-mono text-6xl font-bold">404</h1>
        <h2 class="font-mono text-3xl whitespace-nowrap">page not found</h2>

        <RouterLink
            :to="{ name: 'home' }"
            class="group outlined-actionable mt-4 flex items-center rounded-xl p-2 font-medium md:p-3"
        >
            <span
                class="icon-[hugeicons--arrow-left-01] mr-0.5 -ml-1.5 text-2xl transition-[margin] group-hover:mr-1"
            ></span>
            Go Back Home
        </RouterLink>
    </div>
</template>
