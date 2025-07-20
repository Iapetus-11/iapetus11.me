<script setup lang="ts">
    import { computed } from 'vue';
    import type { RouterLinkProps } from 'vue-router';

    const props = defineProps<RouterLinkProps>();

    const isExternal = computed(
        () =>
            typeof props.to === 'string' &&
            (props.to.startsWith('https://') || props.to.startsWith('http://'))
    );
</script>

<template>
    <a v-if="isExternal" :href="to as string">
        <slot />
    </a>
    <RouterLink v-else v-bind="$props">
        <slot />
    </RouterLink>
</template>
