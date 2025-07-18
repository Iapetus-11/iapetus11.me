export function debounced(func: () => void, delayMs: number): () => void {
    let timeout: number | null = null;

    function callFunc() {
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(func, delayMs);
    }

    return callFunc;
}
