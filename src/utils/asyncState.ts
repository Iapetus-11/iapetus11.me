import { reactive } from 'vue';

export type AsyncState<T> = {
    result: T | null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error: any;
    pending: boolean;
    promise: Promise<T>;
};

/**
 * Create reactive state for a promise
 * @returns Refs for the state of the promise
 */
export function useAsyncState<T>(promise: Promise<T>): AsyncState<T> {
    const state: AsyncState<T> = reactive({
        result: null,
        error: null,
        pending: true,
        promise,
    });

    promise.then(
        (value) => {
            state.result = value;
            state.pending = false;
        },
        (error) => {
            state.error = error || true;
            state.pending = false;
        }
    );

    return state;
}
