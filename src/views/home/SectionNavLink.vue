<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const props = defineProps<{
        sttfId: string;
        icon: string;
    }>();

    const sttf = computed(() => `#${props.sttfId}`);
    const isActive = computed(() => route.hash === sttf.value);
</script>

<template>
    <a
        :href="sttf"
        class="group flex items-center text-lg font-medium transition-colors hover:text-purple-300 2xl:text-xl"
        :class="{ 'text-slate-300': isActive }"
    >
        <span
            :class="[icon, { 'scale-110 opacity-75': isActive }]"
            class="mr-1.5 -ml-1 scale-0 opacity-0 transition-[opacity,scale] group-hover:scale-110 group-hover:opacity-75"
        ></span>

        <slot />
    </a>
</template>
