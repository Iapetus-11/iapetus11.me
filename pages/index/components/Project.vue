<script setup lang="ts">
    import { createTimeline, svg } from 'animejs';
    import type { ProjectDefinition } from '~/data/projects';

    const props = defineProps<ProjectDefinition & { idx: number }>();

    const projectLinkEl = useTemplateRef('nuxt-link');
    const svgBorderEl = useTemplateRef('svg-border');

    function animateSelfIn() {
        const aEl = projectLinkEl.value!.$el;
        const delay = 75 * props.idx;

        try {
            // createWAAPITimeline([
            //     {
            //         draw: ['0. 1'],
            //         ease: 'inOutQuad',
            //         duration: 1000,
            //         delay,
            //         targets: svg.createDrawable(svgBorderEl.value!),
            //     },
            //     // {
            //     //     targets: aEl,
            //     //     opacity: [0, 1],
            //     //     scale: [0, 1],
            //     //     duration: 300,
            //     //     delay: delay + 200,
            //     // },
            // ]);

            // const length = 2 * (svgBorderEl.value!.width.baseVal.value + svgBorderEl.value!.height.baseVal.value);
            const svgBorderElRect = svgBorderEl.value!.getBoundingClientRect();
            const length = 2 * (svgBorderElRect.width + svgBorderElRect.height);

            svgBorderEl.value!.style.strokeDasharray = `${length}px`;
            svgBorderEl.value!.style.strokeDashoffset = `${0}px`;

            console.log('len', length);

            createTimeline().add(
                svg.createDrawable(svgBorderEl.value!),
                {
                    strokeDashoffset: [length, 0],
                    duration: 3000,
                    delay,
                },
                0
            );
        } catch (e) {
            console.error(e);
        }
    }

    onMounted(animateSelfIn);
</script>

<template>
    <NuxtLink
        ref="nuxt-link"
        :href="link"
        :target="link.startsWith('/') ? '_self' : '_blank'"
        class="group bg-theme-primary-800 hover:bg-theme-primary-700 relative flex h-40 items-center space-x-3 rounded-4xl opacity-100 transition-colors"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute top-[-3px] left-[-3px] h-full w-full overflow-visible"
        >
            <rect ref="svg-border" x="0" y="0" rx="32" ry="32" fill="transparent" stroke-width="2" class="w-[calc(100%+6px)] h-[calc(100%+6px)] stroke-theme-primary-500" />
        </svg>

        <div class="w-2/3 p-3 md:p-6">
            <h3 class="mb-2 font-mono text-2xl font-semibold text-white sm:text-3xl">
                {{ name }}
            </h3>
            <p class="text-white">{{ description }}</p>
        </div>

        <div
            class="bg-theme-primary-900 group-hover:bg-theme-primary-900/90 ml-auto flex h-full w-[160px] max-w-48 rounded-4xl px-3 py-3 transition-colors"
            style="box-shadow: -6px 1px 5px -6px rgba(0, 0, 0, 0.25)"
        >
            <img :src="image" :alt="name" class="h-fit w-full self-center rounded-3xl" />
        </div>
    </NuxtLink>
</template>
