export function omit<T extends object, Keys extends keyof T>(
    obj: T,
    ...keys: Keys[]
): Omit<T, Keys> {
    const newObj: Partial<T> = {};

    for (const key of Object.keys(obj) as (keyof T)[]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!keys.includes(key as any)) {
            newObj[key] = obj[key];
        }
    }

    return newObj as Omit<T, Keys>;
}
