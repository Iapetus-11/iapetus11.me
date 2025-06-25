import { onWatcherCleanup, type Reactive } from 'vue';

export function useResizeObserver(
    target: Ref<Element | null | undefined>,
    callback: ResizeObserverCallback
) {
    if (!import.meta.client) return;

    const observer = new ResizeObserver(callback);

    watch(
        target,
        (target) => {
            if (target) {
                observer.observe(target);
            }

            onWatcherCleanup(() => {
                observer.disconnect();
            });
        },
        { immediate: true }
    );
}

export function useElementRect(target: Ref<Element | null | undefined>): Ref<DOMRect | undefined> {
    const rect = ref<DOMRect>();

    useResizeObserver(target, () => {
        rect.value = target.value?.getBoundingClientRect();
    });

    return rect;
}

export function useWindowScroll(): Ref<{ x: number; y: number }> {
    const scroll = ref({ x: 0, y: 0 });

    function updateScroll() {
        scroll.value.x = window.scrollX;
        scroll.value.y = window.scrollY;
    }

    if (import.meta.client) {
        updateScroll();
    }

    useWindowEvent('scroll', updateScroll);

    return scroll;
}
