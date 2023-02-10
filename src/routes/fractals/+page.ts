import type { PageLoad } from './$types';
import { DEFAULT_FRACTAL } from '$lib/api/api.iapetus11.me/fractals';
import { redirect } from '@sveltejs/kit';

export const ssr = false;

export const load = (async ({ url }) => {
    // Add missing fractal settings to query params
    const queryParamKeys = Array.from(url.searchParams.keys());
    if (
        Object.entries(DEFAULT_FRACTAL).filter(
            ([k, v]) => !queryParamKeys.includes(k) && v !== undefined
        ).length
    ) {
        Object.entries(DEFAULT_FRACTAL).forEach(([k, v]) => {
            v = url.searchParams.get(k) || v;
            if (v === undefined) url.searchParams.delete(k);
            else url.searchParams.set(k, `${v}`);
        });

        throw redirect(307, `/fractals/?${url.searchParams}`);
    }
}) satisfies PageLoad;
