<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    import NavLink from './NavLink.vue';

    const route = useRoute();

    const props = defineProps<{
        sttfId: string;
        icon: string;
    }>();

    const sttf = computed(() => `#${props.sttfId}`);
    const active = computed(() => route.hash === sttf.value);
</script>

<template>
    <NavLink :active :to="sttf" :icon mode="external">
        <slot />
    </NavLink>
</template>
