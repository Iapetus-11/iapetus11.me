<script lang="ts" setup>
    import { svg } from 'animejs';

    interface Props {
        delayMs?: number;
        borderWidthPx?: number;
        disabled?: boolean;
    }

    const props = withDefaults(defineProps<Props>(), {
        delayMs: 0,
        borderWidthPx: 1,
        disabled: false,
    });

    const containerEl = useTemplateRef('container');
    const circleEl = useTemplateRef('circle');

    const childEl = computed(
        () => (containerEl.value?.querySelector('*') ?? null) as HTMLElement | null
    );

    const childRect = ref<DOMRect | null>(null);
    const radius = computed<number>(() =>
        childRect.value ? Number((childRect.value.height / 2.0).toFixed(2)) + 10.0 : 0
    );

    useWindowEvent('resize', () => {
        if (childEl.value) {
            childRect.value = childEl.value.getBoundingClientRect();
        }
    });
    watch(childEl, (childEl) => {
        if (childEl) {
            childRect.value = childEl?.getBoundingClientRect();
        }
    });

    watch(radius, (radius) => {
        // Size of the mask to simulate effect of "border"
        circleEl.value?.style.setProperty(
            '--circle-stroke-diff',
            `${radius - (props.borderWidthPx - 1)}px`
        );
    });

    function animateCircle() {
        if (props.disabled) return;

        registerCSSProperty({
            name: '--circle-percentage',
            syntax: '<percentage>',
            inherits: true,
            initialValue: '0%',
        });

        const circle = svg.createDrawable(circleEl.value!);

        createWAAPITimeline(
            [
                {
                    '--circle-percentage': ['100%', '-400%'],
                    duration: 1600 * 6.0,
                },
                {
                    rotate: ['430deg', '0deg'],
                    duration: 1800,
                },
                {
                    opacity: [0, 1],
                    duration: 250,
                },
                {
                    opacity: [1, 0],
                    duration: 500,
                    delay: 1600,
                },
            ],
            { targets: circle, delayMs: props.delayMs }
        );
    }

    onMounted(animateCircle);
</script>

<template>
    <div ref="container" class="relative">
        <slot />

        <div
            class="filter-glow glow-aqua absolute top-0 left-0 h-[calc(100%+22px)] w-[calc(100%+22px)] -translate-x-[10px] -translate-y-[10px] md:scale-[101%] lg:scale-[102%] transition-opacity"
            :class="{ 'opacity-0': disabled }"
        >
            <div
                ref="circle"
                class="filter-glow glow-aqua h-full w-full"
                :style="{
                    backgroundImage: `conic-gradient(transparent var(--circle-percentage), var(--color-glow-primary))`,
                    borderRadius: '50%',
                    mask: 'radial-gradient(circle var(--circle-stroke-diff), transparent 99%, #fff 0%)',
                    opacity: 0,
                }"
            ></div>
        </div>
    </div>
</template>
