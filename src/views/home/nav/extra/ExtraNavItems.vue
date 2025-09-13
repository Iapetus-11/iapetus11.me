<script setup lang="ts">
    import { computed, useTemplateRef } from 'vue';
    import NavLink from './NavLink.vue';
    import { useScrollCardEffect } from '@/utils/scrollCardEffect';

    const container = useTemplateRef('container');
    const extraNavElements = computed(() => [
        ...((container.value?.querySelectorAll('div').values() ?? []) as HTMLElement[]),
    ]);

    useScrollCardEffect(extraNavElements);
</script>

<template>
    <div ref="container" class="flex justify-end gap-4 *:w-1/3 xl:*:w-1/4">
        <NavLink :to="{ name: 'links' }">
            Link Dump

            <template #icon>
                <span class="icon-[hugeicons--link-03] group-hover:animate-spin"></span>
            </template>
        </NavLink>

        <NavLink :to="{ name: 'miata' }">
            Miata

            <template #icon>
                <span class="icon-[hugeicons--car-01]"></span>
                <span
                    class="icon-[hugeicons--fast-wind] -mr-[1em] scale-80 opacity-0 transition-[color,opacity,margin,scale] group-hover:-mr-0 group-hover:scale-100 group-hover:opacity-100"
                ></span>
            </template>
        </NavLink>
    </div>
</template>
