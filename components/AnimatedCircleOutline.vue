<script lang="ts" setup>
    interface Props {
        color?: string;
        delayMs?: number;
    }

    const props = withDefaults(defineProps<Props>(), {
        color: 'var(--color-aqua-normal)',
        delayMs: 0,
    });

    const containerEl = useTemplateRef('container');
    const svgEl = useTemplateRef('svg');

    const childEl = computed(() => (containerEl.value?.querySelector('*') ?? null) as HTMLElement | null);

    const childRect = ref<DOMRect | null>(null);
    const radius = computed<number | null>(() => childRect.value ? Number((childRect.value.height / 2.0).toFixed(2)) + 10.0 : null);

    useWindowEvent('resize', () => {
        if (childEl.value) {
            childRect.value = childEl.value.getBoundingClientRect();
        }
    });
    watch(childEl, (childEl) => {
        if (childEl) {
            childRect.value = childEl?.getBoundingClientRect();
        }
    }, { immediate: true });

    const showCircle = ref(true);

    function renderCircle() {
        if (!svgEl.value || !childRect.value) return;

        showCircle.value = true;

        const svg = svgEl.value;

        svg.style.width = `${childRect.value.width}px`;
        svg.style.height = `${childRect.value.height}px`;
        svg.style.display = 'block';
    }

    onMounted(() => {
        setTimeout(renderCircle, props.delayMs);
    });
</script>

<template>
    <div ref="container" class="relative">
        <slot />

        <svg v-if="radius && showCircle" ref="svg" class="absolute hidden top-[-10px] left-[-10px] -z-10 overflow-visible">
            <path
                :d="`M ${radius + 0.01} 1 A ${radius} ${radius} 0 1 1 ${radius - 0.01} 1`"
                :stroke="color"
                stroke-width="2"
                fill="none"
                @animationend="showCircle = false"
            ></path>
        </svg>
    </div>
</template>

<style scoped>
    @keyframes outline-image {
        0% {
            stroke-dashoffset: 1872;
        }
        50% {
            stroke-dashoffset: 0;
        }
        75% {
            opacity: 0%;
        }
        85% {
            opacity: 75%;
        }
        100% {
            opacity: 0%;
        }
    }

    path {
        stroke-dasharray: 1872;
        animation: outline-image 1.5s linear forwards;
        filter: blur(0.75px);
    }
</style>
