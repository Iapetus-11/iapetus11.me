<script setup lang="ts">
    import { calculateYearsSince } from '@/utils/datetime';
    import StickyLayout from '../StickyLayout.vue';
    import { DATE_BECAME_ALIVE, DATE_BECAME_PROGRAMMER_NERD } from '@/data/me';
    import SocialButtons from './social/SocialButtons.vue';
    import SectionButtons from './nav/SectionButtons.vue';
    import Link from '@/components/Link.vue';

    const aliveForYears = calculateYearsSince(DATE_BECAME_ALIVE);
    const programmingForYears = calculateYearsSince(DATE_BECAME_PROGRAMMER_NERD);
</script>

<template>
    <StickyLayout>
        <template #sticky>
            <div class="flex items-center max-lg:mx-auto sm:max-lg:w-full lg:-ml-1 xl:-ml-2">
                <RouterLink
                    :to="$route.name === 'home' ? $route : { name: 'home' }"
                    class="shrink-0"
                >
                    <img
                        src="@/assets/images/petus.webp"
                        alt="Iapetus11's Profile Picture"
                        class="outline-primary-400/30 hover:outline-primary-400/70 xs:size-15 pixel-image -mt-1 mr-3.5 size-14 rounded-full! outline-1 outline-offset-3 transition-[colors,scale] hover:scale-105 sm:size-16 md:mr-5 md:size-18 xl:size-20"
                        width="128"
                        height="128"
                        fetchpriority="high"
                    />
                </RouterLink>

                <div>
                    <h1
                        class="xs:text-4xl font-mono text-3xl font-bold whitespace-nowrap xl:text-5xl"
                    >
                        Milo<span class="text-primary-400 mx-2 xl:mx-4">/</span>Iapetus11
                    </h1>
                    <h2
                        class="text-primary-400 mt-1 text-sm font-medium whitespace-nowrap italic sm:text-base lg:text-lg xl:text-xl"
                    >
                        Full-Stack Software Engineer & Hobbyist
                    </h2>
                </div>

                <div
                    class="mr-3 ml-auto flex flex-col-reverse items-center gap-3 text-lg max-sm:hidden md:mr-4 lg:hidden"
                >
                    <div class="font-mono lg:hidden">
                        <Link
                            :to="{ name: 'home' }"
                            class="text-link tracking-wide underline-offset-2"
                            :class="{ 'decoration-primary-300': $route.name === 'home' }"
                            >Home</Link
                        >
                        |
                        <Link
                            :to="{ name: 'blog' }"
                            class="text-link tracking-wide underline-offset-2"
                            :class="{ 'decoration-primary-300': $route.name === 'blog' }"
                            >Blog</Link
                        >
                    </div>

                    <div class="flex items-center gap-2">
                        <SocialButtons />
                    </div>
                </div>
            </div>

            <p
                class="lg:text-md [&>*>a]:text-link space-y-4 *:block max-lg:order-last md:text-lg lg:min-h-[244px] lg:max-xl:w-[110%] xl:min-h-[220px] 2xl:min-h-[200px] 2xl:text-lg"
            >
                <span>
                    I'm a {{ aliveForYears }} year-old full-stack developer who's been programming
                    for {{ programmingForYears }} years and loves to learn new things!
                </span>
                <slot name="description" />
            </p>

            <SectionButtons class="my-auto max-lg:hidden" />

            <div class="flex items-center gap-10 max-lg:mx-auto sm:max-lg:hidden lg:mt-auto">
                <div class="font-mono text-lg lg:hidden">
                    <Link
                        :to="{ name: 'home' }"
                        class="text-link tracking-wide underline-offset-2"
                        :class="{ 'decoration-primary-300': $route.name === 'home' }"
                        >Home</Link
                    >
                    |
                    <Link
                        :to="{ name: 'blog' }"
                        class="text-link tracking-wide underline-offset-2"
                        :class="{ 'decoration-primary-300': $route.name === 'blog' }"
                        >Blog</Link
                    >
                </div>

                <div class="xs:gap-3 flex items-center gap-2 md:gap-2">
                    <SocialButtons />
                </div>
            </div>
        </template>

        <template #scrollable>
            <slot />
        </template>
    </StickyLayout>
</template>
