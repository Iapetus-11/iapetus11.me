import { onMounted, readonly, ref, type DeepReadonly, type Ref } from 'vue';
import { useWindowEvent } from './events';
import { debounced } from './debounce';

/**
 * Tracks the specified IDs to determine the section that is currently scrolled to on the page.
 * To be used in conjunction with anchor links (Scroll-To-Text-Fragment/STTF).
 *
 * @returns the current section's ID
 */
export function useActiveSTTFSection(sectionIds: string[]): DeepReadonly<Ref<string>> {
    const activeSection = ref();

    const updateActiveSTTF = debounced(() => {
        const windowCenter = window.innerHeight / 2.0;

        // Account for gap between sections where there might not be an element in the center of screen
        const IN_VIEW_PADDING_PX = 100;

        // Find the section closest to the center line
        const viewableSections: [string, number][] = sectionIds
            .map((sId) => document.getElementById(sId))
            .filter((el) => el !== null)
            .map((el) => [el.id, el.getBoundingClientRect()] as const)
            .filter(
                ([, r]) =>
                    r.top - IN_VIEW_PADDING_PX <= windowCenter &&
                    r.bottom + IN_VIEW_PADDING_PX >= windowCenter
            )
            .map(([el, r]) => [el, Math.abs((r.top + r.bottom) / 2.0 - windowCenter)]);
        viewableSections.sort(([, aD], [, bD]) => aD - bD);

        activeSection.value = viewableSections[0][0];
    }, 50);

    useWindowEvent('scroll', updateActiveSTTF);
    useWindowEvent('resize', updateActiveSTTF);

    onMounted(() => {
        const hash = window.location.hash.slice(1);
        if (sectionIds.includes(hash)) {
            activeSection.value = hash;
        } else {
            updateActiveSTTF();
        }
    });

    return readonly(activeSection);
}
