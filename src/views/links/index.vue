<script setup lang="ts">
    import { PEOPLE_LINKS, ONLINE_TOOL_LINKS, SOFTWARE_LINKS } from '@/data/links';
    import LinksSection from './LinksSection.vue';
    import { SITE_URL, useSeo } from '@/utils/head';
    import PageLayout from '@/components/layout/PageLayout.vue';

    useSeo({
        title: 'Milo | Links',
        description: 'Dump of links to places or people I find interesting, useful, or nice.',
        url: `${SITE_URL}links`,
    });
</script>

<template>
    <PageLayout title="Link Dump">
        <template #subheading>
            <p class="mt-2 text-gray-200 md:max-w-4/5">
                Here's a dump of links to places or people I find interesting, useful, or nice. I
                got the idea from a colleague, and as he referenced:
                <a
                    href="https://www.marginalia.nu/log/19-website-discoverability-crisis/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-link"
                >
                    the internet needs more links</a
                >.
            </p>
        </template>

        <div
            class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-x-14"
            style="grid-template-rows: masonry !important"
        >
            <LinksSection title="Online Tools" :links="ONLINE_TOOL_LINKS" />
            <LinksSection title="Friends & Colleagues" :links="PEOPLE_LINKS" />
            <LinksSection title="Software" :links="SOFTWARE_LINKS" />
        </div>
    </PageLayout>
</template>
