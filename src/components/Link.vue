<script setup lang="ts">
    import { omit } from '@/utils/objects';
    import { computed } from 'vue';
    import type { RouterLinkProps } from 'vue-router';

    const props = defineProps<
        RouterLinkProps & {
            mode?: 'external' | undefined;
        }
    >();

    const isExternal = computed(
        () =>
            props.mode === 'external' ||
            (typeof props.to === 'string' &&
                (props.to.startsWith('https://') || props.to.startsWith('http://')))
    );
</script>

<template>
    <a v-if="isExternal" :href="`${to}`">
        <slot />
    </a>
    <RouterLink v-else v-bind="omit($props, 'mode')">
        <slot />
    </RouterLink>
</template>
