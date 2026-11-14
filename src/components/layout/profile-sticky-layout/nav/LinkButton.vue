<script setup lang="ts">
    import Link from '@/components/Link.vue';
    import { computed } from 'vue';
    import { useRoute, useRouter, type RouteLocationRaw } from 'vue-router';

    const router = useRouter();
    const route = useRoute();

    const props = defineProps<{
        to: RouteLocationRaw;
        icon: string;
    }>();

    const active = computed(() => router.resolve(props.to).name === route.name);
</script>

<template>
    <Link
        :to
        class="group flex w-fit items-center pr-2 text-xl font-medium transition-colors hover:text-purple-300"
    >
        <span
            :class="[icon, { 'scale-110 opacity-75': active }]"
            class="mr-1.5 -ml-1 scale-0 opacity-0 transition-[opacity,scale] group-hover:scale-110 group-hover:opacity-75"
        ></span>

        <slot />
    </Link>
</template>
