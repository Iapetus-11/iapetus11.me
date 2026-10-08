<script setup lang="ts">
    import PageLayout from '@/components/layout/PageLayout.vue';
    import { computed, useTemplateRef } from 'vue';
    import { useScrollCardEffect } from '@/utils/scrollCardEffect';
    import ShowcaseCard from '@/components/ShowcaseCard.vue';

    const POSTS_CONTAINER_NOSCRIPT_HTML = `
    <style>
        #posts-container {
            opacity: 1 !important;
        }
    </style>
    `;

    const container = useTemplateRef('posts-container');
    const projectElements = computed(() => [
        ...((container.value?.children ?? []) as HTMLElement[]),
    ]);

    useScrollCardEffect(projectElements);
</script>

<template>
    <PageLayout title="Blog / Dump">
        <noscript v-html="POSTS_CONTAINER_NOSCRIPT_HTML"></noscript>
        <div
            ref="posts-container"
            id="posts-container"
            class="fade-in flex flex-col gap-16 opacity-[0.0001] md:gap-20"
        >
            <ShowcaseCard title="Link Dump" description="Link dump" link="/blog/links" image="" />

            <ShowcaseCard
                title="Miata"
                description="Showing off my Miaaaata"
                link="/blog/miata"
                image=""
            />
        </div>
    </PageLayout>
</template>
