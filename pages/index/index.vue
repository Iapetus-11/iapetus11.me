<script setup lang="ts">
    import { calculateYearsSince } from '~/utils/datetime';
    import Skill from '~/pages/index/Skill.vue';
    import { SKILLS } from '~/pages/index/skills';

    definePageMeta({
        layout: 'home',
    });

    const ABOUT_ME = (() => {
        const aliveForYears = calculateYearsSince(new Date('9/1/2003'));
        const programmingForYears = calculateYearsSince(new Date('8/1/2016'));

        return (
            `Hey! I'm Milo, a ${aliveForYears} year-old full-stack developer who's been programming for ` +
            `${programmingForYears}+ years and loves to learn new things!`
        );
    })();
</script>

<template>
    <div class="mb-6 mt-2 flex gap-x-20 gap-y-3 max-md:flex-col lg:gap-x-32">
        <!-- Mobile navigation -->
        <div class="grid grid-cols-7 items-center gap-6 p-4 md:hidden">
            <div class="col-span-2 mx-auto grid grid-cols-2 gap-4">
                <NavigationExternalPages />
            </div>

            <div class="col-span-3">
                <NuxtImg src="petus.png" preload class="rounded-full" />
            </div>

            <div class="col-span-2 mx-auto flex flex-col gap-4">
                <NavigationPages />
            </div>
        </div>

        <div class="flex flex-col items-center justify-center">
            <NuxtImg
                src="petus.png"
                alt="Iapetus11's Profile Picture"
                preload
                class="animate-fade-in mb-10 rounded-full max-md:hidden"
            />

            <span
                class="animate-fade-in mb-3 text-3xl font-semibold text-aqua-normal"
                style="animation-delay: 50ms"
            >
                Milo <span class="text-white">/</span> Iapetus11
            </span>
            <p
                class="animate-fade-in text-lg font-medium text-gray-100 max-md:text-center lg:-mx-4"
                style="animation-delay: 100ms"
            >
                {{ ABOUT_ME }}
            </p>
        </div>

        <!-- Desktop navigation -->
        <div class="flex flex-col justify-center space-y-6">
            <NavigationCombined class="max-md:hidden" />

            <!-- Skill sections and cards -->
            <div v-for="{ title, items } in SKILLS" :key="title">
                <h3
                    class="animate-fade-in mb-2.5 ml-1.5 text-2xl font-semibold text-aqua-normal max-md:text-center"
                >
                    {{ title }}
                </h3>

                <div class="animate-fade-in flex flex-wrap gap-2 max-md:justify-center">
                    <Skill
                        v-for="(item, idx) in items"
                        :key="item.name"
                        v-bind="item"
                        class="animate-fade-in"
                        :style="{
                            'animation-delay': `${(idx + 1) * 25}ms`,
                            'animation-fill-mode': 'both',
                        }"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
