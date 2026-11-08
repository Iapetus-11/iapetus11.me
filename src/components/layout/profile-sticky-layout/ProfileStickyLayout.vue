<script setup lang="ts">
    import { calculateYearsSince } from '@/utils/datetime';
    import StickyLayout from '../StickyLayout.vue';
    import { DATE_BECAME_ALIVE, DATE_BECAME_PROGRAMMER_NERD } from '@/data/me';
    import SocialButtons from './social/SocialButtons.vue';
    import SectionButtons from './nav/SectionButtons.vue';

    const aliveForYears = calculateYearsSince(DATE_BECAME_ALIVE);
    const programmingForYears = calculateYearsSince(DATE_BECAME_PROGRAMMER_NERD);
</script>

<template>
    <StickyLayout>
        <template #sticky>
            <div class="xs:max-lg:w-full flex items-center max-lg:mx-auto lg:-ml-1 xl:-ml-2">
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
                class="lg:text-md [&>*>a]:text-link space-y-4 *:block max-lg:order-last md:text-lg lg:min-h-[244px] xl:min-h-[220px] 2xl:min-h-[200px] 2xl:text-lg"
            >
                <span>
                    I'm a {{ aliveForYears }} year-old full-stack developer who's been programming
                    for {{ programmingForYears }} years and loves to learn new things!
                </span>
                <slot name="description" />
            </p>

            <SectionButtons class="my-auto max-lg:hidden" />

            <div class="xs:max-lg:hidden flex gap-3 max-lg:mx-auto max-lg:mt-1 md:gap-2 lg:mt-auto">
                <SocialButtons />
            </div>
        </template>

        <template #scrollable>
            <slot />
        </template>
    </StickyLayout>
</template>
