import { onBeforeMount, onUnmounted, type Ref } from 'vue';
import { BREAKPOINTS } from './tailwind';

export function calculateScrollCardEffect(
    el: HTMLElement,
    dividerLine: number,
    opacityModifier: number,
    scaleModifier: number,
    angleModifier: number,
    startEffectReductionFactor: number,
    startEffectReductionCutoff: number,
    perspectiveHeight: number
): Partial<CSSStyleDeclaration> {
    const rect = el.getBoundingClientRect();
    const elCenter = (rect.top + rect.bottom) / 2;

    let vectorFromCenter = Math.max(-1, Math.min(1, (elCenter - dividerLine) / dividerLine));
    vectorFromCenter =
        Math.abs(Math.pow(Math.pow(vectorFromCenter, 2), 1.25)) * Math.sign(vectorFromCenter);

    if (vectorFromCenter < startEffectReductionCutoff) {
        vectorFromCenter /= startEffectReductionFactor;
    }

    const scalarFromCenter = Math.abs(vectorFromCenter);

    const angle = vectorFromCenter * angleModifier;

    return {
        transform: `perspective(${perspectiveHeight}px) rotateX(${-angle}deg)`,
        opacity: `${1 - scalarFromCenter * opacityModifier}`,
        scale: `${1 - scalarFromCenter * scaleModifier}`,
    };
}

export function useScrollCardEffect(
    elements: Ref<HTMLElement[]>,
    options?: { opacityModifier?: number; scaleModifier?: number; angleModifier?: number }
) {
    if (import.meta.env.SSR) {
        return { updateElements: () => {} };
    }

    const opacityModifier = options?.opacityModifier ?? 0.9;
    const scaleModifier = options?.scaleModifier ?? 0.175;
    const angleModifier = options?.angleModifier ?? 30.0;

    const queueNextFrame = window.requestAnimationFrame ?? ((callback) => setTimeout(callback, 16));

    let stop = false;

    function updateElements() {
        // On mobile devices, move the optimal viewing area further up the page to make room for their
        // finger at the bottom scrolling
        const dividerLine: number =
            window.innerHeight / (window.innerWidth <= BREAKPOINTS.sm ? 2.2 : 2.0);

        // Used to avoid transforming/fading elements at the initial start/top of the page, to make sure they're
        // always legible since the user can't scroll up
        let startEffectReductionFactor: number;
        if (window.innerWidth >= BREAKPOINTS.lg) {
            startEffectReductionFactor = Math.max(window.innerHeight / 5.0 / window.scrollY, 1);
        } else {
            startEffectReductionFactor = Math.max(window.innerHeight / 0.75 / window.scrollY, 1);
        }
        const startEffectReductionCutoff =
            window.innerWidth <= BREAKPOINTS.md ? dividerLine / 100 : 0;

        const perspectiveHeight = Math.max(800, window.innerHeight);

        // Calculations are done in a separate for loop to help avoid the effect looking like it's
        // lagging behind the scroll (this helps only minimally :/ )
        const elementsEffectCss = elements.value.map(
            (el) =>
                [
                    el,
                    calculateScrollCardEffect(
                        el,
                        dividerLine,
                        opacityModifier,
                        scaleModifier,
                        angleModifier,
                        startEffectReductionFactor,
                        startEffectReductionCutoff,
                        perspectiveHeight
                    ),
                ] as const
        );

        for (const [el, css] of elementsEffectCss) {
            Object.assign(el.style, css);
        }

        if (!stop) {
            queueNextFrame(updateElements);
        }
    }

    onBeforeMount(updateElements);
    onUnmounted(() => (stop = true));

    return { updateElements };
}
