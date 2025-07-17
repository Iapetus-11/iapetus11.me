import { onMounted, readonly, ref, watch, type DeepReadonly, type Ref } from 'vue';
import { useWindowEvent } from './events';
import { debouncedRef } from './reactivity';

/**
 * Tracks the specified IDs to determine the section that is currently scrolled to on the page.
 * To be used in conjunction with anchor links (Scroll-To-Text-Fragment/STTF).
 *
 * @returns the current section's ID
 */
export function useActiveSTTFSection(sectionIds: string[]): DeepReadonly<Ref<string>> {
    let sections: HTMLElement[] = [];
    const activeSection = ref();

    const scrollY = ref(0);
    useWindowEvent('scroll', () => (scrollY.value = window.scrollY));
    useWindowEvent('resize', () => (scrollY.value = window.scrollY));

    onMounted(() => {
        sections = sectionIds.map((sId) => document.getElementById(sId)!);
        scrollY.value = window.scrollY;
    });

    watch(debouncedRef(scrollY, 10), () => {
        const windowCenter = window.innerHeight / 2.0;

        // Account for gap between sections where there might not be an element in the center of screen
        const IN_VIEW_PADDING_PX = 100;

        // Find the section closest to the center line
        const viewableSections: [string, number][] = sections
            .map((el) => [
                el.id,
                el.getBoundingClientRect(),
            ] as const)
            .filter(
                ([, r]) =>
                    r.top - IN_VIEW_PADDING_PX <= windowCenter &&
                    r.bottom + IN_VIEW_PADDING_PX >= windowCenter
            )
            .map(([el, r]) => [el, Math.abs((r.top + r.bottom) / 2.0 - windowCenter)]);
        viewableSections.sort(([, aD], [, bD]) => aD - bD);

        activeSection.value = viewableSections[0][0];
    });

    return readonly(activeSection);
}
