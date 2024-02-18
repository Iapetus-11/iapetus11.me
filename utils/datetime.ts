export function calculateYearsSince(date: Date): number {
    return new Date(new Date().getTime() - date.getTime()).getFullYear() - 1970;
}
