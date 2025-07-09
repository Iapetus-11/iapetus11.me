import { onMounted, onUnmounted, onWatcherCleanup, ref, toRef, watch, type Ref } from 'vue';

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
    listener: (ev: WindowEventMap[K]) => void
) {
    onMounted(() => {
        window.addEventListener(event, listener);
    });

    onUnmounted(() => {
        window.removeEventListener(event, listener);
    });
}

export function useWindowScroll(): Ref<{ x: number; y: number }> {
    const scroll = ref({ x: 0, y: 0 });

    function updateScroll() {
        scroll.value.x = window.scrollX;
        scroll.value.y = window.scrollY;
    }

    if (!import.meta.env.SSR) {
        updateScroll();
    }

    useWindowEvent('scroll', updateScroll);

    return scroll;
}
