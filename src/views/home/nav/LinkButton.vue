<script setup lang="ts">
    import Link from '@/components/Link.vue';
    import type { RouteLocationRaw } from 'vue-router';

    defineProps<{
        to: RouteLocationRaw;
        icon: string;
    }>();
</script>

<template>
    <Link
        :to
        class="group flex w-fit items-center pr-2 text-lg font-medium transition-colors hover:text-purple-300 2xl:text-xl"
    >
        <span
            :class="icon"
            class="mr-1.5 -ml-1 scale-0 opacity-0 transition-[opacity,scale] group-hover:scale-110 group-hover:opacity-75"
        ></span>

        <slot />
    </Link>
</template>
