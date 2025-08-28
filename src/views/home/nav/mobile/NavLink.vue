<script setup lang="ts">
    import Link from '@/components/Link.vue';
    import type { RouterLinkProps } from 'vue-router';

    interface Props {
        to: RouterLinkProps['to'];
        icon: string;
        mode?: 'external' | undefined;
    }

    defineProps<Props>();
</script>

<template>
    <Link
        :to
        class="outlined-actionable border-primary-600 flex items-center rounded-xl bg-purple-300/5 p-1.5 px-2 transition-[color,scale] hover:scale-105 hover:border-purple-300 hover:bg-purple-400/10"
        :mode
    >
        <span :class="icon" class="mr-1.5"></span>

        <slot />
    </Link>
</template>
