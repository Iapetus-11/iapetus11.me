/**
 * Shallow copy an object with some of its keys not included.
 * @param sourceObj Source object
 * @param keys Keys to omit
 * @returns Object without omitted keys
 */
export function omit<T extends Record<string, unknown>, OmitKeys extends keyof T>(
    sourceObj: T,
    ...keys: OmitKeys[]
): Omit<T, OmitKeys> {
    const omittedKeys = new Set(keys);
    const omittedObj: Partial<T> = {};

    for (const key of Object.keys(sourceObj) as (keyof T)[]) {
        if (!omittedKeys.has(key as OmitKeys)) {
            omittedObj[key] = sourceObj[key];
        }
    }

    return omittedObj as Omit<T, OmitKeys>;
}
