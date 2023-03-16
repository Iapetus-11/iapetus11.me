import type { PageLoad } from './$types';
import { PUBLIC_API_URL } from '$env/static/public';
import { DEFAULT_FRACTAL } from '$lib/api/api.iapetus11.me/fractals';
import { redirect } from '@sveltejs/kit';
import { hash33Hex } from '$lib/hash33';
import { blendHexColors } from '$lib/colors';

export const load = (async ({ url }) => {
    const queryParams = url.searchParams;

    // Add missing fractal settings to query params
    const queryParamKeys = Array.from(queryParams.keys());
    if (
        Object.entries(DEFAULT_FRACTAL).filter(
            ([k, v]) => !queryParamKeys.includes(k) && v !== undefined
        ).length
    ) {
        Object.entries(DEFAULT_FRACTAL).forEach(([k, v]) => {
            v = queryParams.get(k) || v;
            if (v === undefined) queryParams.delete(k);
            else queryParams.set(k, `${v}`);
        });

        throw redirect(307, `/fractals/?${queryParams}`);
    }

    const isDefault = Object.entries(DEFAULT_FRACTAL).every(
        ([k, v]) => queryParams.get(k) === `${v}` || v === undefined
    );

    return {
        meta: {
            title: 'Milo Weinberg | Fractals',
            name: 'Fractals',
            embedTitle: isDefault
                ? undefined
                : `${queryParams.get('variation')} Fractal ${hash33Hex(
                      JSON.stringify(
                          Object.keys(DEFAULT_FRACTAL).map((k) => [k, queryParams.get(k)])
                      )
                  )}`,
            embedColor: blendHexColors(queryParams.get('colorA')!, queryParams.get('colorB')!, 0.5),
            description: null,
            url: url.toString(),
            imageUrl: `${PUBLIC_API_URL}/fractals/?${queryParams}`,
            largeImage: true,
            keywords: ['fractal', 'fractals', 'flame', 'flame fractals'],
        },
    };
}) satisfies PageLoad;
