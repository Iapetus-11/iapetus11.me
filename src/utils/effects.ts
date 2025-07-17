import { useWindowEvent } from './events';
import { computed, onMounted, ref, type Ref } from 'vue';
import { BREAKPOINTS } from './tailwind';

export function calculateScrollCardEffect(
    el: HTMLElement,
    dividerLine: number
): Partial<CSSStyleDeclaration> {
    const rect = el.getBoundingClientRect();
    const elCenter = (rect.top + rect.bottom) / 2;

    let vectorFromCenter = Math.max(-1, Math.min(1, (elCenter - dividerLine) / dividerLine));
    vectorFromCenter = Math.pow(vectorFromCenter, 2) * Math.sign(vectorFromCenter);

    const scalarFromCenter = Math.abs(vectorFromCenter);

    const angle = vectorFromCenter * 30;

    return {
        transform: `perspective(${800}px) rotateX(${-angle}deg)`,
        opacity: `${1 - scalarFromCenter * 0.9}`,
        scale: `${1 - scalarFromCenter * 0.175}`,
    };
}

export function useScrollCardEffect(elements: Ref<HTMLElement[]>) {
    const windowHeight = ref(0);
    const windowWidth = ref(0);
    if (!import.meta.env.SSR) {
        windowHeight.value = window.innerHeight;
        windowWidth.value = window.innerWidth;
    }

    const dividerLine = computed(() => {
        const divisor = windowWidth.value < BREAKPOINTS.md ? 1.8 : 2.0;
        return windowHeight.value / divisor;
    });

    function updateElements() {
        elements.value.forEach((el) => {
            const css = calculateScrollCardEffect(el, dividerLine.value);
            Object.assign(el.style, css);
        });
    }

    useWindowEvent('scroll', updateElements, { passive: true });
    useWindowEvent(
        'resize',
        () => {
            windowHeight.value = window.innerHeight;
            windowWidth.value = window.innerWidth;
            updateElements();
        },
        { passive: true }
    );

    onMounted(updateElements);
}
