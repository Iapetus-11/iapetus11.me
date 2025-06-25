<script setup lang="ts">
    import { createTimeline } from 'animejs';
    import type { ProjectDefinition } from '~/data/projects';

    const props = defineProps<ProjectDefinition & { idx: number }>();

    const projectLinkEl = useTemplateRef('project-link');
    const svgOutlineEl = useTemplateRef('svg-border');

    const svgOutlineRect = ref<DOMRect>();
    const svgOutlinePathDef = ref<string>('');
    const svgOutlineLengthPx = computed<number>(() =>
        svgOutlineRect.value ? 2 * (svgOutlineRect.value.width + svgOutlineRect.value.height) : 0
    );

    function generateSvgOutlinePathDef(): string {
        const OUTLINE_EXTRA_SPACE = 8;

        if (!projectLinkEl.value) return '';
        const el: HTMLAnchorElement = projectLinkEl.value.$el;

        const w: number = el.offsetWidth + OUTLINE_EXTRA_SPACE;
        const h: number = el.offsetHeight + OUTLINE_EXTRA_SPACE;
        const r = 16;

        return [
            `M ${w / 2} 0`,
            `H ${w - r}`,
            `A ${r} ${r} 0 0 1 ${w} ${r}`,
            `V ${h - r}`,
            `A ${r} ${r} 0 0 1 ${w - r} ${h}`,
            `H ${r}`,
            `A ${r} ${r} 0 0 1 0 ${h - r}`,
            `V ${r}`,
            `A ${r} ${r} 0 0 1 ${r} 0`,
            `H ${w / 2}`,
            'Z',
        ].join(' ');
    }

    function updateSvgOutlineValues() {
        svgOutlineRect.value = svgOutlineEl.value?.getBoundingClientRect();
        svgOutlinePathDef.value = generateSvgOutlinePathDef();
    }

    useWindowEvent('resize', updateSvgOutlineValues);

    async function animateSelfIn() {
        const delay = 200 * props.idx;

        while (!svgOutlineLengthPx.value) {
            updateSvgOutlineValues();
            await new Promise((resolve) => setTimeout(resolve, 10));
        }

        try {
            createTimeline()
                .add(
                    svgOutlineEl.value!,
                    {
                        opacity: [0, 1],
                        duration: 500,
                        ease: 'inBounce',
                        delay,
                    },
                    0
                )
                .add(
                    svgOutlineEl.value!,
                    {
                        strokeDashoffset: [svgOutlineLengthPx.value, 0],
                        duration: 750,
                        delay,
                    },
                    0
                )
                .add(
                    projectLinkEl.value!.$el,
                    {
                        opacity: [0, 1],
                        duration: 1500,
                        delay: 300 + delay,
                    },
                    0
                )
                .add(
                    projectLinkEl.value!.$el,
                    {
                        borderColor: ['rgba(0, 0, 0, 0)', 'var(--color-theme-primary-500)'],
                        duration: 2000,
                    },
                    '<'
                );
        } catch (e) {
            console.error(e);
        }
    }

    onMounted(animateSelfIn);
</script>

<template>
    <div class="relative">
        <svg
            class="pointer-events-none absolute top-[-4px] left-[-4px] h-full w-full overflow-visible"
        >
            <path
                ref="svg-border"
                :d="svgOutlinePathDef"
                fill="transparent"
                stroke-width="2"
                class="stroke-theme-primary-500 filter-glow glow-aqua h-[calc(100%+8px)] w-[calc(100%+8px)] opacity-0"
                :stroke-dasharray="svgOutlineLengthPx.toFixed(2)"
            />
        </svg>

        <NuxtLink
            ref="project-link"
            :href="link"
            :target="link.startsWith('/') ? '_self' : '_blank'"
            class="group bg-theme-primary-800/50 hover:bg-theme-primary-700/50 flex h-full items-center space-x-3 rounded-2xl border-transparent opacity-0 transition-colors"
        >
            <div class="flex h-full w-2/3 flex-col p-3 md:p-6">
                <h3
                    class="align-self-end mb-2 font-mono text-lg font-semibold whitespace-nowrap text-white sm:text-3xl md:text-xl lg:text-2xl"
                >
                    {{ name }}
                </h3>
                <p class="text-xs text-white md:text-sm lg:text-base">
                    {{ description }}
                </p>
            </div>

            <div class="ml-auto flex h-full w-[160px] rounded-2xl px-3 py-3 transition-colors">
                <img :src="image" :alt="name" class="h-fit w-full self-center rounded-3xl" />
            </div>
        </NuxtLink>
    </div>
</template>
