<script setup lang="ts">
    import ShowcaseCard from '@/components/ShowcaseCard.vue';
    import villagerBotWebp from '@/assets/images/projects/villager-bot.webp';
    import ProfileStickyLayout from '@/components/layout/profile-sticky-layout/ProfileStickyLayout.vue';
</script>

<template>
    <ProfileStickyLayout>
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
                link="/blog/miata"
                :image="villagerBotWebp"
                small
            />

            <!-- Get last element to appear correctly with useScrollCardEffect -->
            <div class="order-last max-sm:h-32 lg:h-32"></div>
        </ul>
    </ProfileStickyLayout>
</template>
