export function debounced(func: () => void, delayMs: number): () => void {
    let timeout: number | null = null;

    function callFunc() {
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(func, delayMs);
    }

    return callFunc;
}

export function throttled(func: () => void, delayMs: number): () => void {
    let lastCall = -delayMs;
    let timeout: number | null = null;

    function callFunc() {
        if (timeout !== null) clearTimeout(timeout);

        const now = performance.now();
        const leftOver = Math.max(delayMs - (now - lastCall), 0);

        if (leftOver == 0) {
            func();
            lastCall = now;
        } else {
            timeout = setTimeout(callFunc, delayMs);
        }
    }

    return callFunc;
}
