import {
    onMounted,
    onUnmounted,
    onWatcherCleanup,
    readonly,
    ref,
    toRef,
    watch,
    type DeepReadonly,
    type Ref,
} from 'vue';
import { debouncedRef } from './reactivity';

export function useEvent<T extends HTMLElement, K extends keyof HTMLElementEventMap>(
    target: T | Ref<T | null | undefined>,
    event: K,
    listener: (ev: HTMLElementEventMap[K]) => void
) {
    watch(
        toRef(target),
        (target) => {
            if (!target) return;

            target.addEventListener(event, listener);

            onWatcherCleanup(() => {
                target.removeEventListener(event, listener);
            });
        },
        { immediate: true }
    );
}

export function useWindowEvent<K extends keyof WindowEventMap>(
    event: K,
    listener: (ev: WindowEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions
) {
    onMounted(() => {
        window.addEventListener(event, listener, options);
    });

    onUnmounted(() => {
        window.removeEventListener(event, listener, options);
    });
}

export function useMousePosition(
    mode: 'fixed' | 'absolute'
): DeepReadonly<Ref<{ x: number; y: number }>> {
    const mouse = ref({ x: 0, y: 0 });

    let updateMouse;
    if (mode === 'fixed') {
        updateMouse = function (ev: MouseEvent) {
            mouse.value.x = ev.x;
            mouse.value.y = ev.y;
        };
    } else if (mode === 'absolute') {
        updateMouse = function (ev: MouseEvent) {
            mouse.value.x = ev.pageX;
            mouse.value.y = ev.pageY;
        };
    }

    useWindowEvent('mousemove', updateMouse!, { passive: true });

    return readonly(mouse);
}

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
    useWindowEvent('scroll', () => scrollY.value = window.scrollY);

    onMounted(() => {
        sections = sectionIds.map(sId => document.getElementById(sId)!);
        scrollY.value = window.scrollY;
    });

    watch(debouncedRef(scrollY, 10), (scrollY) => {
        const windowCenter = window.scrollY + (window.innerHeight / 2.0)

        document.getElementById('bruh')!.style.top = `${windowCenter}px`

        const sectionRects: [HTMLElement, DOMRect][] = sections.map(s => [s, s.getBoundingClientRect()]);

        const sectionDists: [HTMLElement, number][] = sectionRects.map(([s, r]) => [s, Math.min(
            r.top - windowCenter,
            r.bottom - windowCenter,
            0,
        )]);

        sectionDists.sort(([,aD], [,bD]) => aD - bD);
        
        console.log(sectionDists.map(([s,]) => s.id));
    });

    return readonly(activeSection);
}
