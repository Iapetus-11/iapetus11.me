export function getNum(value: string | undefined): number | undefined {
    const parsed = Number(value);
    if (!isNaN(parsed)) {
        return parsed;
    }
}

export function getStr(value: string | undefined): string | undefined {
    return value;
}

export function getBool(value: string | undefined): boolean | undefined {
    if (value === 'true') {
        return true;
    }

    if (value === 'false') {
        return false;
    }
}

type OptionParser = (value: string | undefined) => string | undefined;

export function getOpt(options: readonly string[] | string[]): OptionParser {
    return function (value) {
        if (value !== undefined && options.includes(value)) {
            return value;
        }
    };
}

export type QueryParamParser<T> = {
    [K in keyof T]: T[K] extends number | undefined
        ? typeof getNum
        : T[K] extends boolean | undefined
          ? typeof getBool
          : T[K] extends string | undefined
            ? OptionParser | typeof getStr
            : never;
};

export function parseQueryParams<T>(
    params: Record<string, string>,
    parser: QueryParamParser<T>,
    defaults: T
): T {
    function parseKey(key: keyof T) {
        return parser[key](params[key as string]) ?? defaults[key];
    }

    return Object.fromEntries(
        Object.keys(parser).map((key) => [key, parseKey(key as keyof QueryParamParser<T>)])
    ) as T;
}
