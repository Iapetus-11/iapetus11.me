<script setup lang="ts">
    import { PROJECTS } from '~/data/projects';

    definePageMeta({
        title: false,
    });

    defineRouteRules({
        prerender: true,
    });

    const PROFILE_PIC_SCROLLY_THRESHOLD = 20;
    const windowScroll = useWindowScroll();
</script>

<template>
    <div class="flex h-full w-full gap-36">
        <div class="flex flex-col">
            <AboutMeSection
                class="opacity-100 transition-opacity"
                :class="{ '!opacity-0': windowScroll.y > PROFILE_PIC_SCROLLY_THRESHOLD }"
            />

            <SkillsSection />
        </div>

        <div class="ml-auto flex w-1/2 flex-col gap-7">
            <Project v-for="(project, idx) in PROJECTS" v-bind="project" :key="project.name" :idx />
        </div>
    </div>
</template>
