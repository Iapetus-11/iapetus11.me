import { useSeoMeta, type MetaFlat, type ResolvableValue } from '@unhead/vue';
import petusWebp from '@/assets/images/petus.webp?no-inline';

export interface SeoMeta {
    type: MetaFlat['ogType'];
    title: string;
    embedTitle: string;
    description: string;
    url: string;
    imageUrl: string;
    imageType: 'small' | 'large';
    color: string;
}

export function useSeo({
    type = 'website',
    title = 'Milo / Iapetus11',
    embedTitle = title,
    description,
    url,
    imageUrl = petusWebp,
    imageType = 'small',
    color = '#77d5af',
}: Partial<{ [K in keyof SeoMeta]: ResolvableValue<SeoMeta[K]> }>) {
    useSeoMeta({
        title,
        description,

        ogType: type,
        ogTitle: embedTitle || title,
        ogUrl: url,
        ogDescription: description,
        ogImage: imageUrl,

        twitterTitle: embedTitle || title,
        twitterCard: imageType === 'large' ? 'summary_large_image' : 'summary',
        twitterDescription: description,
        twitterImage: imageUrl,

        themeColor: color,
    });
}
