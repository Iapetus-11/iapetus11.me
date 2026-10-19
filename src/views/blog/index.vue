<script setup lang="ts">
    import ShowcaseCard from '@/components/ShowcaseCard.vue';
    import villagerBotWebp from '@/assets/images/projects/villager-bot.webp';
    import StickyLayout from '@/components/layout/StickyLayout.vue';
    import { computed, useTemplateRef } from 'vue';
    import { useScrollCardEffect } from '@/utils/scrollCardEffect';

    const container = useTemplateRef('posts-list');
    const postElements = computed(() => [...((container.value?.children ?? []) as HTMLElement[])]);

    useScrollCardEffect(postElements);
</script>

<template>
    <StickyLayout>
        <template #sticky>
            <div class="xs:max-lg:w-full flex items-center max-lg:mx-auto lg:-ml-1">
                <RouterLink :to="{ name: 'home' }" class="shrink-0">
                    <img
                        src="@/assets/images/petus.webp"
                        alt="Iapetus11's Profile Picture"
                        class="outline-primary-400/30 hover:outline-primary-400/70 xs:size-15 pixel-image mr-3.5 size-14 rounded-full! outline-1 outline-offset-3 transition-[colors,scale] hover:scale-105 sm:size-16 md:mr-5 md:size-18 xl:size-20"
                        width="128"
                        height="128"
                        fetchpriority="high"
                    />
                </RouterLink>

                <div>
                    <h1
                        class="font-mono text-3xl font-bold whitespace-nowrap sm:text-4xl xl:text-5xl"
                    >
                        Milo<span class="text-primary-400 mx-2 xl:mx-4">/</span>Iapetus11
                    </h1>
                    <h2
                        class="text-primary-400 mt-1 text-sm font-medium whitespace-nowrap italic sm:text-base lg:text-lg xl:text-xl"
                    >
                        Full-Stack Software Engineer & Hobbyist
                    </h2>
                </div>

                <div class="xs:max-lg:grid ml-auto hidden grid-cols-2 justify-items-center gap-1">
                    <SocialButtons />
                </div>
            </div>

            <p
                class="lg:text-md [&>*>a]:text-link space-y-4 *:block max-lg:order-last md:text-lg 2xl:text-lg"
            >
                <span>
                    I'm a 69 year-old full-stack developer who's been programming for 420 years and
                    loves to learn new things!
                </span>
                <span>
                    I'm currently learning Neovim, loving Rust, and working with Django + Vue.js for
                    <a href="https://medshift.com/" target="_blank" rel="noreferrer nofollow">
                        MedShift</a
                    >. If I'm not programming or bouldering, you'll find me zooming on mountain
                    backroads in my Miata!
                </span>
                <span class="lg:hidden">
                    Check out my <Link :to="{ name: 'blog' }">blog</Link> unless you're a robot.
                </span>
            </p>

            <SectionButtons class="my-auto max-lg:hidden" />

            <div class="xs:max-lg:hidden flex gap-3 max-lg:mx-auto max-lg:mt-1 md:gap-2 lg:mt-auto">
                <SocialButtons />
            </div>
        </template>

        <template #scrollable>
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
        </template>
    </StickyLayout>
</template>
