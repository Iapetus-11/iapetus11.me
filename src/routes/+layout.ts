import type { LayoutLoad } from './$types';

export const trailingSlash = 'always';

export const load = (async ({ route }) => {
    let routeName = route.id?.trim().replaceAll('/', '') || '';
    routeName = routeName.charAt(0).toUpperCase() + routeName.slice(1);

    return {
        meta: {
            title: routeName ? `Milo Weinberg | ${routeName}` : 'Milo Weinberg',
            name: routeName,
            embedTitle: routeName,
            embedColor: '#78d6af',
            description:
                "Hey! I'm Milo, a 19 year-old full-stack developer who's been programming " +
                'for 6+ years and loves to learn new things!',
            url: 'https://iapetus11.me/',
            imageUrl: 'https://iapetus11.me/favicon.png',
            largeImage: false,
            keywords: [],
        },
    };
}) satisfies LayoutLoad;
