import { onBeforeMount, type Ref } from 'vue';
import { BREAKPOINTS } from './tailwind';

export function calculateScrollCardEffect(
    el: HTMLElement,
    dividerLine: number,
    opacityModifier: number,
    scaleModifier: number,
    angleModifier: number,
    startEffectReductionFactor: number,
    startEffectReductionCutoff: number
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
        transform: `perspective(${800}px) rotateX(${-angle}deg)`,
        opacity: `${1 - scalarFromCenter * opacityModifier}`,
        scale: `${1 - scalarFromCenter * scaleModifier}`,
    };
}

export function useScrollCardEffect(
    elements: Ref<HTMLElement[]>,
    options?: { opacityModifier?: number; scaleModifier?: number; angleModifier?: number }
) {
    const opacityModifier = options?.opacityModifier ?? 0.9;
    const scaleModifier = options?.scaleModifier ?? 0.175;
    const angleModifier = options?.angleModifier ?? 30.0;

    function updateElements() {
        // On mobile devices, move the optimal viewing area further up the page to make room for their
        // finger at the bottom scrolling
        const dividerLine: number =
            window.innerHeight / (window.innerWidth <= BREAKPOINTS.sm ? 2.2 : 2.1);

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
                        startEffectReductionCutoff
                    ),
                ] as const
        );

        for (const [el, css] of elementsEffectCss) {
            Object.assign(el.style, css);
        }

        requestAnimationFrame(updateElements);
    }

    // When developing, this can run multiple times since the component can be re-mounted from HMR
    // which can make things look laggy (just refresh)
    onBeforeMount(() => {
        updateElements();
        requestAnimationFrame(updateElements);
    });

    return { updateElements };
}
