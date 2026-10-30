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
        <!-- TODO: Fade in bad -->
        <ul ref="posts-list" class="fade-in flex w-full flex-col gap-6">
            <template v-for="i in 5" :key="i">
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
            </template>
        </ul>
    </ProfileStickyLayout>
</template>
