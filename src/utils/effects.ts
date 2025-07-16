import { useWindowEvent } from './events';
import { computed, onMounted, ref, type Ref } from 'vue';

export function calculateScrollCardEffect(
    el: HTMLElement,
    dividerLine: number,
): Partial<CSSStyleDeclaration> {
    const rect = el.getBoundingClientRect();
    const elCenter = (rect.top + rect.bottom) / 2;

    let vectorFromCenter = Math.max(0, Math.min(1, (elCenter - dividerLine) / dividerLine));
    
    // vectorFromCenter = Math.pow(vectorFromCenter, 2) * Math.sign(vectorFromCenter);

    const scalarFromCenter = Math.abs(vectorFromCenter);
    
    // Calculate rotation angle
    const angle = vectorFromCenter * 60;

    return {
        transform: `perspective(${800}px) rotateX(${-angle}deg) translateY(${(vectorFromCenter) * 100}px)`,
        opacity: `${1 - scalarFromCenter * 0.7}`,
        scale: `${1 - scalarFromCenter * 0.1}`,
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

    const dividerLine = computed(() => windowHeight.value / 2);

    function updateElements() {
        elements.value.forEach((el) => {
            const css = calculateScrollCardEffect(
                el,
                dividerLine.value,
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
