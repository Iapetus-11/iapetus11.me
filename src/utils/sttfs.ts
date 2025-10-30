import { onMounted, readonly, ref, type DeepReadonly, type Ref } from 'vue';
import { useWindowEvent } from './events';
import { debounced } from './debounce';

/**
 * Tracks the specified IDs to determine the section that is currently scrolled to on the page.
 * To be used in conjunction with anchor links (Scroll-To-Text-Fragment/STTF).
 *
 * @returns the current section's ID
 */
export function useActiveSTTFSection<SectionId extends string>(
    sectionIds: SectionId[]
): DeepReadonly<Ref<SectionId | undefined>> {
    const activeSection = ref<SectionId>();

    const updateActiveSTTF = debounced(() => {
        const windowCenter = window.innerHeight / 2.0;

        // Account for gap between sections where there might not be an element in the center of screen
        const IN_VIEW_PADDING_PX = 100;

        // Find the section closest to the center line
        const viewableSections: [SectionId, number][] = sectionIds
            .map((sectionId: SectionId) => [sectionId, document.getElementById(sectionId)] as const)
            .filter(([, el]) => el !== null)
            .map(([sectionId, el]) => [sectionId, el!.getBoundingClientRect()] as const)
            // Check to see if the center of the screen is within the section
            .filter(
                ([, rect]) =>
                    rect.top - IN_VIEW_PADDING_PX <= windowCenter &&
                    rect.bottom + IN_VIEW_PADDING_PX >= windowCenter
            )
            .map(([sectionId, rect]) => [
                sectionId,
                Math.abs((rect.top + rect.bottom) / 2.0 - windowCenter),
            ]);
        viewableSections.sort(([, aDelta], [, bDelta]) => aDelta - bDelta);

        activeSection.value = viewableSections[0]?.[0];
    }, 50);

    useWindowEvent('scroll', updateActiveSTTF);
    useWindowEvent('resize', updateActiveSTTF);

    onMounted(() => {
        const hash = window.location.hash.slice(1);
        if (sectionIds.some((sId) => sId === hash)) {
            activeSection.value = hash as SectionId;
        } else {
            updateActiveSTTF();
        }
    });

    return readonly(activeSection);
}
