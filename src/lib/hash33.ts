export function hash33(data: string): number {
    let hash = 5381;

    for (let i = 0; i < data.length; i++) {
        hash = (hash << 5) + hash + data.codePointAt(i)!;
    }

    return hash;
}

export function hash33Hex(data: string): string {
    return (hash33(data) >>> 0).toString(16);
}
