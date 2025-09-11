<script setup lang="ts">
    import { computed, useTemplateRef } from 'vue';
    import NavLink from './NavLink.vue';
    import { useScrollCardEffect } from '@/utils/scrollCardEffect';

    const container = useTemplateRef('container');
    const extraNavElements = computed(() => [
        ...((container.value?.querySelectorAll('div,h2').values() ?? []) as HTMLElement[]),
    ]);

    useScrollCardEffect(extraNavElements);
</script>

<template>
    <div ref="container">
        <h2 class="mb-3 font-mono text-2xl font-bold whitespace-nowrap max-md:text-center">
            More&hellip;
        </h2>

        <div class="grid grid-cols-4 gap-4">
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
    </div>
</template>
