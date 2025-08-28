<script setup lang="ts">
    import Link from '@/components/Link.vue';
    import type { RouterLinkProps } from 'vue-router';

    interface Props {
        to: RouterLinkProps['to'];
        icon: string;
        active?: boolean;
        mode?: 'external' | undefined;
    }

    defineProps<Props>();
</script>

<template>
    <Link
        :to
        class="group flex items-center text-lg font-medium transition-colors hover:text-purple-300 2xl:text-xl w-fit pr-2"
        :class="{ 'text-slate-300': active }"
        :mode
    >
        <span
            :class="[icon, { 'scale-110 opacity-75': active }]"
            class="mr-1.5 -ml-1 scale-0 opacity-0 transition-[opacity,scale] group-hover:scale-110 group-hover:opacity-75"
        ></span>

        <slot />
    </Link>
</template>
