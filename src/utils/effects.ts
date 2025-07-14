import { useWindowEvent } from './events';
import { computed, onMounted, ref, type Ref } from 'vue';

export function calculateScrollCardEffect(
    el: HTMLElement,
    dividerLine: number,
    scaleDivisor: number,
    yTranslateFactor: number
): Partial<CSSStyleDeclaration> {
    const rect = el.getBoundingClientRect();
    const yCenter = (rect.top + rect.bottom) / 2.0;

    const factor = Math.max(yCenter / dividerLine, 1.0) - 1.0;

    return {
        transform: `rotate(${factor * -12.0}deg) translateX(${factor * 5.0}vw) translateY(${factor * yTranslateFactor}px) scale(${Math.max(1 - factor / scaleDivisor, 0) * 100.0}%)`,
        opacity: '100%',
    };
}

export function useScrollCardEffect(
    elements: Ref<HTMLElement[]>,
    options?: { scaleDivisor?: number; yTranslateFactor?: number }
) {
    const scaleDivisor = options?.scaleDivisor ?? 5.0;
    const yTranslateFactor = options?.yTranslateFactor ?? 0.0;

    const windowHeight = ref(0);
    if (!import.meta.env.SSR) {
        windowHeight.value = window.outerHeight;
    }

    const dividerLine = computed(() => windowHeight.value / 1.5);

    function updateElements() {
        elements.value.forEach((el) => {
            const css = calculateScrollCardEffect(
                el,
                dividerLine.value,
                scaleDivisor,
                yTranslateFactor
            );
            Object.assign(el.style, css);
        });
    }

    useWindowEvent('scroll', updateElements, { passive: true });
    useWindowEvent(
        'resize',
        () => {
            windowHeight.value = window.outerHeight;
            updateElements();
        },
        { passive: true }
    );

    onMounted(updateElements);
}
