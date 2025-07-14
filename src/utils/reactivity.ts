import { readonly, ref, watch, type DeepReadonly, type Ref } from 'vue';

/**
 * @param source The value that should be debounced when changed
 * @param delayMs The debounce delay in milliseconds
 * @returns The debounced value of 'source'
 */
export function debouncedRef<T>(source: Ref<T>, delayMs: number): DeepReadonly<Ref<T>> {
    const debouncedValue = ref(source.value) as Ref<T>;
    let timeout: number | null = null;

    watch(source, () => {
        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
            debouncedValue.value = source.value;
        }, delayMs);
    });

    return readonly(debouncedValue);
}
