import { getRecommendations } from '$lib/api/github/repo';

export const ssr = false;

export async function load() {
    return {
        recommendations: (await getRecommendations()).reverse(),
    };
}
