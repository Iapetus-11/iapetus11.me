import { onWatcherCleanup, ref, watch, type Ref } from 'vue';

export function useResizeObserver(
    target: Ref<Element | null | undefined>,
    callback: ResizeObserverCallback
) {
    if (import.meta.env.SSR) return;

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
