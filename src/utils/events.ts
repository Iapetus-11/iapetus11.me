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
