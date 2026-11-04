<script setup lang="ts">
    import ShowcaseCard from '@/components/ShowcaseCard.vue';
    import villagerBotWebp from '@/assets/images/projects/villager-bot.webp';
    import { computed, useTemplateRef } from 'vue';
    import { useScrollCardEffect } from '@/utils/scrollCardEffect';
    import ProfileStickyLayout from '@/components/layout/profile-sticky-layout/ProfileStickyLayout.vue';

    const container = useTemplateRef('posts-list');
    const postElements = computed(() => [...((container.value?.children ?? []) as HTMLElement[])]);

    useScrollCardEffect(postElements);
</script>

<template>
    <ProfileStickyLayout>
        <ul ref="posts-list" class="lg:slide-in flex w-full flex-col gap-6">
            <ShowcaseCard
                title="Link Dump"
                description="A collection of links to places or people I find interesting, useful, or nice."
                link="/blog/links"
                :image="villagerBotWebp"
            />

            <ShowcaseCard
                title="Miata"
                description="Pictures of my Miata & my "
                link="/blog/miata"
                :image="villagerBotWebp"
            />

            <ShowcaseCard
                title="Good Code & Engineering"
                description="Some thoughts, tips, and ideas from my experience and reading."
                link="/blog/miata"
                :image="villagerBotWebp"
            />

            <!-- Get last element to appear correctly with useScrollCardEffect -->
            <div class="order-last max-sm:h-32 lg:h-32"></div>
        </ul>
    </ProfileStickyLayout>
</template>
