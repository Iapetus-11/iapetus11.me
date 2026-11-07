<script setup lang="ts">
    import ShowcaseCard from '@/components/ShowcaseCard.vue';
    import villagerBotWebp from '@/assets/images/projects/villager-bot.webp';
    import ProfileStickyLayout from '@/components/layout/profile-sticky-layout/ProfileStickyLayout.vue';
    import { navigationHistory } from '@/router';

    const cameFromHome = navigationHistory.value[0]?.name === 'home';
</script>

<template>
    <ProfileStickyLayout>
        <template #description>
            <span :class="{ 'lg:fade-in': cameFromHome }">
                I don't really use social media, but I still want to share with my friends and
                others. I hope you find my content to be educative, entertaining, or otherwise
                interesting.
            </span>
        </template>

        <ul class="lg:slide-in flex w-full flex-col gap-6">
            <ShowcaseCard
                title="Link Dump"
                description="A collection of links to places or people I find interesting, useful, or nice"
                link="/blog/links"
                :image="villagerBotWebp"
                small
            />

            <ShowcaseCard
                title="Miata"
                description="My most biggest & most expensive toy"
                link="/blog/miata"
                :image="villagerBotWebp"
                small
            />

            <ShowcaseCard
                title="Good Code & Engineering"
                description="Some thoughts, tips, and ideas from my experience and reading"
                link="/blog/good-engineering"
                :image="villagerBotWebp"
                small
            />
        </ul>
    </ProfileStickyLayout>
</template>
