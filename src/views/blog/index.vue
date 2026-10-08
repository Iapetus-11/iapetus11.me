<script setup lang="ts">
    import PageLayout from '@/components/layout/PageLayout.vue';
    import ShowcaseCard from '@/components/ShowcaseCard.vue';
    import villagerBotWebp from '@/assets/images/projects/villager-bot.webp';
</script>

<template>
    <PageLayout title="Blog / Dump">
        <div class="fade-in flex w-full grow flex-col gap-16 md:gap-20 lg:w-3/5 xl:w-4/7">
            <ShowcaseCard
                title="Link Dump"
                description="Link dump"
                link="/blog/links"
                :image="villagerBotWebp"
            />

            <ShowcaseCard
                title="Miata"
                description="Showing off my Miaaaata"
                link="/blog/miata"
                :image="villagerBotWebp"
            />
        </div>
    </PageLayout>
</template>
