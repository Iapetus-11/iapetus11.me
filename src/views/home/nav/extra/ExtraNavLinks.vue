<script setup lang="ts">
    import { computed, useTemplateRef } from 'vue';
    import NavLink from './NavLink.vue';
    import { useScrollCardEffect } from '@/utils/scrollCardEffect';

    const container = useTemplateRef('container');
    useScrollCardEffect(computed(() => [container.value].filter((el) => !!el)));
</script>

<template>
    <div
        ref="container"
        class="flex justify-between gap-4 *:w-1/2 md:*:w-1/3 lg:justify-end xl:*:w-1/4"
    >
        <NavLink :to="{ name: 'blog' }">
            Blog

            <template #icon><span class="icon-[hugeicons--content-writing]"></span></template>
        </NavLink>
    </div>
</template>
