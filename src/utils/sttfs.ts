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

    watch(debouncedRef(scrollY, 10), (scrollY) => {
        const windowCenter = scrollY + window.innerHeight / 2.0;

        const sectionRects: [HTMLElement, DOMRect][] = sections.map((s) => [
            s,
            s.getBoundingClientRect(),
        ]);
        const sectionDists: [HTMLElement, number][] = sectionRects.map(([s, r]) => [
            s,
            Math.abs(r.bottom + window.innerHeight - windowCenter),
        ]);

        sectionDists.sort(([, aD], [, bD]) => aD - bD);

        activeSection.value = sectionDists[0][0].id;
    });

    return readonly(activeSection);
}
