<script setup lang="ts">
    // import Skill from '~/components/Skill.vue';
    // import { SKILLS } from '~/data/skills';
    import ProfileSection from './components/LeftSection.vue';
    import Project from './components/Project.vue';
    import { PROJECTS } from '~/data/projects';

    definePageMeta({
        title: false,
    });

    defineRouteRules({
        prerender: true,
    });
</script>

<template>
    <div class="flex h-full w-full gap-36">
        <ProfileSection />

        <div class="ml-auto flex w-1/2 flex-col gap-4">
            <Project v-for="(project, idx) in PROJECTS" v-bind="project" :key="project.name" :idx />
        </div>
    </div>
</template>
